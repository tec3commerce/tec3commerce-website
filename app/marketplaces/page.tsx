import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/marketplaces';
import './page.css';

export const metadata: Metadata = { title: 'Tec3 · Marketplaces' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div
        className="pg-marketplaces"
        style={{
          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
          background: '#F5F4FA',
          color: '#16172B',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <SiteHeader current="marketplaces" wa={vals.wa} />
        <main>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,8vw,104px) clamp(20px,4vw,48px)' }}
          >
            <div className="hero">
              <div>
                <div style={{ animation: 'marketplaces-t3-in .8s both' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#5B4FB0',
                    }}
                  >
                    Gestão de marketplaces
                  </div>
                </div>
                <h1
                  style={{
                    animation: 'marketplaces-t3-in .9s .1s both',
                    margin: '22px 0 0',
                    fontSize: 'clamp(42px,6.2vw,92px)',
                    lineHeight: '1',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  Venda onde o cliente{' '}
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(#D9F36A,#D9F36A)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 88%',
                      backgroundSize: '100% 30%',
                    }}
                  >
                    já está comprando
                  </span>
                  .
                </h1>
                <p
                  style={{
                    animation: 'marketplaces-t3-in .9s .2s both',
                    margin: '24px 0 0',
                    maxWidth: '560px',
                    fontSize: '19px',
                    lineHeight: '1.6',
                    color: '#5D5E6D',
                  }}
                >
                  Mercado Livre, Shopee e TikTok Shop operados pela Tec3, com estoque integrado à sua loja e ao ERP.
                  Você vende em todos; a gente cuida de todos.
                </p>
                <div
                  style={{
                    animation: 'marketplaces-t3-in .9s .3s both',
                    marginTop: '26px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '18px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="/assets/logo-mercadolivre.png"
                    alt="Mercado Livre"
                    style={{ height: '34px', width: 'auto' }}
                  />
                  <img src="/assets/logo-shopee.png" alt="Shopee" style={{ height: '30px', width: 'auto' }} />
                  <img src="/assets/logo-tiktokshop.png" alt="TikTok Shop" style={{ height: '42px', width: 'auto' }} />
                </div>
                <div
                  className="ctas"
                  style={{
                    animation: 'marketplaces-t3-in .9s .4s both',
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
                    Quero vender nos marketplaces
                  </a>
                </div>
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: 'relative',
                  height: '380px',
                  background: '#EFEDF9',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  backgroundImage: 'radial-gradient(rgba(38,42,96,.14) 1px,transparent 1.2px)',
                  backgroundSize: '24px 24px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '4%',
                    top: '8%',
                    animation: 'marketplaces-mk-ping 4.5s 0s ease-in-out infinite',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '10px 12px',
                    boxShadow: '0 18px 36px -18px rgba(22,23,43,.45)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: '190px',
                  }}
                >
                  <span
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      background: '#FFE600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#16172B',
                      fontSize: '11px',
                      fontWeight: '700',
                    }}
                  >
                    ML
                  </span>
                  <span>
                    <b style={{ display: 'block', fontSize: '13px' }}>Novo pedido</b>
                    <span style={{ fontSize: '12px', color: '#5D5E6D' }}>Mercado Livre</span>
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '44%',
                    top: '30%',
                    animation: 'marketplaces-mk-ping 4.5s 1.5s ease-in-out infinite',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '10px 12px',
                    boxShadow: '0 18px 36px -18px rgba(22,23,43,.45)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: '190px',
                  }}
                >
                  <span
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      background: '#EE4D2D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: '700',
                    }}
                  >
                    SH
                  </span>
                  <span>
                    <b style={{ display: 'block', fontSize: '13px' }}>Novo pedido</b>
                    <span style={{ fontSize: '12px', color: '#5D5E6D' }}>Shopee</span>
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10%',
                    top: '58%',
                    animation: 'marketplaces-mk-ping 4.5s 3s ease-in-out infinite',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '10px 12px',
                    boxShadow: '0 18px 36px -18px rgba(22,23,43,.45)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: '190px',
                  }}
                >
                  <span
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      background: '#16172B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: '700',
                    }}
                  >
                    TT
                  </span>
                  <span>
                    <b style={{ display: 'block', fontSize: '13px' }}>Novo pedido</b>
                    <span style={{ fontSize: '12px', color: '#5D5E6D' }}>TikTok Shop</span>
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                    background: '#16172B',
                    color: '#F5F4FA',
                    borderRadius: '18px',
                    padding: '14px 18px',
                  }}
                >
                  <div
                    style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#C9C2FD' }}
                  >
                    Estoque único
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '700', marginTop: '4px' }}>Sincronizado em todos</div>
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
                  O que sua operação ganha
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
                  Marketplace não substitui sua loja. Multiplica.
                </h2>
              </div>
              <div className="g4" style={{ marginTop: '44px' }}>
                <div
                  data-reveal="1"
                  data-delay="0"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.08)',
                    borderRadius: '26px',
                    padding: '28px',
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: '700', color: '#B5ABFC', lineHeight: '1' }}>01</div>
                  <h3 style={{ margin: '14px 0 0', fontSize: '22px', fontWeight: '700' }}>Mais alcance</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '16px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Seu produto aparece para quem já está buscando, sem você pagar por cada visita.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="80"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.08)',
                    borderRadius: '26px',
                    padding: '28px',
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: '700', color: '#B5ABFC', lineHeight: '1' }}>02</div>
                  <h3 style={{ margin: '14px 0 0', fontSize: '22px', fontWeight: '700' }}>Confiança do canal</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '16px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Pagamento, entrega e garantia do marketplace reduzem a desconfiança de quem não conhece sua marca.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="160"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.08)',
                    borderRadius: '26px',
                    padding: '28px',
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: '700', color: '#B5ABFC', lineHeight: '1' }}>03</div>
                  <h3 style={{ margin: '14px 0 0', fontSize: '22px', fontWeight: '700' }}>Datas e campanhas</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '16px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Black Friday, 11.11, Dia das Mães: os marketplaces puxam tráfego nas datas e você vai junto.
                  </p>
                </div>
                <div
                  data-reveal="1"
                  data-delay="240"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.08)',
                    borderRadius: '26px',
                    padding: '28px',
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: '700', color: '#B5ABFC', lineHeight: '1' }}>04</div>
                  <h3 style={{ margin: '14px 0 0', fontSize: '22px', fontWeight: '700' }}>Mais giro, mais dados</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '16px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Você descobre rápido o que vende, em qual preço, e leva isso para a sua loja.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,8vw,104px) clamp(20px,4vw,48px)' }}
          >
            <div data-reveal="1" style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: '#5B4FB0',
                }}
              >
                Canal por canal
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
                Cada marketplace tem as próprias regras. A gente joga todas.
              </h2>
            </div>
            <div
              data-reveal="1"
              className="mk-row"
              style={{ padding: '40px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}
            >
              <div style={{ order: '0' }}>
                <div
                  className="pad"
                  style={{
                    background: '#FFE600',
                    borderRadius: '32px',
                    padding: '44px',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '24px',
                  }}
                >
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '16px 20px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    <img
                      src="/assets/logo-mercadolivre.png"
                      alt="Mercado Livre"
                      style={{ height: '44px', width: 'auto', display: 'block' }}
                    />
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: 'clamp(22px,2.2vw,30px)',
                      lineHeight: '1.2',
                      fontWeight: '700',
                      color: '#16172B',
                    }}
                  >
                    O maior marketplace do Brasil exige reputação impecável. A gente cuida dela.
                  </p>
                </div>
              </div>
              <div style={{ order: '1' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#5B4FB0',
                  }}
                >
                  Tec3 no Mercado Livre
                </div>
                <h3
                  style={{
                    margin: '12px 0 0',
                    fontSize: 'clamp(30px,3.4vw,46px)',
                    lineHeight: '1.05',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  O que a gente faz no Mercado Livre
                </h3>
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
                        background: '#D9F36A',
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
                    <span>Anúncios otimizados e cadastro no Mercado Full</span>
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
                        background: '#D9F36A',
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
                    <span>Reputação verde: prazos, perguntas e reclamações em dia</span>
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
                        background: '#D9F36A',
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
                    <span>Mercado Ads e campanhas de datas comerciais</span>
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
                        background: '#D9F36A',
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
                    <span>Estoque integrado à sua loja e ao ERP</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-reveal="1"
              className="mk-row"
              style={{ padding: '40px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}
            >
              <div style={{ order: '1' }}>
                <div
                  className="pad"
                  style={{
                    background: '#EE4D2D',
                    borderRadius: '32px',
                    padding: '44px',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '24px',
                  }}
                >
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '16px 20px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    <img
                      src="/assets/logo-shopee.png"
                      alt="Shopee"
                      style={{ height: '44px', width: 'auto', display: 'block' }}
                    />
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: 'clamp(22px,2.2vw,30px)',
                      lineHeight: '1.2',
                      fontWeight: '700',
                      color: '#FFFFFF',
                    }}
                  >
                    Volume, cupons e datas duplas. Shopee vende muito para quem joga o jogo dela.
                  </p>
                </div>
              </div>
              <div style={{ order: '0' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#5B4FB0',
                  }}
                >
                  Tec3 no Shopee
                </div>
                <h3
                  style={{
                    margin: '12px 0 0',
                    fontSize: 'clamp(30px,3.4vw,46px)',
                    lineHeight: '1.05',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  O que a gente faz no Shopee
                </h3>
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
                        background: '#D9F36A',
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
                    <span>Cadastro e otimização de catálogo</span>
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
                        background: '#D9F36A',
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
                    <span>Cupons, flash sales e datas como 11.11 e 12.12</span>
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
                        background: '#D9F36A',
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
                    <span>Atendimento e prazos dentro do padrão do canal</span>
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
                        background: '#D9F36A',
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
                    <span>Preço e margem conferidos com as taxas da plataforma</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-reveal="1"
              className="mk-row"
              style={{ padding: '40px 0', borderTop: '1px solid rgba(22,23,43,.1)' }}
            >
              <div style={{ order: '0' }}>
                <div
                  className="pad"
                  style={{
                    background: '#16172B',
                    borderRadius: '32px',
                    padding: '44px',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '24px',
                  }}
                >
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '16px 20px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    <img
                      src="/assets/logo-tiktokshop.png"
                      alt="TikTok Shop"
                      style={{ height: '44px', width: 'auto', display: 'block' }}
                    />
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: 'clamp(22px,2.2vw,30px)',
                      lineHeight: '1.2',
                      fontWeight: '700',
                      color: '#FFFFFF',
                    }}
                  >
                    Aqui o cliente compra enquanto assiste. Vídeo e live viram vitrine.
                  </p>
                </div>
              </div>
              <div style={{ order: '1' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#5B4FB0',
                  }}
                >
                  Tec3 no TikTok Shop
                </div>
                <h3
                  style={{
                    margin: '12px 0 0',
                    fontSize: 'clamp(30px,3.4vw,46px)',
                    lineHeight: '1.05',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  O que a gente faz no TikTok Shop
                </h3>
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
                        background: '#D9F36A',
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
                    <span>Loja e vitrine configuradas</span>
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
                        background: '#D9F36A',
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
                    <span>Vídeos e lives que vendem, com a TEC·A</span>
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
                        background: '#D9F36A',
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
                    <span>Programa de afiliados e creators</span>
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
                        background: '#D9F36A',
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
                    <span>Operação e envio no padrão da plataforma</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(20px,4vw,48px) clamp(72px,9vw,120px)' }}
          >
            <div
              data-reveal="1"
              className="pad"
              style={{
                background: '#16172B',
                color: '#F5F4FA',
                borderRadius: '32px',
                padding: 'clamp(32px,5vw,64px)',
                display: 'grid',
                gap: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: '#D9F36A',
                }}
              >
                O erro que mais custa caro
              </div>
              <h2
                style={{
                  margin: '0',
                  fontSize: 'clamp(30px,4vw,56px)',
                  lineHeight: '1.05',
                  letterSpacing: '-.02em',
                  fontWeight: '700',
                  maxWidth: '900px',
                }}
              >
                Vendeu no site, faltou no Mercado Livre.
              </h2>
              <p
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: 'rgba(245,244,250,.82)',
                  maxWidth: '720px',
                }}
              >
                Estoque desencontrado vira venda cancelada e reputação em queda. Com o Olist ERP no centro, vendeu em um
                canal, atualiza em todos.
              </p>
              <Link
                href="/olist"
                style={{
                  alignSelf: 'flex-start',
                  justifySelf: 'start',
                  background: '#D9F36A',
                  color: '#16172B',
                  borderRadius: '100px',
                  padding: '15px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                Ver integração com o Olist ERP →
              </Link>
            </div>
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
                  Sua marca em todos os canais, com um time só.
                </h2>
                <p style={{ margin: '18px 0 0', fontSize: '19px', lineHeight: '1.55', maxWidth: '560px' }}>
                  A Tec3 assume a operação nos marketplaces e cuida da reputação como se fosse nossa.
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
                  Quero vender nos marketplaces
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
