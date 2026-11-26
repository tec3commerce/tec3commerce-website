'use client';

import Link from 'next/link';
import { useSession } from '@/components/auth/SessionProvider';
import styles from '@/components/auth/portal.module.css';

// Início do admin. Boletos e arquivos entram nas próximas fases (dentro da página de cada cliente).
const SECTIONS = [
  ['Clientes', 'Cadastre, edite e exclua clientes, e envie o convite de acesso.', '/admin/clientes'],
  ['Boletos', 'Suba os boletos em PDF de cada cliente, na aba Boletos da página dele.', '/admin/clientes'],
  ['Arquivos', 'Envie contratos, relatórios e outros documentos para cada cliente.', null],
] as const;

export default function Page() {
  const { user } = useSession();
  return (
    <>
      <span className={styles.eyebrow}>Painel</span>
      <h1 className={styles.title}>Olá, {user?.name.split(' ')[0]}!</h1>
      <p className={styles.lead}>Gerencie os clientes da Tec3 Commerce e o que cada um vê na área do cliente.</p>
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
