'use client';

import { useEffect } from 'react';

type Props = {
  /** Distância (px) do deslocamento vertical na animação de entrada dos elementos [data-reveal]. */
  revealDistance?: number;
  /** Duração (ms) da animação de entrada. */
  revealDuration?: number;
  /** Força o autoplay (mudo, em loop) de todos os vídeos da página, inclusive no iOS. */
  videos?: boolean;
};

/**
 * Efeitos de página do site original:
 * - revela com animação os elementos [data-reveal] (com atraso opcional em data-delay) ao entrarem na tela;
 * - mantém os vídeos tocando em loop e sem som.
 */
export default function PageEffects({ revealDistance = 28, revealDuration = 800, videos = false }: Props) {
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let io: IntersectionObserver | undefined;
    let unlock: (() => void) | undefined;

    if (videos) {
      const playAll = () => {
        document.querySelectorAll('video').forEach((v) => {
          v.muted = true;
          v.defaultMuted = true;
          v.loop = true;
          v.playsInline = true;
          v.setAttribute('muted', '');
          v.setAttribute('playsinline', '');
          v.setAttribute('webkit-playsinline', '');
          v.setAttribute('autoplay', '');
          const go = () => {
            v.play()?.catch(() => {});
          };
          if (v.readyState >= 2) go();
          else {
            v.addEventListener('loadeddata', go, { once: true });
            v.addEventListener('canplay', go, { once: true });
            try {
              v.load();
            } catch {}
          }
        });
      };
      timers.push(setTimeout(playAll, 200), setTimeout(playAll, 1500));
      unlock = () => playAll();
      document.addEventListener('touchstart', unlock, { once: true, passive: true });
      document.addEventListener('click', unlock, { once: true });
    }

    if ('IntersectionObserver' in window) {
      timers.push(
        setTimeout(() => {
          const vh = window.innerHeight || 800;
          io = new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (!e.isIntersecting) return;
                const delay = Number(e.target.getAttribute('data-delay') || 0);
                e.target.animate(
                  [
                    { opacity: 0, transform: `translateY(${revealDistance}px)` },
                    { opacity: 1, transform: 'none' },
                  ],
                  { duration: revealDuration, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' },
                );
                if (e.target instanceof HTMLVideoElement) e.target.play()?.catch(() => {});
                io?.unobserve(e.target);
              });
            },
            { threshold: 0.12 },
          );
          document.querySelectorAll('[data-reveal]').forEach((el) => {
            if (el.getBoundingClientRect().top > vh) io?.observe(el);
          });
        }, 250),
      );
    }

    return () => {
      timers.forEach(clearTimeout);
      io?.disconnect();
      if (unlock) {
        document.removeEventListener('touchstart', unlock);
        document.removeEventListener('click', unlock);
      }
    };
  }, [revealDistance, revealDuration, videos]);

  return null;
}
