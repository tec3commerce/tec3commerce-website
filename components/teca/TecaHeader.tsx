'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/app/teca/page.module.css';

const MENU = [
  { label: 'Brand', href: '#frentes', n: 'i.' },
  { label: 'Eventos', href: '#frentes', n: 'ii.' },
  { label: 'Lives', href: '#frentes', n: 'iii.' },
  { label: 'Trabalhos', href: '#trabalhos', n: 'iv.' },
  { label: 'Contato', href: '#contato', n: 'v.' },
];

/** Cabeçalho próprio da TEC·A (abaixo do cabeçalho Tec3) com o menu mobile da marca. */
export default function TecaHeader({ wa }: { wa: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={styles.headerHeader}>
        <nav className={styles.headerNav} aria-label="Principal">
          <a href="#topo" aria-label="Teca, início">
            <img className={styles.headerImage} src="/assets/teca-logo-noite.svg" alt="TEC·A" />
          </a>
          <div className={`${styles.nav} ${styles.headerEyebrow}`}>
            <a className={styles.u} href="#frentes">
              Brand
            </a>{' '}
            <a className={styles.u} href="#frentes">
              Eventos
            </a>{' '}
            <a className={styles.u} href="#frentes">
              Lives
            </a>{' '}
            <a className={styles.u} href="#trabalhos">
              Trabalhos
            </a>
          </div>
          <a className={`${styles.btn} ${styles.cta} ${styles.headerButton}`} href="#contato">
            Projetos sob consulta
          </a>
          <button
            className={`${styles.burger} ${styles.headerButton2}`}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            Menu{' '}
            <span className={styles.headerLabel} aria-hidden="true">
              <span className={styles.headerLabel2} />
              <span className={styles.headerLabel3} />
            </span>
          </button>
        </nav>
      </header>
      {open && (
        <>
          <div className={styles.menuStack} role="dialog" aria-modal="true" aria-label="Menu">
            <div className={styles.menuRow}>
              <img className={styles.image} src="/assets/teca-logo-marfim.svg" alt="TEC·A" />
              <button className={styles.menuButton} type="button" onClick={close} aria-label="Fechar menu">
                Fechar{' '}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className={styles.menuNav} aria-label="Menu mobile">
              {MENU.map((m, i) => (
                <a key={i} className={styles.menuLink} href={m.href} onClick={close}>
                  <span className={styles.menuLabel}>{m.n}</span> <span className={styles.menuLabel2}>{m.label}</span>
                </a>
              ))}
            </nav>
            <div className={styles.menuStack2}>
              <a className={styles.menuButton2} href={wa} onClick={close}>
                Projetos sob consulta
              </a>
              <div className={styles.menuRow2}>
                <a href="https://www.instagram.com/atecataon/">@atecataon</a>
                <Link href="/">Grupo Tec3</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
