import Link from 'next/link';
import styles from './AuthShell.module.css';

type Props = {
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

/** Moldura das telas de login, esqueci a senha e redefinir senha. */
export default function AuthShell({ title, subtitle, children }: Props) {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <Link href="/" aria-label="Tec3 Commerce, início" className={styles.logoLink}>
          <img src="/assets/logo-tec3.png" alt="Tec3 Commerce" className={styles.logo} />
        </Link>
        <span className={styles.eyebrow}>Área do cliente</span>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </main>
      <Link href="/" className={styles.back}>
        ← Voltar ao site
      </Link>
    </div>
  );
}
