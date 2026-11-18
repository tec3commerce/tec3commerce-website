'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const MENU = [
  { label: 'Brand', href: '#frentes', n: 'i.' },
  { label: 'Eventos', href: '#frentes', n: 'ii.' },
  { label: 'Lives', href: '#frentes', n: 'iii.' },
  { label: 'Trabalhos', href: '#trabalhos', n: 'iv.' },
  { label: 'Contato', href: '#contato', n: 'v.' },
].map((m, i) => ({ ...m, delay: 0.08 + i * 0.07 + 's' }));

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
      <header style={{ position: 'relative', zIndex: '20', background: '#F3EDE2', borderBottom: '1px solid #17110F' }}>
        <nav
          aria-label="Principal"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '20px clamp(20px,4vw,64px)',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <a href="#topo" aria-label="Teca, início">
            <img
              src="/assets/teca-logo-noite.svg"
              alt="TEC·A"
              style={{ height: '32px', width: 'auto', display: 'block' }}
            />
          </a>
          <div
            className="tc-nav"
            style={{
              gap: '32px',
              fontSize: '13px',
              fontWeight: '400',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
            }}
          >
            <a className="tc-u" href="#frentes">
              Brand
            </a>{' '}
            <a className="tc-u" href="#frentes">
              Eventos
            </a>{' '}
            <a className="tc-u" href="#frentes">
              Lives
            </a>{' '}
            <a className="tc-u" href="#trabalhos">
              Trabalhos
            </a>
          </div>
          <a
            className="tc-btn tc-cta"
            href="#contato"
            style={{
              marginLeft: 'auto',
              border: '1px solid #17110F',
              padding: '14px 24px',
              fontSize: '13px',
              fontWeight: '400',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
            }}
          >
            Projetos sob consulta
          </a>
          <button
            className="tc-burger"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            style={{
              marginLeft: 'auto',
              height: '48px',
              padding: '0 4px 0 16px',
              border: 'none',
              background: 'transparent',
              color: '#17110F',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontFamily: 'Poppins,sans-serif',
              fontSize: '13px',
              fontWeight: '400',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
            }}
          >
            Menu{' '}
            <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ display: 'block', width: '26px', height: '1px', background: '#17110F' }} />
              <span
                style={{
                  display: 'block',
                  width: '18px',
                  height: '1px',
                  background: '#17110F',
                  alignSelf: 'flex-end',
                }}
              />
            </span>
          </button>
        </nav>
      </header>
      {/* MENU MOBILE */}
      {open && (
        <>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            style={{
              position: 'fixed',
              inset: '0',
              zIndex: '50',
              background: '#17110F',
              color: '#F3EDE2',
              display: 'flex',
              flexDirection: 'column',
              animation: 'teca-tc-fade .35s ease both',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                borderBottom: '1px solid rgba(243,237,226,.25)',
              }}
            >
              <img src="/assets/teca-logo-marfim.svg" alt="TEC·A" style={{ height: '32px', width: 'auto' }} />
              <button
                type="button"
                onClick={close}
                aria-label="Fechar menu"
                style={{
                  height: '48px',
                  padding: '0 4px 0 16px',
                  border: 'none',
                  background: 'transparent',
                  color: '#F3EDE2',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  fontFamily: 'Poppins,sans-serif',
                  fontSize: '13px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                }}
              >
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
            <nav
              aria-label="Menu mobile"
              style={{ flex: '1', overflowY: 'auto', padding: '24px 20px', display: 'flex', flexDirection: 'column' }}
            >
              {MENU.map((m, i) => (
                <a
                  key={i}
                  href={m.href}
                  onClick={close}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '18px',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(243,237,226,.18)',
                    animation: 'teca-tc-item .6s cubic-bezier(.2,.7,.2,1) both',
                    animationDelay: m.delay,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Lora,Georgia,serif',
                      fontStyle: 'italic',
                      fontSize: '18px',
                      color: '#D4204F',
                      minWidth: '32px',
                    }}
                  >
                    {m.n}
                  </span>{' '}
                  <span style={{ fontFamily: 'Lora,Georgia,serif', fontSize: '40px', lineHeight: '1.1' }}>
                    {m.label}
                  </span>
                </a>
              ))}
            </nav>
            <div
              style={{
                padding: '20px 20px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                animation: 'teca-tc-item .6s .4s cubic-bezier(.2,.7,.2,1) both',
              }}
            >
              <a
                href={wa}
                onClick={close}
                style={{
                  border: '1px solid #F3EDE2',
                  padding: '18px',
                  textAlign: 'center',
                  fontSize: '13px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                }}
              >
                Projetos sob consulta
              </a>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#B9AEA0' }}>
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
