import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import LiveViewers from '@/components/site/LiveViewers';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/index';
import './page.css';

export const metadata: Metadata = { title: 'Tec3 Commerce · Site' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div
        className="pg-index"
        style={{
          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
          background: '#F5F4FA',
          color: '#16172B',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        {/* NAV */}
        <SiteHeader current="inicio" wa={vals.wa} />
        <main id="topo">
          {/* HERO */}
          <section
            style={{
              position: 'relative',
              backgroundImage: 'radial-gradient(rgba(38,42,96,.13) 1px,transparent 1.2px)',
              backgroundSize: '26px 26px',
            }}
          >
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,48px) 72px',
              }}
            >
              <div className="t3-hero">
                <div>
                  <div
                    style={{
                      animation: 'index-t3-in .8s cubic-bezier(.2,.7,.2,1) both',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontVariantNumeric: 'tabular-nums',
                      fontSize: '13px',
                      letterSpacing: '.04em',
                      textTransform: 'uppercase',
                      background: '#FFFFFF',
                      border: '1px solid rgba(22,23,43,.1)',
                      borderRadius: '100px',
                      padding: '8px 14px',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#2E9E5B',
                        animation: 'index-t3-blink 1.6s infinite',
                      }}
                    />{' '}
                    Agência de e-commerce · desde 2019
                  </div>
                  <h1
                    style={{
                      animation: 'index-t3-in .9s .1s cubic-bezier(.2,.7,.2,1) both',
                      margin: '28px 0 0',
                      fontSize: 'clamp(46px,7.4vw,116px)',
                      lineHeight: '1',
                      letterSpacing: '-.015em',
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontWeight: '700',
                    }}
                  >
                    Loja no ar é o começo.{' '}
                    <span
                      style={{
                        backgroundImage: `linear-gradient(${vals.signal},${vals.signal})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0 86%',
                        backgroundSize: '100% 34%',
                        animation: 'index-t3-mark 1.1s .7s cubic-bezier(.2,.7,.2,1) both',
                      }}
                    >
                      Vender
                    </span>{' '}
                    é o projeto.
                  </h1>
                  <div
                    style={{
                      animation: 'index-t3-in .9s .25s cubic-bezier(.2,.7,.2,1) both',
                      marginTop: '32px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      gap: '.3em',
                      fontSize: 'clamp(24px,2.6vw,36px)',
                      fontWeight: '500',
                      letterSpacing: '-.015em',
                    }}
                  >
                    <span>Sua marca vendendo</span>{' '}
                    <span
                      style={{
                        display: 'inline-block',
                        height: '1.2em',
                        overflow: 'hidden',
                        verticalAlign: 'bottom',
                        color: '#5B4FB0',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          animation: 'index-t3-rot 11s cubic-bezier(.7,0,.2,1) infinite',
                        }}
                      >
                        {vals.words.map((w, i) => (
                          <span key={i} style={{ height: '1.2em', lineHeight: '1.2em', whiteSpace: 'nowrap' }}>
                            {w}
                          </span>
                        ))}
                      </span>
                    </span>
                  </div>
                  <p
                    style={{
                      animation: 'index-t3-in .9s .35s cubic-bezier(.2,.7,.2,1) both',
                      margin: '24px 0 0',
                      maxWidth: '560px',
                      fontSize: '19px',
                      lineHeight: '1.55',
                      color: 'rgba(22,23,43,.7)',
                    }}
                  >
                    Loja, ERP, marketplaces e pagamento conversando entre si. A Tec3 implanta, integra e opera, com a
                    Bárbara cuidando de cada etapa.
                  </p>
                  <div
                    className="t3-ctas"
                    style={{
                      animation: 'index-t3-in .9s .45s cubic-bezier(.2,.7,.2,1) both',
                      marginTop: '40px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <a
                      className="t3-btn t3-dark"
                      href={vals.wa}
                      style={{
                        background: '#16172B',
                        color: '#F5F4FA',
                        borderRadius: '100px',
                        padding: '18px 30px',
                        fontSize: '17px',
                        fontWeight: '500',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      Quero vender mais{' '}
                      <svg
                        aria-hidden="true"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>{' '}
                    <a
                      className="t3-btn t3-ghost"
                      href="#servicos"
                      style={{
                        border: '1.5px solid #16172B',
                        borderRadius: '100px',
                        padding: '17px 28px',
                        fontSize: '17px',
                        fontWeight: '500',
                      }}
                    >
                      Ver como funciona
                    </a>
                  </div>
                </div>
                {/* console de pedidos */}
                <div style={{ animation: 'index-t3-in 1s .35s cubic-bezier(.2,.7,.2,1) both', position: 'relative' }}>
                  <div
                    className="t3-float"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      right: '-28px',
                      top: '-36px',
                      width: '120px',
                      height: '120px',
                      borderRadius: '28px',
                      background: vals.signal,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'index-t3-float 6s ease-in-out infinite',
                      zIndex: '2',
                    }}
                  >
                    <img src="/assets/icone-tec3.png" alt="" style={{ width: '64px', height: 'auto' }} />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      background: '#FFFFFF',
                      borderRadius: '28px',
                      border: '1px solid rgba(22,23,43,.08)',
                      boxShadow: '0 40px 80px -40px rgba(38,42,96,.35)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 22px',
                        borderBottom: '1px solid rgba(22,23,43,.07)',
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: '13px',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#2E9E5B',
                            animation: 'index-t3-blink 1.2s infinite',
                          }}
                        />
                        pedidos.ao_vivo
                      </span>{' '}
                      <span style={{ color: 'rgba(22,23,43,.6)' }}>estoque sincronizado</span>
                    </div>
                    <div
                      className="t3-console"
                      style={{
                        height: '340px',
                        overflow: 'hidden',
                        WebkitMaskImage: 'linear-gradient(transparent,#000 14%,#000 86%,transparent)',
                        maskImage: 'linear-gradient(transparent,#000 14%,#000 86%,transparent)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          padding: '12px 18px',
                          animation: 'index-t3-up 22s linear infinite',
                        }}
                      >
                        {vals.orders.map((o, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '44px 1fr auto',
                              gap: '14px',
                              alignItems: 'center',
                              background: '#F7F6FC',
                              borderRadius: '18px',
                              padding: '14px 16px',
                            }}
                          >
                            <div
                              style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '14px',
                                background: o.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                                fontVariantNumeric: 'tabular-nums',
                                fontWeight: '500',
                                fontSize: '13px',
                                color: o.ink,
                              }}
                            >
                              {o.tag}
                            </div>
                            <div style={{ minWidth: '0' }}>
                              <div style={{ fontSize: '16px', fontWeight: '500' }}>Novo pedido · {o.ch}</div>
                              <div
                                style={{
                                  fontSize: '14px',
                                  color: 'rgba(22,23,43,.62)',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {o.item}
                              </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div
                                style={{
                                  fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                                  fontVariantNumeric: 'tabular-nums',
                                  fontSize: '14px',
                                  fontWeight: '500',
                                }}
                              >
                                {o.v}
                              </div>
                              <div style={{ fontSize: '12px', color: 'rgba(22,23,43,.55)' }}>{o.t}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                        padding: '16px 22px',
                        borderTop: '1px solid rgba(22,23,43,.07)',
                      }}
                    >
                      {vals.chips.map((c, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                            fontVariantNumeric: 'tabular-nums',
                            fontSize: '12px',
                            borderRadius: '100px',
                            padding: '6px 12px',
                            background: '#EFEDF9',
                            color: '#3D3480',
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* números */}
              <div className="t3-stats" style={{ marginTop: '88px', borderTop: '1.5px solid #16172B' }}>
                {vals.stats.map((s, i) => (
                  <div key={i} data-reveal="1" style={{ padding: '28px 24px 0 0' }}>
                    <div
                      style={{
                        fontSize: 'clamp(40px,4.4vw,64px)',
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontWeight: '700',
                        letterSpacing: '-.015em',
                        lineHeight: '1',
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        marginTop: '10px',
                        fontSize: '16px',
                        lineHeight: '1.45',
                        color: 'rgba(22,23,43,.68)',
                        maxWidth: '220px',
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* CLIENTES */}
          <section
            aria-label="Clientes"
            style={{
              padding: '40px 0 56px',
              borderTop: '1px solid rgba(22,23,43,.08)',
              borderBottom: '1px solid rgba(22,23,43,.08)',
              background: '#FFFFFF',
            }}
          >
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto 24px',
                padding: '0 clamp(20px,4vw,48px)',
                fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                fontVariantNumeric: 'tabular-nums',
                fontSize: '13px',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                color: 'rgba(22,23,43,.6)',
              }}
            >
              Marcas que vendem com a Tec3
            </div>
            <div
              style={{
                overflow: 'hidden',
                WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
                maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 'max-content',
                  alignItems: 'center',
                  gap: '88px',
                  animation: 'index-t3-left 34s linear infinite',
                }}
              >
                {vals.clients.map((c, i) => (
                  <img
                    key={i}
                    src={c.src}
                    alt={c.name}
                    style={{ height: '52px', width: 'auto', maxWidth: '180px', objectFit: 'contain', flex: '0 0 auto' }}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* TEC3 CONNECT EM DESTAQUE */}
          <section
            aria-label="TEC3 Connect"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,48px) 0' }}
          >
            <Link
              data-reveal="1"
              href="/connect"
              className="t3-tile t3-pad"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,1fr) auto',
                gap: '28px',
                alignItems: 'center',
                background: '#16172B',
                color: '#F5F4FA',
                borderRadius: '32px',
                padding: 'clamp(28px,4vw,48px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'relative', zIndex: '1' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#D9F36A',
                    color: '#16172B',
                    borderRadius: '100px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#16172B',
                      animation: 'index-t3-blink 1.4s infinite',
                    }}
                  />
                  Novo · TEC3 Connect
                </span>
                <h2
                  style={{
                    margin: '16px 0 0',
                    fontSize: 'clamp(30px,4vw,56px)',
                    lineHeight: '1.02',
                    letterSpacing: '-.015em',
                    fontWeight: '700',
                  }}
                >
                  Sua operação 360°. <span style={{ color: '#D9F36A' }}>Um time só.</span>
                </h2>
                <p
                  style={{
                    margin: '14px 0 0',
                    fontSize: '18px',
                    lineHeight: '1.55',
                    color: 'rgba(245,244,250,.8)',
                    maxWidth: '640px',
                  }}
                >
                  Loja, ERP, marketplaces, tráfego, pagamentos e conteúdo unidos em um plano, com um responsável.
                </p>
              </div>
              <span
                aria-hidden="true"
                style={{
                  position: 'relative',
                  zIndex: '1',
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: '#D9F36A',
                  color: '#16172B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: '700',
                }}
              >
                →
              </span>
            </Link>
          </section>
          {/* SERVIÇOS BENTO */}
          <section
            id="servicos"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: 'clamp(80px,10vw,140px) clamp(20px,4vw,48px) 40px',
            }}
          >
            <div
              data-reveal="1"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
                marginBottom: '48px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#5B4FB0',
                  }}
                >
                  01 · Serviços
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(40px,5.2vw,76px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                    maxWidth: '820px',
                  }}
                >
                  Tudo o que sua operação precisa. Num só responsável.
                </h2>
              </div>
              <p
                style={{
                  margin: '0',
                  maxWidth: '360px',
                  fontSize: '17px',
                  lineHeight: '1.55',
                  color: 'rgba(22,23,43,.7)',
                }}
              >
                Da escolha da plataforma à rotina dos marketplaces. Você fala com uma pessoa só, do começo ao fim.
              </p>
            </div>
            <div className="t3-bento">
              {/* implantação */}
              <article
                data-reveal="1"
                className="t3-tile t3-span2 t3-pad"
                style={{
                  background: '#B5ABFC',
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                  minHeight: '420px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Implantação de e-commerce
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(32px,3.4vw,48px)',
                    lineHeight: '1',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                    maxWidth: '520px',
                  }}
                >
                  Sua loja no ar, pronta para vender no celular.
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {vals.platforms.map((p, i) => (
                    <span
                      key={i}
                      style={{
                        background: '#F5F4FA',
                        borderRadius: '100px',
                        padding: '9px 16px',
                        fontSize: '15px',
                        fontWeight: '500',
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div
                  className="t3-mock"
                  aria-hidden="true"
                  style={{
                    marginTop: 'auto',
                    alignSelf: 'flex-end',
                    width: 'min(100%,460px)',
                    background: '#FFFFFF',
                    borderRadius: '20px 20px 0 0',
                    marginBottom: '-40px',
                    boxShadow: '0 -20px 40px -20px rgba(38,42,96,.35)',
                    padding: '14px 16px 24px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E3E0F3' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E3E0F3' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E3E0F3' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '10px' }}>
                    <div style={{ height: '86px', borderRadius: '12px', background: '#EFEDF9' }} />
                    <div style={{ height: '86px', borderRadius: '12px', background: vals.signal }} />
                    <div style={{ height: '86px', borderRadius: '12px', background: '#EFEDF9' }} />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '14px',
                    }}
                  >
                    <div style={{ height: '10px', width: '46%', borderRadius: '6px', background: '#E3E0F3' }} />
                    <div
                      style={{
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: '12px',
                        background: '#16172B',
                        color: '#F5F4FA',
                        borderRadius: '100px',
                        padding: '6px 12px',
                      }}
                    >
                      Comprar
                    </div>
                  </div>
                </div>
              </article>
              {/* marketplaces */}
              <article
                id="marketplaces"
                data-reveal="1"
                data-delay="80"
                className="t3-tile t3-pad"
                style={{
                  background: vals.signal,
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  minHeight: '420px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Gestão de marketplaces
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontSize: '36px',
                    lineHeight: '1.02',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                  }}
                >
                  Onde o cliente já está comprando.
                </h3>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
                  {vals.markets.map((m, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 0',
                        borderTop: '1.5px solid rgba(22,23,43,.85)',
                      }}
                    >
                      <span style={{ fontSize: '20px', fontWeight: '500' }}>{m.n}</span>
                      <span
                        style={{
                          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                          fontVariantNumeric: 'tabular-nums',
                          fontSize: '13px',
                        }}
                      >
                        {m.d}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
              {/* integrações */}
              <article
                data-reveal="1"
                className="t3-tile t3-span2 t3-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: '13px',
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        color: '#5B4FB0',
                      }}
                    >
                      Integração ativa
                    </div>
                    <h3
                      style={{
                        margin: '14px 0 0',
                        fontSize: 'clamp(30px,3vw,42px)',
                        lineHeight: '1.02',
                        letterSpacing: '-.015em',
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontWeight: '700',
                        maxWidth: '520px',
                      }}
                    >
                      Vendeu em um canal, atualiza em todos.
                    </h3>
                  </div>
                  <p
                    style={{
                      margin: '0',
                      maxWidth: '300px',
                      fontSize: '16px',
                      lineHeight: '1.55',
                      color: 'rgba(22,23,43,.68)',
                    }}
                  >
                    Estoque, preço, pedidos e notas sincronizados com o Olist Tiny, o único ERP que a gente indica.
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 0',
                  }}
                >
                  <div
                    className="t3-flowline"
                    style={{
                      position: 'absolute',
                      left: '48px',
                      right: '48px',
                      top: '50%',
                      height: '2px',
                      backgroundImage: 'linear-gradient(90deg,rgba(22,23,43,.25) 50%,transparent 50%)',
                      backgroundSize: '12px 2px',
                    }}
                  />
                  <div
                    className="t3-flowline"
                    style={{ position: 'absolute', left: '48px', right: '48px', top: '50%', height: '0' }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: '#5B4FB0',
                        boxShadow: '0 0 0 6px rgba(91,79,176,.18)',
                        animation: 'index-t3-travel 3.2s cubic-bezier(.6,0,.4,1) infinite',
                      }}
                    />{' '}
                    <span
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: '#16172B',
                        boxShadow: '0 0 0 6px rgba(217,243,106,.7)',
                        animation: 'index-t3-travel 3.2s 1.6s cubic-bezier(.6,0,.4,1) infinite',
                      }}
                    />
                  </div>
                  {vals.flow.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'relative',
                        zIndex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <div
                        className="t3-node"
                        style={{
                          width: '96px',
                          height: '96px',
                          borderRadius: '26px',
                          background: f.bg,
                          border: '1px solid rgba(22,23,43,.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16172B"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={f.icon} />
                        </svg>
                      </div>
                      <span
                        className="t3-nodelabel"
                        style={{ fontSize: '15px', fontWeight: '500', textAlign: 'center' }}
                      >
                        {f.n}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
              {/* pagamentos */}
              <article
                data-reveal="1"
                data-delay="80"
                className="t3-tile t3-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#1C7A47',
                  }}
                >
                  Tec3 + Stone
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontSize: '34px',
                    lineHeight: '1.02',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                  }}
                >
                  Taxas exclusivas para clientes Tec3.
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', color: 'rgba(22,23,43,.68)' }}>
                  Parceira oficial Stone há mais de 3 anos. Condição ainda melhor acima de R$ 100 mil por mês.
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontVariantNumeric: 'tabular-nums',
                      fontSize: '12px',
                      borderRadius: '100px',
                      padding: '7px 12px',
                      background: '#E3F5EA',
                      color: '#14532D',
                    }}
                  >
                    Checkout
                  </span>
                  <span
                    style={{
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontVariantNumeric: 'tabular-nums',
                      fontSize: '12px',
                      borderRadius: '100px',
                      padding: '7px 12px',
                      background: '#E3F5EA',
                      color: '#14532D',
                    }}
                  >
                    Link
                  </span>
                  <span
                    style={{
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontVariantNumeric: 'tabular-nums',
                      fontSize: '12px',
                      borderRadius: '100px',
                      padding: '7px 12px',
                      background: '#E3F5EA',
                      color: '#14532D',
                    }}
                  >
                    Pix
                  </span>
                </div>
              </article>
              {/* sustentação */}
              <article
                data-reveal="1"
                className="t3-tile t3-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(22,23,43,.08)',
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#5B4FB0',
                  }}
                >
                  Sustentação
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontSize: '34px',
                    lineHeight: '1.02',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                  }}
                >
                  Depois do go-live, a gente continua.
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', color: 'rgba(22,23,43,.68)' }}>
                  Melhorias mês a mês, preparação para datas como a Black Friday e atendimento direto com a fundadora.
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '2px dashed #5B4FB0',
                      animation: 'index-t3-spin 9s linear infinite',
                    }}
                  />
                  <span style={{ fontSize: '15px', fontWeight: '500' }}>Planos Iniciante e Avançado</span>
                </div>
              </article>
              {/* incubadora */}
              <article
                data-reveal="1"
                data-delay="80"
                className="t3-tile t3-span2 t3-pad"
                style={{
                  background: '#E9E6FD',
                  borderRadius: '32px',
                  padding: '40px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '32px',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ maxWidth: '560px' }}>
                  <div
                    style={{
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontVariantNumeric: 'tabular-nums',
                      fontSize: '13px',
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                      color: '#5B4FB0',
                    }}
                  >
                    Incubadora Tec3
                  </div>
                  <h3
                    style={{
                      margin: '14px 0 0',
                      fontSize: 'clamp(32px,3.4vw,48px)',
                      lineHeight: '1',
                      letterSpacing: '-.015em',
                      fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                      fontWeight: '700',
                    }}
                  >
                    Começando do zero? A gente começa junto.
                  </h3>
                  <p style={{ margin: '16px 0 0', fontSize: '17px', lineHeight: '1.55', color: 'rgba(22,23,43,.7)' }}>
                    Um caminho guiado para o primeiro e-commerce, da escolha da plataforma à primeira venda.
                  </p>
                </div>
                <a
                  className="t3-btn t3-dark"
                  href={vals.wa}
                  style={{
                    background: '#16172B',
                    color: '#F5F4FA',
                    borderRadius: '100px',
                    padding: '16px 26px',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  Quero entrar na Incubadora
                </a>
              </article>
            </div>
          </section>
          {/* NUVEMSHOP */}
          <section
            id="nuvemshop"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '60px clamp(20px,4vw,48px) clamp(80px,10vw,140px)',
            }}
          >
            <div
              data-reveal="1"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <img
                  src="/assets/logo-nuvemshop.png"
                  alt="Nuvemshop"
                  style={{ height: '52px', width: 'auto', display: 'block' }}
                />{' '}
                <span style={{ width: '1px', height: '36px', background: 'rgba(44,51,87,.25)' }} />{' '}
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#2C3357',
                  }}
                >
                  02 · Agência parceira Nuvemshop
                </span>
              </div>
              <Link
                className="t3-link"
                href="/nuvemshop"
                style={{ fontSize: '16px', fontWeight: '600', color: '#2C3357' }}
              >
                Conhecer a parceria e o layout Ipanema →
              </Link>
            </div>
            <div className="t3-two">
              <div
                data-reveal="1"
                className="t3-tile t3-pad"
                style={{
                  background: '#2C3357',
                  color: '#FFFFFF',
                  borderRadius: '32px',
                  padding: '44px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  minHeight: '340px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#C9CEE6',
                  }}
                >
                  Loja nova na Nuvemshop
                </div>
                <div
                  style={{
                    fontSize: 'clamp(64px,8vw,120px)',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                    letterSpacing: '-.015em',
                    lineHeight: '.9',
                  }}
                >
                  25% OFF
                </div>
                <p
                  style={{
                    margin: '0',
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: 'rgba(255,255,255,.85)',
                    maxWidth: '440px',
                  }}
                >
                  no 1º mês de qualquer plano pago, criando a loja pelo link da Tec3.
                </p>
                <a
                  className="t3-btn"
                  href={vals.wa}
                  style={{
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    background: '#FFFFFF',
                    color: '#2C3357',
                    borderRadius: '100px',
                    padding: '15px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  Criar minha loja
                </a>
              </div>
              <div
                data-reveal="1"
                data-delay="100"
                className="t3-tile t3-pad"
                style={{
                  background: '#EEF0F7',
                  border: '1px solid rgba(44,51,87,.12)',
                  borderRadius: '32px',
                  padding: '44px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  minHeight: '340px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontVariantNumeric: 'tabular-nums',
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#2C3357',
                  }}
                >
                  Migração patrocinada
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(36px,4vw,56px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                  }}
                >
                  A Nuvemshop paga a sua migração.
                </h3>
                <p
                  style={{
                    margin: '0',
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: 'rgba(22,23,43,.7)',
                    maxWidth: '460px',
                  }}
                >
                  Fatura mais de R$ 50 mil? A loja nova sai por conta dela, e a Tec3 leva produtos, clientes, pedidos e
                  SEO sem você parar de vender.
                </p>
                <a
                  className="t3-btn"
                  href={vals.wa}
                  style={{
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    background: '#2C3357',
                    color: '#FFFFFF',
                    borderRadius: '100px',
                    padding: '15px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  Quero minha migração paga
                </a>
              </div>
            </div>
          </section>
          {/* TEC·A */}
          <section id="teca" aria-label="TEC·A" style={{ padding: '0 clamp(12px,2vw,24px)' }}>
            <div
              style={{
                background: '#F3EDE2',
                color: '#17110F',
                borderRadius: '40px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)' }}
              >
                <div className="t3-teca">
                  <div data-reveal="1">
                    <div
                      style={{
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: '13px',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#B3123F',
                      }}
                    >
                      03 · Uma empresa do grupo Tec3
                    </div>
                    <div
                      style={{
                        marginTop: '20px',
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontSize: 'clamp(96px,14vw,210px)',
                        lineHeight: '.82',
                        letterSpacing: '-.015em',
                      }}
                    >
                      TEC<span style={{ color: '#B3123F' }}>·</span>A
                    </div>
                    <p
                      style={{
                        margin: '28px 0 0',
                        fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                        fontStyle: 'italic',
                        fontSize: 'clamp(28px,3vw,42px)',
                        lineHeight: '1.15',
                        maxWidth: '560px',
                      }}
                    >
                      {'Social, lives & brand para marcas que querem ser lembradas.'}
                    </p>
                    <p
                      style={{
                        margin: '24px 0 0',
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: 'rgba(23,20,31,.74)',
                        maxWidth: '520px',
                      }}
                    >
                      A TEC·A cria a presença da sua marca fora da loja: conteúdo, lives que vendem, eventos e
                      identidade visual. Tudo sob medida, com o mesmo cuidado de quem já lançou marcas do site ao
                      coquetel de inauguração.
                    </p>
                    <div
                      style={{
                        marginTop: '36px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        alignItems: 'center',
                      }}
                    >
                      <Link
                        className="t3-btn"
                        href="/teca"
                        style={{
                          background: '#B3123F',
                          color: '#F3EDE2',
                          borderRadius: '100px',
                          padding: '17px 28px',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                      >
                        Conhecer a TEC·A
                      </Link>{' '}
                      <a
                        className="t3-link"
                        href="https://www.instagram.com/atecataon/"
                        style={{
                          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                          fontVariantNumeric: 'tabular-nums',
                          fontSize: '15px',
                          color: '#17110F',
                          padding: '12px 4px',
                        }}
                      >
                        @atecataon
                      </a>
                    </div>
                  </div>
                  {/* live mock */}
                  <div data-reveal="1" data-delay="120" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                      style={{
                        position: 'relative',
                        width: 'min(100%,340px)',
                        aspectRatio: '9/16',
                        borderRadius: '36px',
                        background: '#17110F',
                        padding: '14px',
                        boxShadow: '0 50px 90px -40px rgba(23,20,31,.55)',
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          borderRadius: '26px',
                          overflow: 'hidden',
                          background: 'linear-gradient(160deg,#2A2232,#17110F 55%,#3A0F1C)',
                        }}
                      >
                        <video
                          src="/assets/live.mp4"
                          poster="/assets/live.jpg"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          aria-label="Live de cozinha ao vivo"
                          style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <div
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            inset: '0',
                            background:
                              'linear-gradient(rgba(23,17,15,.45),transparent 22%,transparent 50%,rgba(23,17,15,.75))',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '18px',
                            left: '18px',
                            right: '18px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              background: '#B3123F',
                              color: '#F3EDE2',
                              borderRadius: '8px',
                              padding: '6px 10px',
                              fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                              fontVariantNumeric: 'tabular-nums',
                              fontSize: '12px',
                              fontWeight: '500',
                              letterSpacing: '.08em',
                            }}
                          >
                            <span
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#F3EDE2',
                                animation: 'index-t3-pulse 1.6s infinite',
                              }}
                            />
                            AO VIVO
                          </span>{' '}
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              background: 'rgba(243,237,227,.14)',
                              color: '#F3EDE2',
                              borderRadius: '8px',
                              padding: '6px 10px',
                              fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                              fontVariantNumeric: 'tabular-nums',
                              fontSize: '12px',
                            }}
                          >
                            <svg
                              aria-hidden="true"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            <LiveViewers />
                          </span>
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            left: '14px',
                            right: '14px',
                            bottom: '76px',
                            height: '150px',
                            overflow: 'hidden',
                            WebkitMaskImage: 'linear-gradient(transparent,#000 30%)',
                            maskImage: 'linear-gradient(transparent,#000 30%)',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              animation: 'index-t3-up 16s linear infinite',
                            }}
                          >
                            {vals.chat.map((m, i) => (
                              <div
                                key={i}
                                style={{
                                  alignSelf: 'flex-start',
                                  maxWidth: '92%',
                                  background: 'rgba(243,237,227,.12)',
                                  color: '#F3EDE2',
                                  borderRadius: '14px',
                                  padding: '8px 12px',
                                  fontSize: '13px',
                                  lineHeight: '1.35',
                                }}
                              >
                                <b style={{ fontWeight: '500' }}>{m.u}</b> {m.t}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            left: '14px',
                            right: '14px',
                            bottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#F3EDE2',
                            borderRadius: '16px',
                            padding: '10px 12px',
                          }}
                        >
                          <img
                            src="/assets/panela.jpg"
                            alt="Panela em aço inox"
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '10px',
                              objectFit: 'cover',
                              flex: '0 0 auto',
                            }}
                          />
                          <div style={{ flex: '1', minWidth: '0' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: '#17110F' }}>
                              Panela em aço inox
                            </div>
                            <div
                              style={{
                                fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                                fontVariantNumeric: 'tabular-nums',
                                fontSize: '12px',
                                color: 'rgba(23,20,31,.65)',
                              }}
                            >
                              [preço]
                            </div>
                          </div>
                          <span
                            style={{
                              background: '#17110F',
                              color: '#F3EDE2',
                              borderRadius: '100px',
                              padding: '7px 12px',
                              fontSize: '12px',
                              fontWeight: '500',
                            }}
                          >
                            Comprar
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t3-teca4" style={{ marginTop: '88px', borderTop: '1px solid rgba(23,20,31,.22)' }}>
                  {vals.teca.map((t, i) => (
                    <div key={i} data-reveal="1" style={{ padding: '32px 28px 0 0' }}>
                      <div
                        style={{
                          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                          fontStyle: 'italic',
                          fontSize: '30px',
                          color: '#B3123F',
                        }}
                      >
                        {t.n}
                      </div>
                      <h3
                        style={{
                          margin: '14px 0 0',
                          fontSize: '24px',
                          letterSpacing: '-.015em',
                          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                          fontWeight: '700',
                        }}
                      >
                        {t.t}
                      </h3>
                      <p
                        style={{
                          margin: '10px 0 0',
                          fontSize: '16px',
                          lineHeight: '1.55',
                          color: 'rgba(23,20,31,.72)',
                        }}
                      >
                        {t.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* ÁREA DO CLIENTE + CTA FINAL */}
          <section id="area" style={{ padding: '0 clamp(12px,2vw,24px) clamp(12px,2vw,24px)' }}>
            <div
              data-reveal="1"
              style={{
                background: '#B5ABFC',
                borderRadius: '40px',
                padding: 'clamp(56px,8vw,112px) clamp(24px,5vw,72px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                aria-hidden="true"
                src="/assets/icone-tec3.png"
                alt=""
                style={{
                  position: 'absolute',
                  right: '-80px',
                  bottom: '-120px',
                  height: '440px',
                  width: 'auto',
                  opacity: '.12',
                  animation: 'index-t3-spin 60s linear infinite',
                }}
              />
              <div style={{ position: 'relative', maxWidth: '900px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(48px,7vw,108px)',
                    lineHeight: '1',
                    letterSpacing: '-.015em',
                    fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                    fontWeight: '700',
                  }}
                >
                  Vamos colocar sua marca para vender?
                </h2>
                <p style={{ margin: '28px 0 0', fontSize: '20px', lineHeight: '1.5', maxWidth: '560px' }}>
                  Me chama no WhatsApp. Quem responde sou eu, a Bárbara.
                </p>
                <div className="t3-ctas" style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <a
                    className="t3-btn"
                    href={vals.wa}
                    style={{
                      background: '#16172B',
                      color: '#F5F4FA',
                      borderRadius: '100px',
                      padding: '19px 32px',
                      fontSize: '17px',
                      fontWeight: '500',
                    }}
                  >
                    Chamar no WhatsApp
                  </a>{' '}
                  <a
                    className="t3-btn t3-ghost"
                    href="#area"
                    style={{
                      border: '1.5px solid #16172B',
                      borderRadius: '100px',
                      padding: '18px 30px',
                      fontSize: '17px',
                      fontWeight: '500',
                    }}
                  >
                    Já sou cliente · Área do cliente
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px clamp(20px,4vw,48px) 40px' }}>
          <div className="t3-foot">
            <div>
              <img
                src="/assets/logo-tec3.png"
                alt="Tec3 Commerce"
                style={{ height: '34px', width: 'auto', display: 'block' }}
              />
              <p
                style={{
                  margin: '18px 0 0',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: 'rgba(22,23,43,.66)',
                  maxWidth: '320px',
                }}
              >
                E-commerce e marketplaces de ponta a ponta. São Paulo, Brasil.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <span
                style={{
                  fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                  fontVariantNumeric: 'tabular-nums',
                  fontSize: '12px',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,23,43,.6)',
                }}
              >
                Tec3
              </span>
              <a className="t3-link" href="#servicos" style={{ alignSelf: 'flex-start' }}>
                Serviços
              </a>
              <a className="t3-link" href="#nuvemshop" style={{ alignSelf: 'flex-start' }}>
                Nuvemshop
              </a>
              <a className="t3-link" href="#area" style={{ alignSelf: 'flex-start' }}>
                Área do cliente
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <span
                style={{
                  fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                  fontVariantNumeric: 'tabular-nums',
                  fontSize: '12px',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,23,43,.6)',
                }}
              >
                TEC·A
              </span>
              <a className="t3-link" href="#teca" style={{ alignSelf: 'flex-start' }}>
                {'Social & lives'}
              </a>
              <a className="t3-link" href="https://www.instagram.com/atecataon/" style={{ alignSelf: 'flex-start' }}>
                @atecataon
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <span
                style={{
                  fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
                  fontVariantNumeric: 'tabular-nums',
                  fontSize: '12px',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,23,43,.6)',
                }}
              >
                Contato
              </span>
              <a className="t3-link" href={vals.wa} style={{ alignSelf: 'flex-start' }}>
                WhatsApp
              </a>
              <a
                className="t3-link"
                href="https://www.instagram.com/tec3commerce_/"
                style={{ alignSelf: 'flex-start' }}
              >
                @tec3commerce_
              </a>
            </div>
          </div>
          <div
            style={{
              marginTop: '56px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(22,23,43,.12)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '12px',
              fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
              fontVariantNumeric: 'tabular-nums',
              fontSize: '12px',
              color: 'rgba(22,23,43,.62)',
            }}
          >
            <span>Parceira Olist OURO · Parceira oficial Stone · Certificada UAPPI</span>{' '}
            <a href="#topo">Voltar ao topo ↑</a>
          </div>
        </footer>
      </div>
      <PageEffects revealDistance={28} revealDuration={800} videos />
    </>
  );
}
