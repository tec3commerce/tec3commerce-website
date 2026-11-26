'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { homeFor, type Role } from '@/lib/api';
import { useSession } from './SessionProvider';
import styles from './PortalShell.module.css';

type Props = {
  /** Papel exigido para ver a área. */
  role: Role;
  /** Nome da área, mostrado ao lado do logo. */
  area: string;
  children: React.ReactNode;
};

/**
 * Moldura da área do cliente e do admin. Só mostra o conteúdo para quem está logado com o papel certo:
 * sem sessão vai para /login (voltando depois para esta página); papel errado vai para a sua própria área.
 */
export default function PortalShell({ role, area, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { status, user, logout } = useSession();

  useEffect(() => {
    if (status === 'anonymous') router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    else if (status === 'authenticated' && user && user.role !== role) router.replace(homeFor(user.role));
  }, [status, user, role, pathname, router]);

  if (status !== 'authenticated' || !user || user.role !== role) {
    return (
      <div className={styles.loadingPage} aria-busy="true">
        <img src="/assets/icone-tec3.png" alt="" className={styles.loadingIcon} />
        <span className={styles.loadingText}>Carregando…</span>
      </div>
    );
  }

  async function onLogout() {
    await logout();
    router.replace('/login');
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link href={homeFor(role)} className={styles.brand}>
            <img src="/assets/logo-tec3.png" alt="Tec3 Commerce" className={styles.logo} />
            <span className={styles.area}>{area}</span>
          </Link>
          <div className={styles.user}>
            <span className={styles.userName}>{user.client?.name ?? user.name}</span>
            <button type="button" className={styles.logout} onClick={onLogout}>
              Sair
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
