import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/connect';
import './page.css';

export const metadata: Metadata = { title: 'Tec3 · TEC3 Connect' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div
        className="pg-connect"
        style={{
          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
          background: '#F5F4FA',
          color: '#16172B',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <SiteHeader current="connect" wa={vals.wa} />
        <main>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,8vw,104px) clamp(20px,4vw,48px)' }}
          >
            <div className="hero">
              <div>
                <div
                  style={{
                    animation: 'connect-t3-in .8s both',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#16172B',
                    color: '#D9F36A',
                    borderRadius: '100px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#D9F36A',
                      animation: 'connect-t3-blink 1.4s infinite',
                    }}
                  />
                  TEC3 Connect
                </div>
                <h1
                  style={{
                    animation: 'connect-t3-in .9s .1s both',
                    margin: '24px 0 0',
                    fontSize: 'clamp(44px,6.6vw,100px)',
                    lineHeight: '.98',
                    letterSpacing: '-.025em',
                    fontWeight: '700',
                  }}
                >
                  Todas as frentes.{' '}
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(#D9F36A,#D9F36A)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 88%',
                      backgroundSize: '100% 30%',
                    }}
                  >
                    Um time só.
                  </span>
                </h1>
                <p
                  style={{
                    animation: 'connect-t3-in .9s .2s both',
                    margin: '24px 0 0',
                    maxWidth: '560px',
                    fontSize: '19px',
                    lineHeight: '1.6',
                    color: '#5D5E6D',
                  }}
                >
                  O TEC3 Connect atende sua marca de forma 360°: loja, ERP, marketplaces, tráfego, pagamentos e conteúdo
                  trabalhando juntos, com um plano e um responsável.
                </p>
                <div
                  className="ctas"
                  style={{
                    animation: 'connect-t3-in .9s .3s both',
                    marginTop: '32px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <a
                    className="btn"
                    href={vals.wa}
                    style={{
                      background: '#16172B',
                      color: '#F5F4FA',
                      borderRadius: '100px',
                      padding: '18px 28px',
                      fontSize: '17px',
                      fontWeight: '600',
                      display: 'inline-flex',
                    }}
                  >
                    Quero o TEC3 Connect
                  </a>{' '}
                  <a
                    href="#frentes"
                    style={{
                      border: '1.5px solid #16172B',
                      borderRadius: '100px',
                      padding: '17px 26px',
                      fontSize: '17px',
                      fontWeight: '600',
                      display: 'inline-flex',
                    }}
                  >
                    Ver o que está incluso
                  </a>
                </div>
              </div>
              <div style={{ animation: 'connect-t3-in 1s .3s both' }}>
                <div
                  aria-hidden="true"
                  className="cn-board"
                  style={{
                    position: 'relative',
                    background: '#EFEDF9',
                    borderRadius: '32px',
                    padding: '22px',
                    backgroundImage: 'radial-gradient(rgba(38,42,96,.12) 1px,transparent 1.2px)',
                    backgroundSize: '24px 24px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      background: '#16172B',
                      color: '#F5F4FA',
                      borderRadius: '18px',
                      padding: '14px 18px',
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: '700' }}>Painel TEC3 Connect</span>{' '}
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12px',
                        color: '#D9F36A',
                      }}
                    >
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: '#D9F36A',
                          animation: 'connect-t3-blink 1.4s infinite',
                        }}
                      />
                      1 responsável
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <div
                      className="cn-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '12px minmax(0,1fr) auto',
                        gap: '14px',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid rgba(22,23,43,.08)',
                        borderRadius: '16px',
                        padding: '13px 16px',
                        animation: 'connect-cn-slide 9s 0.00s cubic-bezier(.2,.7,.2,1) infinite both',
                      }}
                    >
                      <span style={{ width: '12px', height: '36px', borderRadius: '6px', background: '#B5ABFC' }} />{' '}
                      <span style={{ minWidth: '0' }}>
                        <b style={{ display: 'block', fontSize: '15px' }}>Loja virtual</b>
                        <span style={{ fontSize: '13px', color: '#5D5E6D' }}>Nuvemshop · no ar</span>
                      </span>{' '}
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16172B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'connect-cn-tick 9s 0.50s ease both infinite',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D9F36A"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="cn-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '12px minmax(0,1fr) auto',
                        gap: '14px',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid rgba(22,23,43,.08)',
                        borderRadius: '16px',
                        padding: '13px 16px',
                        animation: 'connect-cn-slide 9s 0.35s cubic-bezier(.2,.7,.2,1) infinite both',
                      }}
                    >
                      <span style={{ width: '12px', height: '36px', borderRadius: '6px', background: '#E9E6FD' }} />{' '}
                      <span style={{ minWidth: '0' }}>
                        <b style={{ display: 'block', fontSize: '15px' }}>ERP</b>
                        <span style={{ fontSize: '13px', color: '#5D5E6D' }}>Olist ERP · sincronizado</span>
                      </span>{' '}
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16172B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'connect-cn-tick 9s 0.85s ease both infinite',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D9F36A"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="cn-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '12px minmax(0,1fr) auto',
                        gap: '14px',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid rgba(22,23,43,.08)',
                        borderRadius: '16px',
                        padding: '13px 16px',
                        animation: 'connect-cn-slide 9s 0.70s cubic-bezier(.2,.7,.2,1) infinite both',
                      }}
                    >
                      <span style={{ width: '12px', height: '36px', borderRadius: '6px', background: '#FFE14D' }} />{' '}
                      <span style={{ minWidth: '0' }}>
                        <b style={{ display: 'block', fontSize: '15px' }}>Marketplaces</b>
                        <span style={{ fontSize: '13px', color: '#5D5E6D' }}>3 canais · estoque único</span>
                      </span>{' '}
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16172B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'connect-cn-tick 9s 1.20s ease both infinite',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D9F36A"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="cn-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '12px minmax(0,1fr) auto',
                        gap: '14px',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid rgba(22,23,43,.08)',
                        borderRadius: '16px',
                        padding: '13px 16px',
                        animation: 'connect-cn-slide 9s 1.05s cubic-bezier(.2,.7,.2,1) infinite both',
                      }}
                    >
                      <span style={{ width: '12px', height: '36px', borderRadius: '6px', background: '#F6C6D4' }} />{' '}
                      <span style={{ minWidth: '0' }}>
                        <b style={{ display: 'block', fontSize: '15px' }}>Tráfego pago</b>
                        <span style={{ fontSize: '13px', color: '#5D5E6D' }}>Google, Meta e ChatGPT</span>
                      </span>{' '}
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16172B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'connect-cn-tick 9s 1.55s ease both infinite',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D9F36A"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="cn-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '12px minmax(0,1fr) auto',
                        gap: '14px',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid rgba(22,23,43,.08)',
                        borderRadius: '16px',
                        padding: '13px 16px',
                        animation: 'connect-cn-slide 9s 1.40s cubic-bezier(.2,.7,.2,1) infinite both',
                      }}
                    >
                      <span style={{ width: '12px', height: '36px', borderRadius: '6px', background: '#C8EBD5' }} />{' '}
                      <span style={{ minWidth: '0' }}>
                        <b style={{ display: 'block', fontSize: '15px' }}>Pagamentos</b>
                        <span style={{ fontSize: '13px', color: '#5D5E6D' }}>Stone · taxa exclusiva</span>
                      </span>{' '}
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16172B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'connect-cn-tick 9s 1.90s ease both infinite',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D9F36A"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="cn-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '12px minmax(0,1fr) auto',
                        gap: '14px',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid rgba(22,23,43,.08)',
                        borderRadius: '16px',
                        padding: '13px 16px',
                        animation: 'connect-cn-slide 9s 1.75s cubic-bezier(.2,.7,.2,1) infinite both',
                      }}
                    >
                      <span style={{ width: '12px', height: '36px', borderRadius: '6px', background: '#F3EDE2' }} />{' '}
                      <span style={{ minWidth: '0' }}>
                        <b style={{ display: 'block', fontSize: '15px' }}>Conteúdo e lives</b>
                        <span style={{ fontSize: '13px', color: '#5D5E6D' }}>TEC·A · live na sexta</span>
                      </span>{' '}
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16172B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'connect-cn-tick 9s 2.25s ease both infinite',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D9F36A"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '10px',
                      background: '#D9F36A',
                      borderRadius: '18px',
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      animation: 'connect-cn-done 9s 2.6s cubic-bezier(.2,.9,.3,1.2) infinite both',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>Tudo conectado</span>{' '}
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>Plano do mês: 1 meta, 6 frentes</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(22,23,43,.08)',
              borderBottom: '1px solid rgba(22,23,43,.08)',
            }}
          >
            <div
              style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,4vw,48px)' }}
            >
              <div data-reveal="1">
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#5B4FB0',
                  }}
                >
                  Por que 360°
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(34px,4.4vw,60px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                    maxWidth: '820px',
                  }}
                >
                  Cinco fornecedores e ninguém responsável? Acabou.
                </h2>
              </div>
              <div className="cn-vs" style={{ marginTop: '44px' }}>
                <div
                  data-reveal="1"
                  className="pad"
                  style={{ background: '#F5F4FA', borderRadius: '28px', padding: '34px' }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#5D5E6D',
                    }}
                  >
                    Do jeito comum
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '18px 0 0',
                      padding: '0',
                      fontSize: '17px',
                      lineHeight: '1.5',
                      color: '#5D5E6D',
                    }}
                  >
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}>
                      Agência de mídia culpa a loja
                    </li>
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}>
                      Quem fez a loja não fala com o ERP
                    </li>
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}>
                      Marketplace com estoque desencontrado
                    </li>
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}>
                      Você vira a ponte entre todo mundo
                    </li>
                  </ul>
                </div>
                <div
                  data-reveal="1"
                  data-delay="100"
                  className="pad"
                  style={{ background: '#16172B', color: '#F5F4FA', borderRadius: '28px', padding: '34px' }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#D9F36A',
                    }}
                  >
                    Com o TEC3 Connect
                  </div>
                  <ul
                    style={{ listStyle: 'none', margin: '18px 0 0', padding: '0', fontSize: '17px', lineHeight: '1.5' }}
                  >
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(245,244,250,.15)' }}>
                      Um plano para todas as frentes
                    </li>
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(245,244,250,.15)' }}>
                      Loja, ERP e canais integrados desde o início
                    </li>
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(245,244,250,.15)' }}>
                      Mídia e conteúdo puxando para o mesmo objetivo
                    </li>
                    <li style={{ padding: '12px 0', borderTop: '1px solid rgba(245,244,250,.15)' }}>
                      Uma pessoa responsável, que você conhece pelo nome
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            id="frentes"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,4vw,48px)' }}
          >
            <div data-reveal="1">
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: '#5B4FB0',
                }}
              >
                O que está incluso
              </div>
              <h2
                style={{
                  margin: '14px 0 0',
                  fontSize: 'clamp(34px,4.4vw,60px)',
                  lineHeight: '1.04',
                  letterSpacing: '-.02em',
                  fontWeight: '700',
                  maxWidth: '820px',
                }}
              >
                As frentes que o Connect une.
              </h2>
            </div>
            <div className="g3" style={{ marginTop: '44px' }}>
              <Link
                data-reveal="1"
                data-delay="0"
                href="/nuvemshop"
                className="card pad"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '26px',
                  padding: '28px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>01</span>
                <h3 style={{ margin: '0', fontSize: '22px', fontWeight: '700' }}>Loja virtual</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                  Implantação e evolução na Nuvemshop ou na Olist.
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '14px', fontWeight: '700' }}>
                  Ver Nuvemshop →
                </span>
              </Link>
              <Link
                data-reveal="1"
                data-delay="70"
                href="/olist"
                className="card pad"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '26px',
                  padding: '28px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>02</span>
                <h3 style={{ margin: '0', fontSize: '22px', fontWeight: '700' }}>ERP e integrações</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                  Olist ERP no centro: estoque, notas e financeiro.
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '14px', fontWeight: '700' }}>
                  Ver Olist →
                </span>
              </Link>
              <Link
                data-reveal="1"
                data-delay="140"
                href="/marketplaces"
                className="card pad"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '26px',
                  padding: '28px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>03</span>
                <h3 style={{ margin: '0', fontSize: '22px', fontWeight: '700' }}>Marketplaces</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                  Mercado Livre, Shopee e TikTok Shop operados por nós.
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '14px', fontWeight: '700' }}>
                  Ver Marketplaces →
                </span>
              </Link>
              <Link
                data-reveal="1"
                data-delay="0"
                href="/trafego"
                className="card pad"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '26px',
                  padding: '28px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>04</span>
                <h3 style={{ margin: '0', fontSize: '22px', fontWeight: '700' }}>Tráfego pago</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                  Google, Meta e anúncios no ChatGPT.
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '14px', fontWeight: '700' }}>
                  Ver Tráfego pago →
                </span>
              </Link>
              <Link
                data-reveal="1"
                data-delay="70"
                href="/#servicos"
                className="card pad"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '26px',
                  padding: '28px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>05</span>
                <h3 style={{ margin: '0', fontSize: '22px', fontWeight: '700' }}>Pagamentos</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                  Taxas exclusivas Stone para clientes Tec3.
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '14px', fontWeight: '700' }}>
                  Ver Serviços →
                </span>
              </Link>
              <Link
                data-reveal="1"
                data-delay="140"
                href="/teca"
                className="card pad"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '26px',
                  padding: '28px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>06</span>
                <h3 style={{ margin: '0', fontSize: '22px', fontWeight: '700' }}>Conteúdo, lives e brand</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                  Social media, lives e eventos com a TEC·A.
                </p>
                <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '14px', fontWeight: '700' }}>
                  Ver TEC·A →
                </span>
              </Link>
            </div>
          </section>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(20px,4vw,48px) clamp(72px,9vw,120px)' }}
          >
            <div data-reveal="1">
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: '#5B4FB0',
                }}
              >
                Como funciona
              </div>
              <h2
                style={{
                  margin: '14px 0 0',
                  fontSize: 'clamp(34px,4.4vw,60px)',
                  lineHeight: '1.04',
                  letterSpacing: '-.02em',
                  fontWeight: '700',
                  maxWidth: '820px',
                }}
              >
                Do diagnóstico ao ritual de resultado.
              </h2>
            </div>
            <ol className="g4" style={{ listStyle: 'none', margin: '44px 0 0', padding: '0' }}>
              <li
                data-reveal="1"
                data-delay="0"
                className="pad"
                style={{
                  background: '#16172B',
                  color: '#F5F4FA',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#D9F36A',
                    color: '#16172B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                  }}
                >
                  1
                </span>
                <h3 style={{ margin: '6px 0 0', fontSize: '21px', fontWeight: '700' }}>Diagnóstico 360°</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: 'rgba(245,244,250,.78)' }}>
                  Olhamos loja, ERP, canais, mídia e conteúdo de uma vez, não em pedaços.
                </p>
              </li>
              <li
                data-reveal="1"
                data-delay="70"
                className="pad"
                style={{
                  background: '#16172B',
                  color: '#F5F4FA',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#D9F36A',
                    color: '#16172B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                  }}
                >
                  2
                </span>
                <h3 style={{ margin: '6px 0 0', fontSize: '21px', fontWeight: '700' }}>Plano integrado</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: 'rgba(245,244,250,.78)' }}>
                  Uma prioridade por mês, com metas que todas as frentes perseguem juntas.
                </p>
              </li>
              <li
                data-reveal="1"
                data-delay="140"
                className="pad"
                style={{
                  background: '#16172B',
                  color: '#F5F4FA',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#D9F36A',
                    color: '#16172B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                  }}
                >
                  3
                </span>
                <h3 style={{ margin: '6px 0 0', fontSize: '21px', fontWeight: '700' }}>Execução por um time só</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: 'rgba(245,244,250,.78)' }}>
                  Quem implanta, anuncia, opera e cria conteúdo conversa todo dia.
                </p>
              </li>
              <li
                data-reveal="1"
                data-delay="210"
                className="pad"
                style={{
                  background: '#16172B',
                  color: '#F5F4FA',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#D9F36A',
                    color: '#16172B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                  }}
                >
                  4
                </span>
                <h3 style={{ margin: '6px 0 0', fontSize: '21px', fontWeight: '700' }}>Ritual de resultado</h3>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: 'rgba(245,244,250,.78)' }}>
                  Reunião mensal com números de todas as frentes e o próximo passo.
                </p>
              </li>
            </ol>
          </section>
          <section style={{ padding: '0 clamp(12px,2vw,24px) clamp(12px,2vw,24px)' }}>
            <div
              data-reveal="1"
              className="pad"
              style={{
                background: '#D9F36A',
                borderRadius: '40px',
                padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,72px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '28px',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ maxWidth: '760px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(36px,5.4vw,80px)',
                    lineHeight: '.98',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  Sua operação inteira, conectada.
                </h2>
                <p style={{ margin: '18px 0 0', fontSize: '19px', lineHeight: '1.55', maxWidth: '560px' }}>
                  Conta o momento da sua marca. A gente mostra como o Connect se encaixa.
                </p>
              </div>
              <div className="ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  className="btn"
                  href={vals.wa}
                  style={{
                    background: '#16172B',
                    color: '#F5F4FA',
                    borderRadius: '100px',
                    padding: '19px 30px',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'inline-flex',
                  }}
                >
                  Quero o TEC3 Connect
                </a>
              </div>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </div>
      <PageEffects revealDistance={26} revealDuration={800} />
    </>
  );
}
