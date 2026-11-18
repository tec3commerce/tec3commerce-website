import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/olist';
import './page.css';

export const metadata: Metadata = { title: 'Tec3 · Olist' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div
        className="pg-olist"
        style={{
          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
          background: '#F5F4FA',
          color: '#16172B',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <SiteHeader current="olist" wa={vals.wa} />
        <main>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,8vw,104px) clamp(20px,4vw,48px)' }}
          >
            <div className="hero">
              <div>
                <div style={{ animation: 'olist-t3-in .8s both', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src="/assets/selo-olist-ouro.png"
                    alt="Selo Parceira Ouro Olist"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#9A6A00',
                      }}
                    >
                      Parceira nível Ouro
                    </div>
                    <img
                      src="/assets/logo-olist-azul.png"
                      alt="olist"
                      style={{ height: '26px', width: 'auto', marginTop: '4px', display: 'block' }}
                    />
                  </div>
                </div>
                <h1
                  style={{
                    animation: 'olist-t3-in .9s .1s both',
                    margin: '26px 0 0',
                    fontSize: 'clamp(42px,6vw,88px)',
                    lineHeight: '1',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  Toda a sua operação em <span style={{ color: '#1C26D3' }}>um só ecossistema</span>.
                </h1>
                <p
                  style={{
                    animation: 'olist-t3-in .9s .2s both',
                    margin: '24px 0 0',
                    maxWidth: '560px',
                    fontSize: '19px',
                    lineHeight: '1.6',
                    color: '#5D5E6D',
                  }}
                >
                  ERP, loja virtual, envios e financeiro conversando entre si. A Tec3 implanta o ecossistema Olist
                  completo e faz a migração do seu ERP atual sem parar a operação.
                </p>
                <div
                  className="ctas"
                  style={{
                    animation: 'olist-t3-in .9s .3s both',
                    marginTop: '34px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <a
                    className="btn"
                    href={vals.wa}
                    style={{
                      background: '#1C26D3',
                      color: '#fff',
                      borderRadius: '100px',
                      padding: '18px 28px',
                      fontSize: '17px',
                      fontWeight: '600',
                      display: 'inline-flex',
                    }}
                  >
                    Quero migrar para a Olist
                  </a>{' '}
                  <a
                    href="#solucoes"
                    style={{
                      border: '1.5px solid #16172B',
                      borderRadius: '100px',
                      padding: '17px 26px',
                      fontSize: '17px',
                      fontWeight: '600',
                      display: 'inline-flex',
                    }}
                  >
                    Ver as soluções
                  </a>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pad"
                style={{
                  animation: 'olist-t3-in 1s .3s both',
                  background: '#FFFFFF',
                  borderRadius: '32px',
                  padding: '28px',
                  border: '1px solid rgba(22,23,43,.08)',
                  boxShadow: '0 40px 80px -48px rgba(28,38,211,.5)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#5D5E6D',
                    marginBottom: '16px',
                  }}
                >
                  Migração de ERP
                </div>
                <div className="ol-mig">
                  <div style={{ background: '#F5F4FA', borderRadius: '18px', padding: '16px', minHeight: '220px' }}>
                    <div style={{ fontSize: '13px', fontWeight: '700' }}>ERP atual</div>
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '6px',
                        background: '#E3E1EC',
                        marginTop: '12px',
                        width: '80%',
                      }}
                    />
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '6px',
                        background: '#E3E1EC',
                        marginTop: '12px',
                        width: '60%',
                      }}
                    />
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '6px',
                        background: '#E3E1EC',
                        marginTop: '12px',
                        width: '72%',
                      }}
                    />
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '6px',
                        background: '#E3E1EC',
                        marginTop: '12px',
                        width: '50%',
                      }}
                    />
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '6px',
                        background: '#E3E1EC',
                        marginTop: '12px',
                        width: '66%',
                      }}
                    />
                  </div>
                  <div style={{ position: 'relative', height: '200px', overflow: 'visible' }}>
                    <span
                      className="ol-chip"
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '18px',
                        background: '#1C26D3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600',
                        borderRadius: '100px',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                        '--d': 'calc(100% + 40px)',
                        animation: 'olist-ol-fly 3.2s 0.00s cubic-bezier(.6,0,.3,1) infinite',
                      }}
                    >
                      Produtos
                    </span>
                    <span
                      className="ol-chip"
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '52px',
                        background: '#1C26D3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600',
                        borderRadius: '100px',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                        '--d': 'calc(100% + 40px)',
                        animation: 'olist-ol-fly 3.2s 0.55s cubic-bezier(.6,0,.3,1) infinite',
                      }}
                    >
                      Estoque
                    </span>
                    <span
                      className="ol-chip"
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '86px',
                        background: '#1C26D3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600',
                        borderRadius: '100px',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                        '--d': 'calc(100% + 40px)',
                        animation: 'olist-ol-fly 3.2s 1.10s cubic-bezier(.6,0,.3,1) infinite',
                      }}
                    >
                      Clientes
                    </span>
                    <span
                      className="ol-chip"
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '120px',
                        background: '#1C26D3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600',
                        borderRadius: '100px',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                        '--d': 'calc(100% + 40px)',
                        animation: 'olist-ol-fly 3.2s 1.65s cubic-bezier(.6,0,.3,1) infinite',
                      }}
                    >
                      Notas
                    </span>
                    <span
                      className="ol-chip"
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '154px',
                        background: '#1C26D3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600',
                        borderRadius: '100px',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                        '--d': 'calc(100% + 40px)',
                        animation: 'olist-ol-fly 3.2s 2.20s cubic-bezier(.6,0,.3,1) infinite',
                      }}
                    >
                      Pedidos
                    </span>
                  </div>
                  <div
                    style={{
                      background: '#E8E9FB',
                      borderRadius: '18px',
                      padding: '16px',
                      minHeight: '220px',
                      border: '2px solid #1C26D3',
                    }}
                  >
                    <img src="/assets/logo-olist-azul.png" alt="" style={{ height: '18px', width: 'auto' }} />
                    <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>ERP</div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        animation: 'olist-ol-check 3.2s 1.20s ease-in-out infinite',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: '#1C26D3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '600' }}>Produtos</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        animation: 'olist-ol-check 3.2s 1.75s ease-in-out infinite',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: '#1C26D3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '600' }}>Estoque</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        animation: 'olist-ol-check 3.2s 2.30s ease-in-out infinite',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: '#1C26D3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '600' }}>Clientes</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        animation: 'olist-ol-check 3.2s 2.85s ease-in-out infinite',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: '#1C26D3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '600' }}>Notas</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '10px',
                        animation: 'olist-ol-check 3.2s 3.40s ease-in-out infinite',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: '#1C26D3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '600' }}>Pedidos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="solucoes" style={{ background: '#EEEFFC' }}>
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
                    color: '#1C26D3',
                  }}
                >
                  O ecossistema
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
                  Quatro soluções. Uma operação conectada.
                </h2>
              </div>
              <div className="g4" style={{ marginTop: '48px' }}>
                <article
                  data-reveal="1"
                  data-delay="0"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.1)',
                    borderRadius: '28px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <img src="/assets/logo-olist-azul.png" alt="olist" style={{ height: '22px', width: 'auto' }} />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#1C26D3',
                        background: '#E8E9FB',
                        borderRadius: '100px',
                        padding: '5px 10px',
                      }}
                    >
                      01
                    </span>
                  </div>
                  <h3 style={{ margin: '8px 0 0', fontSize: '26px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Olist ERP
                  </h3>
                  <p style={{ margin: '0', fontSize: '16px', color: '#5D5E6D' }}>O coração da operação.</p>
                  <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: '0' }}>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Pedidos de todos os canais em um só lugar</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Nota fiscal, estoque e expedição em fluxo automático</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Financeiro: contas, fluxo de caixa e margem por venda</span>
                    </li>
                  </ul>
                </article>
                <article
                  data-reveal="1"
                  data-delay="80"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.1)',
                    borderRadius: '28px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <img src="/assets/logo-olist-azul.png" alt="olist" style={{ height: '22px', width: 'auto' }} />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#1C26D3',
                        background: '#E8E9FB',
                        borderRadius: '100px',
                        padding: '5px 10px',
                      }}
                    >
                      02
                    </span>
                  </div>
                  <h3 style={{ margin: '8px 0 0', fontSize: '26px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Olist E-commerce
                  </h3>
                  <p style={{ margin: '0', fontSize: '16px', color: '#5D5E6D' }}>
                    Sua loja virtual integrada de fábrica.
                  </p>
                  <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: '0' }}>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Loja conectada nativamente ao ERP</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Catálogo, preço e estoque sem retrabalho</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Layout e implantação feitos pela Tec3</span>
                    </li>
                  </ul>
                </article>
                <article
                  data-reveal="1"
                  data-delay="160"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.1)',
                    borderRadius: '28px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <img src="/assets/logo-olist-azul.png" alt="olist" style={{ height: '22px', width: 'auto' }} />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#1C26D3',
                        background: '#E8E9FB',
                        borderRadius: '100px',
                        padding: '5px 10px',
                      }}
                    >
                      03
                    </span>
                  </div>
                  <h3 style={{ margin: '8px 0 0', fontSize: '26px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Olist Envios
                  </h3>
                  <p style={{ margin: '0', fontSize: '16px', color: '#5D5E6D' }}>Frete sem planilha.</p>
                  <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: '0' }}>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Compara preço e prazo de várias transportadoras</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Gera etiquetas e acompanha a entrega</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Reenvio e devolução no mesmo painel</span>
                    </li>
                  </ul>
                </article>
                <article
                  data-reveal="1"
                  data-delay="240"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.1)',
                    borderRadius: '28px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <img src="/assets/logo-olist-azul.png" alt="olist" style={{ height: '22px', width: 'auto' }} />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#1C26D3',
                        background: '#E8E9FB',
                        borderRadius: '100px',
                        padding: '5px 10px',
                      }}
                    >
                      04
                    </span>
                  </div>
                  <h3 style={{ margin: '8px 0 0', fontSize: '26px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Olist Digital
                  </h3>
                  <p style={{ margin: '0', fontSize: '16px', color: '#5D5E6D' }}>O financeiro conectado à operação.</p>
                  <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: '0' }}>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Conta digital da Olist ligada ao ERP</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Recebimentos e pagamentos organizados</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(22,23,43,.1)',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: '#E8E9FB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>Menos conciliação manual no fim do mês</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,4vw,48px)' }}
          >
            <div className="split" style={{ alignItems: 'start' }}>
              <div data-reveal="1">
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#1C26D3',
                  }}
                >
                  Migração de ERP
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(34px,4.4vw,60px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                    maxWidth: '620px',
                  }}
                >
                  Trocar de ERP sem parar de vender.
                </h2>
                <p
                  style={{
                    margin: '20px 0 0',
                    fontSize: '18px',
                    lineHeight: '1.65',
                    color: '#5D5E6D',
                    maxWidth: '520px',
                  }}
                >
                  Migração de ERP assusta porque mexe em tudo: fiscal, estoque, financeiro e integrações. Por isso a
                  gente faz em etapas, com validação antes da virada. O Olist ERP é o único ERP que a Tec3 implanta, e a
                  gente conhece cada detalhe dele.
                </p>
              </div>
              <ol className="g2" style={{ listStyle: 'none', margin: '0', padding: '0' }}>
                <li
                  data-reveal="1"
                  data-delay="0"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1C26D3',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}
                  >
                    1
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: '700' }}>Levantamento</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Mapeamos cadastros, regras fiscais, integrações e o que precisa vir do sistema atual.
                  </p>
                </li>
                <li
                  data-reveal="1"
                  data-delay="60"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1C26D3',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}
                  >
                    2
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: '700' }}>Importação</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Produtos, clientes, fornecedores e estoque levados para o Olist ERP.
                  </p>
                </li>
                <li
                  data-reveal="1"
                  data-delay="120"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1C26D3',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}
                  >
                    3
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: '700' }}>Fiscal e financeiro</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Configuração de notas, tributação, contas e categorias.
                  </p>
                </li>
                <li
                  data-reveal="1"
                  data-delay="180"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1C26D3',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}
                  >
                    4
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: '700' }}>Integrações</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Loja, marketplaces, envios e pagamentos conectados ao ERP.
                  </p>
                </li>
                <li
                  data-reveal="1"
                  data-delay="240"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1C26D3',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}
                  >
                    5
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: '700' }}>Validação</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Pedidos de teste e conferência lado a lado antes da virada.
                  </p>
                </li>
                <li
                  data-reveal="1"
                  data-delay="300"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1C26D3',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                    }}
                  >
                    6
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: '700' }}>Virada e treinamento</h3>
                  <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Sua equipe operando com segurança, com a Tec3 por perto.
                  </p>
                </li>
              </ol>
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
              <div
                data-reveal="1"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '20px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#1C26D3',
                    }}
                  >
                    Nativo da plataforma
                  </div>
                  <h2
                    style={{
                      margin: '14px 0 0',
                      fontSize: 'clamp(34px,4.4vw,60px)',
                      lineHeight: '1.04',
                      letterSpacing: '-.02em',
                      fontWeight: '700',
                      maxWidth: '760px',
                    }}
                  >
                    O que o Olist ERP já faz, sem app extra.
                  </h2>
                </div>
                <p style={{ margin: '0', maxWidth: '360px', fontSize: '16px', lineHeight: '1.6', color: '#5D5E6D' }}>
                  Funcionalidades nativas descritas pela própria Olist.
                </p>
              </div>
              <div className="g3" style={{ marginTop: '44px' }}>
                <div
                  data-reveal="1"
                  data-delay="0"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Fluxo automático de pedidos</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    O pedido entra, a nota é emitida, o estoque baixa e a expedição é gerada.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="70"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Estoque em tempo real</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Sincronizado entre canais, com controle por lote e validade e reserva de estoque.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="140"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Margem de contribuição</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Relatório que mostra o lucro real de cada venda, já com custos e taxas.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="0"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Logística com conferência</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Lista de separação e conferência por leitura de código de barras.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="70"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Várias empresas, um sistema</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Gestão de mais de um CNPJ com faturamento distribuído.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="140"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Financeiro completo</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Contas a pagar e a receber, fluxo de caixa e previsão financeira.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="0"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Documentos automáticos</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Notas, orçamentos, etiquetas e devoluções com envio por e-mail.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="70"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Lis, assistente com IA</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Consulta dados do ERP e executa ações no sistema por você.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="140"
                  className="pad"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '19px', fontWeight: '700' }}>Integrações nativas</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Mercado Livre, Shopee, Amazon, Magalu, Correios e outras.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,4vw,48px)' }}
          >
            <div className="split">
              <div data-reveal="1" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    border: '2px dashed #F2B33D',
                    animation: 'olist-ol-spin 30s linear infinite',
                  }}
                />
                <img
                  src="/assets/selo-olist-ouro.png"
                  alt="Selo Parceira Ouro Olist"
                  style={{
                    position: 'relative',
                    width: '240px',
                    height: '240px',
                    animation: 'olist-t3-float 6s ease-in-out infinite',
                  }}
                />
              </div>
              <div data-reveal="1" data-delay="100">
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#9A6A00',
                  }}
                >
                  Por que uma parceira Ouro
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(34px,4.4vw,60px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                    maxWidth: '620px',
                  }}
                >
                  Parceria Ouro é experiência comprovada no ecossistema.
                </h2>
                <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: '0' }}>
                  <li
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px 0',
                      borderTop: '1px solid rgba(22,23,43,.1)',
                      fontSize: '16px',
                      lineHeight: '1.5',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flex: '0 0 auto',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: '#FBE7B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1px',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16172B"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span>Parceira Olist nível Ouro desde 2022</span>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px 0',
                      borderTop: '1px solid rgba(22,23,43,.1)',
                      fontSize: '16px',
                      lineHeight: '1.5',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flex: '0 0 auto',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: '#FBE7B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1px',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16172B"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span>Implantação de todo o ecossistema: ERP, loja, envios e financeiro</span>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px 0',
                      borderTop: '1px solid rgba(22,23,43,.1)',
                      fontSize: '16px',
                      lineHeight: '1.5',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flex: '0 0 auto',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: '#FBE7B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1px',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16172B"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span>Uma única pessoa responsável do diagnóstico ao go-live</span>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '12px 0',
                      borderTop: '1px solid rgba(22,23,43,.1)',
                      fontSize: '16px',
                      lineHeight: '1.5',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flex: '0 0 auto',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: '#FBE7B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1px',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16172B"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span>Integração com Nuvemshop, marketplaces e Stone quando a operação pede</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section style={{ padding: '0 clamp(12px,2vw,24px) clamp(12px,2vw,24px)' }}>
            <div
              data-reveal="1"
              className="pad"
              style={{
                background: '#E8E9FB',
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
                  Vamos colocar sua operação no ecossistema Olist?
                </h2>
                <p style={{ margin: '18px 0 0', fontSize: '19px', lineHeight: '1.55', maxWidth: '560px' }}>
                  Conta qual ERP você usa hoje e a gente desenha a migração.
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
                  Quero migrar meu ERP
                </a>{' '}
                <Link
                  href="/connect"
                  style={{
                    border: '1.5px solid #16172B',
                    borderRadius: '100px',
                    padding: '18px 26px',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'inline-flex',
                  }}
                >
                  Conhecer o TEC3 Connect
                </Link>
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
