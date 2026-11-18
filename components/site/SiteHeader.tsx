'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './header.css';

export type PageId = 'inicio' | 'nuvemshop' | 'olist' | 'marketplaces' | 'trafego' | 'teca' | 'connect';

const NAV: [PageId, string, string][] = [
  ['nuvemshop', 'Nuvemshop', '/nuvemshop'],
  ['olist', 'Olist', '/olist'],
  ['marketplaces', 'Marketplaces', '/marketplaces'],
  ['trafego', 'Tráfego pago', '/trafego'],
  ['teca', 'TEC·A', '/teca'],
];
const MENU: [PageId, string, string][] = [['inicio', 'Início', '/'], ...NAV, ['connect', 'TEC3 Connect', '/connect']];

const FONT = "'Nexa','Montserrat',system-ui,sans-serif";
const ACTIVE = '#5B4FB0';
const INK = '#16172B';

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
  const isConnect = current === 'connect';

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(245,244,250,.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(22,23,43,.08)',
          fontFamily: FONT,
        }}
      >
        <nav
          aria-label="Principal"
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '14px clamp(20px,3vw,40px)',
            display: 'flex',
            alignItems: 'center',
            gap: '26px',
          }}
        >
          <Link
            href="/"
            aria-label="Tec3 Commerce, início"
            style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}
          >
            <img
              src="/assets/logo-tec3.png"
              alt="Tec3 Commerce"
              style={{ height: '32px', width: 'auto', display: 'block' }}
            />
          </Link>
          <div
            className="t3x-nav"
            style={{ alignItems: 'center', gap: '22px', fontSize: '15px', fontWeight: 500, color: INK }}
          >
            {NAV.map(([id, label, href]) => (
              <Link
                key={id}
                className="t3x-link"
                href={href}
                aria-current={id === current ? 'page' : 'false'}
                style={{ color: id === current ? ACTIVE : INK, whiteSpace: 'nowrap' }}
              >
                {label}
              </Link>
            ))}
            <Link
              className="t3x-pill"
              href="/connect"
              aria-current={isConnect ? 'page' : 'false'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: isConnect ? INK : '#D9F36A',
                color: isConnect ? '#D9F36A' : INK,
                borderRadius: '100px',
                padding: '9px 16px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
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
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              className="t3x-cta t3x-pill"
              href={wa}
              style={{
                background: INK,
                color: '#F5F4FA',
                borderRadius: '100px',
                padding: '12px 20px',
                fontSize: '15px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              Fale com a gente
            </a>
            <button
              className="t3x-burger"
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `1.5px solid ${INK}`,
                background: 'transparent',
                color: INK,
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0,
              }}
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
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: '#F5F4FA',
            display: 'flex',
            flexDirection: 'column',
            animation: 't3-menu .3s ease both',
            backgroundImage: 'radial-gradient(rgba(38,42,96,.12) 1px,transparent 1.2px)',
            backgroundSize: '26px 26px',
            fontFamily: FONT,
            color: INK,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(22,23,43,.08)',
            }}
          >
            <img src="/assets/logo-tec3.png" alt="Tec3 Commerce" style={{ height: '30px', width: 'auto' }} />
            <button
              type="button"
              onClick={close}
              aria-label="Fechar menu"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: 'none',
                background: INK,
                color: '#F5F4FA',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0,
              }}
            >
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
          <nav
            aria-label="Menu mobile"
            style={{ flex: 1, overflowY: 'auto', padding: '12px 20px', display: 'flex', flexDirection: 'column' }}
          >
            {MENU.map(([id, label, href], i) => (
              <Link
                key={id}
                href={href}
                onClick={close}
                aria-current={id === current ? 'page' : 'false'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 0',
                  borderBottom: '1px solid rgba(22,23,43,.1)',
                  fontSize: '28px',
                  fontWeight: 700,
                  letterSpacing: '-.015em',
                  color: id === current ? ACTIVE : INK,
                  animation: 't3-item .5s cubic-bezier(.2,.7,.2,1) both',
                  animationDelay: `${(0.05 + i * 0.05).toFixed(2)}s`,
                }}
              >
                <span>{label}</span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: ACTIVE }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
          </nav>
          <div
            style={{
              padding: '14px 20px 26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              animation: 't3-item .5s .4s cubic-bezier(.2,.7,.2,1) both',
            }}
          >
            <a
              href={wa}
              onClick={close}
              style={{
                background: INK,
                color: '#F5F4FA',
                borderRadius: '100px',
                padding: '17px',
                fontSize: '17px',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Fale com a gente no WhatsApp
            </a>
            <Link
              href="/#area"
              onClick={close}
              style={{
                border: `1.5px solid ${INK}`,
                borderRadius: '100px',
                padding: '15px',
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Área do cliente
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
