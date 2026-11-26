'use client';

import Link from 'next/link';
import { useSession } from '@/components/auth/SessionProvider';
import styles from '@/components/auth/portal.module.css';

// Início da área do cliente. Arquivos e minha conta entram nas próximas fases.
const SECTIONS = [
  ['Boletos', 'Veja seus boletos, com valor, vencimento e linha digitável.', '/area-do-cliente/boletos'],
  ['Arquivos', 'Contratos, relatórios e outros documentos que enviamos para você.', null],
  ['Minha conta', 'Atualize seus dados, e-mail e senha.', null],
] as const;

export default function Page() {
  const { user } = useSession();
  return (
    <>
      <span className={styles.eyebrow}>{user?.client?.name}</span>
      <h1 className={styles.title}>Olá, {user?.name.split(' ')[0]}!</h1>
      <p className={styles.lead}>Este é o seu espaço na Tec3 Commerce.</p>
      <div className={styles.grid}>
        {SECTIONS.map(([title, text, href]) =>
          href ? (
            <Link key={title} href={href} className={styles.cardLink}>
              <span className={styles.badgeReady}>Abrir</span>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardText}>{text}</p>
            </Link>
          ) : (
            <section key={title} className={styles.card}>
              <span className={styles.badge}>Em breve</span>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardText}>{text}</p>
            </section>
          ),
        )}
      </div>
    </>
  );
}
