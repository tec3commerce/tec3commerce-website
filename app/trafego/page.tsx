import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/trafego';
import './page.css';

export const metadata: Metadata = { title: 'Tec3 · Tráfego pago' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div
        className="pg-trafego"
        style={{
          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
          background: '#F5F4FA',
          color: '#16172B',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <SiteHeader current="trafego" wa={vals.wa} />
        <main>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,8vw,104px) clamp(20px,4vw,48px)' }}
          >
            <div className="hero">
              <div>
                <div style={{ animation: 'trafego-t3-in .8s both' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#5B4FB0',
                    }}
                  >
                    Tráfego pago
                  </div>
                </div>
                <h1
                  style={{
                    animation: 'trafego-t3-in .9s .1s both',
                    margin: '22px 0 0',
                    fontSize: 'clamp(42px,6vw,88px)',
                    lineHeight: '1',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  Gente certa, na hora certa, numa loja{' '}
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(#D9F36A,#D9F36A)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0 88%',
                      backgroundSize: '100% 30%',
                    }}
                  >
                    pronta para vender
                  </span>
                  .
                </h1>
                <p
                  style={{
                    animation: 'trafego-t3-in .9s .2s both',
                    margin: '24px 0 0',
                    maxWidth: '560px',
                    fontSize: '19px',
                    lineHeight: '1.6',
                    color: '#5D5E6D',
                  }}
                >
                  Google, Meta e agora os anúncios dentro do ChatGPT. A Tec3 planeja, cria e otimiza suas campanhas
                  olhando para o que importa: venda com margem.
                </p>
                <div
                  className="ctas"
                  style={{
                    animation: 'trafego-t3-in .9s .3s both',
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
                    Quero anunciar com a Tec3
                  </a>{' '}
                  <a
                    href="#canais"
                    style={{
                      border: '1.5px solid #16172B',
                      borderRadius: '100px',
                      padding: '17px 26px',
                      fontSize: '17px',
                      fontWeight: '600',
                      display: 'inline-flex',
                    }}
                  >
                    Ver os canais
                  </a>
                </div>
              </div>
              <div aria-hidden="true" className="tr-stage">
                <div
                  className="tr-a"
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '10px',
                    width: '72%',
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '18px 20px',
                    boxShadow: '0 30px 60px -36px rgba(22,23,43,.5)',
                    animation: 'trafego-tr-a 7s ease-in-out infinite',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#F1F2F6',
                      borderRadius: '100px',
                      padding: '8px 14px',
                      fontSize: '13px',
                      color: '#5D5E6D',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-4-4" />
                    </svg>
                    panela inox indução
                  </div>
                  <div style={{ marginTop: '14px', fontSize: '11px', fontWeight: '700', color: '#16172B' }}>
                    Patrocinado
                  </div>
                  <div style={{ fontSize: '12px', color: '#5D5E6D' }}>suamarca.com.br</div>
                  <div style={{ fontSize: '17px', fontWeight: '700', color: '#1A44C8', marginTop: '2px' }}>
                    Panelas em aço inox · Frete grátis
                  </div>
                  <div style={{ fontSize: '12px', color: '#5D5E6D', marginTop: '2px' }}>
                    Google Ads · Pesquisa e Shopping
                  </div>
                </div>
                <div
                  className="tr-b"
                  style={{
                    position: 'absolute',
                    right: '0',
                    top: '120px',
                    width: '52%',
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px -36px rgba(22,23,43,.5)',
                    animation: 'trafego-tr-b 8s ease-in-out infinite',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px' }}>
                    <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#B5ABFC' }} />
                    <span style={{ fontSize: '12px', fontWeight: '700' }}>suamarca</span>
                    <span style={{ fontSize: '11px', color: '#5D5E6D' }}>· Patrocinado</span>
                  </div>
                  <div
                    style={{
                      height: '150px',
                      background: '#E9E6FD',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      padding: '12px',
                    }}
                  >
                    <span
                      style={{
                        background: '#16172B',
                        color: '#fff',
                        borderRadius: '100px',
                        padding: '6px 12px',
                        fontSize: '11px',
                        fontWeight: '700',
                      }}
                    >
                      Comprar
                    </span>
                  </div>
                  <div style={{ padding: '10px 12px', fontSize: '12px', color: '#5D5E6D' }}>
                    Meta Ads · Instagram e Facebook
                  </div>
                </div>
                <div
                  className="tr-c"
                  style={{
                    position: 'absolute',
                    left: '8%',
                    bottom: '0',
                    width: '70%',
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '16px 18px',
                    boxShadow: '0 30px 60px -36px rgba(22,23,43,.5)',
                    animation: 'trafego-tr-c 6s ease-in-out infinite',
                  }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      background: '#F1F2F6',
                      borderRadius: '14px',
                      padding: '10px 12px',
                      alignSelf: 'flex-end',
                      marginLeft: 'auto',
                      maxWidth: '80%',
                    }}
                  >
                    Qual a melhor panela para indução?
                  </div>
                  <div
                    style={{
                      marginTop: '10px',
                      height: '8px',
                      borderRadius: '6px',
                      background: '#E3E1EC',
                      width: '90%',
                    }}
                  />
                  <div
                    style={{
                      marginTop: '6px',
                      height: '8px',
                      borderRadius: '6px',
                      background: '#E3E1EC',
                      width: '70%',
                    }}
                  />
                  <div
                    style={{
                      marginTop: '12px',
                      border: '1.5px solid #D9F36A',
                      background: '#F8FCE6',
                      borderRadius: '14px',
                      padding: '10px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#D9F36A' }} />
                    <span style={{ fontSize: '12px' }}>
                      <b style={{ display: 'block' }}>Panela inox 24cm · suamarca</b>Patrocinado
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#5D5E6D', marginTop: '8px' }}>Anúncios no ChatGPT</div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="canais"
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
                  Canais
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
                  Três lugares onde o seu cliente decide a compra.
                </h2>
              </div>
              <div className="g3" style={{ marginTop: '44px' }}>
                <article
                  data-reveal="1"
                  data-delay="0"
                  className="card pad"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(22,23,43,.1)',
                    borderRadius: '28px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '28px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Google Ads
                  </h3>
                  <p style={{ margin: '0', fontSize: '17px', color: '#5D5E6D' }}>Quem pesquisa já quer comprar.</p>
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
                      <span>Pesquisa: apareça no topo quando buscam o seu produto</span>
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
                      <span>Shopping: foto, preço e loja direto no resultado</span>
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
                      <span>Performance Max e YouTube para escalar com dados</span>
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
                      <span>Palavras-chave negativas para não pagar por clique errado</span>
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
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <h3 style={{ margin: '0', fontSize: '28px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Meta Ads
                  </h3>
                  <p style={{ margin: '0', fontSize: '17px', color: '#5D5E6D' }}>Desejo antes da busca.</p>
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
                      <span>Instagram e Facebook com criativos que parecem conteúdo</span>
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
                      <span>Catálogo de produtos conectado à loja</span>
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
                      <span>Remarketing para quem visitou e não comprou</span>
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
                      <span>Públicos semelhantes aos seus melhores clientes</span>
                    </li>
                  </ul>
                </article>
                <article
                  data-reveal="1"
                  data-delay="160"
                  className="card pad"
                  style={{
                    background: '#F8FCE6',
                    border: '1px solid rgba(22,23,43,.1)',
                    borderRadius: '28px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      background: '#16172B',
                      color: '#D9F36A',
                      borderRadius: '100px',
                      padding: '5px 12px',
                      fontSize: '12px',
                      fontWeight: '700',
                      marginBottom: '8px',
                    }}
                  >
                    Novidade
                  </span>
                  <h3 style={{ margin: '0', fontSize: '28px', fontWeight: '700', letterSpacing: '-.015em' }}>
                    Anúncios no ChatGPT
                  </h3>
                  <p style={{ margin: '0', fontSize: '17px', color: '#5D5E6D' }}>
                    O novo lugar onde as pessoas decidem.
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
                      <span>Disponível no Brasil desde agosto de 2026</span>
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
                      <span>Anúncio sinalizado como patrocinado, separado da resposta</span>
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
                      <span>Aparece para usuários adultos dos planos gratuito e Go</span>
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
                      <span>Cobrança por clique, com orçamento definido por você</span>
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
                    color: '#5B4FB0',
                  }}
                >
                  Método
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(34px,4.4vw,60px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                    maxWidth: '560px',
                  }}
                >
                  Campanha boa não é sorte. É rotina.
                </h2>
                <div
                  aria-hidden="true"
                  className="pad"
                  style={{
                    marginTop: '32px',
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#5D5E6D' }}>
                    Vendas por semana de otimização
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '160px', marginTop: '16px' }}
                  >
                    <span
                      style={{
                        flex: '1',
                        height: '30%',
                        background: '#E9E6FD',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.00s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                    <span
                      style={{
                        flex: '1',
                        height: '42%',
                        background: '#E9E6FD',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.12s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                    <span
                      style={{
                        flex: '1',
                        height: '38%',
                        background: '#E9E6FD',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.24s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                    <span
                      style={{
                        flex: '1',
                        height: '55%',
                        background: '#B5ABFC',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.36s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                    <span
                      style={{
                        flex: '1',
                        height: '64%',
                        background: '#B5ABFC',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.48s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                    <span
                      style={{
                        flex: '1',
                        height: '78%',
                        background: '#B5ABFC',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.60s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                    <span
                      style={{
                        flex: '1',
                        height: '92%',
                        background: '#D9F36A',
                        borderRadius: '8px 8px 0 0',
                        transformOrigin: 'bottom',
                        animation: 'trafego-tr-bar 1.2s 0.72s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '12px', color: '#5D5E6D', marginTop: '10px' }}>Ilustrativo</div>
                </div>
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
                    border: '1px solid rgba(22,23,43,.08)',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>01</span>
                  <h3 style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '700' }}>Diagnóstico</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Margem, ticket, produtos campeões e quanto você pode pagar por venda.
                  </p>
                </li>
                <li
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
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>02</span>
                  <h3 style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '700' }}>Estrutura de medição</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Pixel, eventos e conversões configurados para saber o que funciona.
                  </p>
                </li>
                <li
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
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>03</span>
                  <h3 style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '700' }}>Criativos</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Imagens e vídeos pensados para cada canal, não o mesmo post em todo lugar.
                  </p>
                </li>
                <li
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
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>04</span>
                  <h3 style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '700' }}>Campanhas</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Do topo ao remarketing, com orçamento distribuído por objetivo.
                  </p>
                </li>
                <li
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
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>05</span>
                  <h3 style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '700' }}>Otimização semanal</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Corta o que não vende e coloca mais verba no que vende.
                  </p>
                </li>
                <li
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
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#5B4FB0' }}>06</span>
                  <h3 style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '700' }}>Relatório claro</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.55', color: '#5D5E6D' }}>
                    Investimento, vendas e retorno em linguagem de dono de loja.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(20px,4vw,48px) clamp(72px,9vw,120px)' }}
          >
            <div
              data-reveal="1"
              className="pad"
              style={{
                background: '#E9E6FD',
                borderRadius: '32px',
                padding: 'clamp(32px,5vw,56px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ maxWidth: '720px' }}>
                <h2 style={{ margin: '0', fontSize: 'clamp(26px,3vw,40px)', lineHeight: '1.1', fontWeight: '700' }}>
                  Anúncio sem loja preparada é dinheiro indo embora.
                </h2>
                <p style={{ margin: '12px 0 0', fontSize: '17px', lineHeight: '1.6', color: '#5D5E6D' }}>
                  Antes de acelerar, a gente confere checkout, frete, fotos e velocidade. No TEC3 Connect, loja e
                  tráfego andam juntos.
                </p>
              </div>
              <Link
                className="btn"
                href="/connect"
                style={{
                  background: '#16172B',
                  color: '#F5F4FA',
                  borderRadius: '100px',
                  padding: '16px 26px',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                Conhecer o TEC3 Connect →
              </Link>
            </div>
            <p style={{ margin: '18px 0 0', fontSize: '13px', color: '#5D5E6D' }}>
              Sobre anúncios no ChatGPT:{' '}
              <a
                href="https://www.cnnbrasil.com.br/inteligencia-artificial/chatgpt-comeca-a-exibir-anuncios-no-brasil/"
                style={{ textDecoration: 'underline' }}
              >
                CNN Brasil
              </a>{' '}
              e{' '}
              <a
                href="https://timesbrasil.com.br/colunas/ai-451/openai-anuncios-chatgpt-brasil-autoatendimento/"
                style={{ textDecoration: 'underline' }}
              >
                Times Brasil
              </a>
              .
            </p>
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
                  Vamos fazer sua loja aparecer?
                </h2>
                <p style={{ margin: '18px 0 0', fontSize: '19px', lineHeight: '1.55', maxWidth: '560px' }}>
                  Conta quanto você investe hoje (ou se nunca investiu). A gente monta o plano.
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
                  Quero anunciar
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
