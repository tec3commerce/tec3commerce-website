'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PORTAL_ENABLED } from '@/lib/portal';
import styles from './SiteHeader.module.css';

export type PageId = 'inicio' | 'nuvemshop' | 'olist' | 'marketplaces' | 'trafego' | 'teca' | 'connect';

const NAV: [PageId, string, string][] = [
  ['nuvemshop', 'Nuvemshop', '/nuvemshop'],
  ['olist', 'Olist', '/olist'],
  ['marketplaces', 'Marketplaces', '/marketplaces'],
  ['trafego', 'Tráfego pago', '/trafego'],
  ['teca', 'TEC·A', '/teca'],
];
const MENU: [PageId, string, string][] = [['inicio', 'Início', '/'], ...NAV, ['connect', 'TEC3 Connect', '/connect']];

type Props = { current: PageId; wa: string };

export default function SiteHeader({ current, wa }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);
  const ariaCurrent = (id: PageId) => (id === current ? 'page' : 'false');

  return (
    <>
      <header className={styles.header}>
        <nav aria-label="Principal" className={styles.bar}>
          <Link href="/" aria-label="Tec3 Commerce, início" className={styles.logoLink}>
            <img src="/assets/logo-tec3.png" alt="Tec3 Commerce" className={styles.logo} />
          </Link>
          <div className={styles.nav}>
            {NAV.map(([id, label, href]) => (
              <Link key={id} className={styles.navLink} href={href} aria-current={ariaCurrent(id)}>
                {label}
              </Link>
            ))}
            <Link className={`${styles.pill} ${styles.connect}`} href="/connect" aria-current={ariaCurrent('connect')}>
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              TEC3 Connect
            </Link>
          </div>
          <div className={styles.actions}>
            {PORTAL_ENABLED && (
              <Link className={styles.clientLink} href="/login">
                Área do cliente
              </Link>
            )}
            <a className={`${styles.pill} ${styles.cta}`} href={wa}>
              Fale com a gente
            </a>
            <button
              className={styles.burger}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <svg
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 8h16M4 16h10" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className={styles.menu}>
          <div className={styles.menuTop}>
            <img src="/assets/logo-tec3.png" alt="Tec3 Commerce" className={styles.menuLogo} />
            <button type="button" onClick={close} aria-label="Fechar menu" className={styles.close}>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Menu mobile" className={styles.menuNav}>
            {MENU.map(([id, label, href], i) => (
              <Link key={id} href={href} onClick={close} aria-current={ariaCurrent(id)} className={styles.menuLink}>
                <span>{label}</span>
                <span className={styles.menuNumber}>{String(i + 1).padStart(2, '0')}</span>
              </Link>
            ))}
          </nav>
          <div className={styles.menuFooter}>
            <a href={wa} onClick={close} className={styles.menuWhatsapp}>
              Fale com a gente no WhatsApp
            </a>
            {PORTAL_ENABLED && (
              <Link href="/login" onClick={close} className={styles.menuClient}>
                Área do cliente
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
