import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/nuvemshop';
import './page.css';

export const metadata: Metadata = { title: 'Tec3 × Nuvemshop · Implantação' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div
        className="pg-nuvemshop"
        style={{
          fontFamily: "'Nexa','Montserrat',system-ui,sans-serif",
          background: '#F7F8FC',
          color: '#1B2140',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <SiteHeader current="nuvemshop" wa={vals.wa} />
        <main>
          {/* HERO */}
          <section style={{ background: '#2C3357', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
            <svg
              aria-hidden="true"
              viewBox="0 0 600 400"
              style={{
                position: 'absolute',
                right: '-140px',
                top: '-60px',
                width: 'min(900px,120vw)',
                height: 'auto',
                opacity: '.12',
                animation: 'nuvemshop-nv-ring 80s linear infinite',
                transformOrigin: '50% 50%',
              }}
            >
              <circle cx="220" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="22" />
              <circle cx="380" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="22" />
            </svg>
            <div
              style={{
                position: 'relative',
                maxWidth: '1280px',
                margin: '0 auto',
                padding: 'clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(56px,7vw,104px)',
              }}
            >
              <div
                style={{
                  animation: 'nuvemshop-nv-in .8s both',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '22px',
                }}
              >
                <img
                  src="/assets/logo-nuvemshop-branco.png"
                  alt="Nuvemshop"
                  style={{ height: 'clamp(72px,9vw,120px)', width: 'auto', display: 'block' }}
                />{' '}
                <span style={{ width: '1px', height: '64px', background: 'rgba(255,255,255,.3)' }} />{' '}
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#C9CEE6',
                    maxWidth: '220px',
                    lineHeight: '1.4',
                  }}
                >
                  Agência parceira oficial
                  <br />
                  Tec3 Commerce
                </span>
              </div>
              <div className="nv-hero" style={{ marginTop: '48px' }}>
                <div>
                  <h1
                    style={{
                      animation: 'nuvemshop-nv-in .9s .1s cubic-bezier(.2,.7,.2,1) both',
                      margin: '0',
                      fontSize: 'clamp(42px,6.2vw,92px)',
                      lineHeight: '1',
                      letterSpacing: '-.02em',
                      fontWeight: '700',
                    }}
                  >
                    Plataforma e agência{' '}
                    <span
                      style={{
                        backgroundImage: 'linear-gradient(#D9F36A,#D9F36A)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0 88%',
                        backgroundSize: '100% 26%',
                      }}
                    >
                      do mesmo lado
                    </span>
                    .
                  </h1>
                  <p
                    style={{
                      animation: 'nuvemshop-nv-in .9s .2s cubic-bezier(.2,.7,.2,1) both',
                      margin: '26px 0 0',
                      maxWidth: '560px',
                      fontSize: '19px',
                      lineHeight: '1.6',
                      color: 'rgba(255,255,255,.82)',
                    }}
                  >
                    Quando quem implanta a sua loja é parceira da plataforma, você ganha segurança: conhecimento de
                    dentro, benefícios exclusivos e alguém que continua junto depois do go-live.
                  </p>
                  <div
                    className="nv-ctas"
                    style={{
                      animation: 'nuvemshop-nv-in .9s .3s cubic-bezier(.2,.7,.2,1) both',
                      marginTop: '36px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <a
                      className="nv-btn"
                      href={vals.wa}
                      style={{
                        background: '#FFFFFF',
                        color: '#2C3357',
                        borderRadius: '100px',
                        padding: '18px 28px',
                        fontSize: '17px',
                        fontWeight: '700',
                        display: 'inline-flex',
                      }}
                    >
                      Quero minha loja na Nuvemshop
                    </a>{' '}
                    <a
                      href="#implantacao"
                      style={{
                        border: '1.5px solid rgba(255,255,255,.6)',
                        color: '#FFFFFF',
                        borderRadius: '100px',
                        padding: '17px 26px',
                        fontSize: '17px',
                        fontWeight: '600',
                        display: 'inline-flex',
                      }}
                    >
                      Como é a implantação
                    </a>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: 'relative', maxWidth: '500px', width: '100%', justifySelf: 'center' }}
                >
                  <svg
                    viewBox="0 0 520 400"
                    style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
                  >
                    <circle cx="190" cy="200" r="140" fill="rgba(255,255,255,.06)" />
                    <circle cx="330" cy="200" r="140" fill="rgba(181,171,252,.14)" />
                    <circle
                      cx="190"
                      cy="200"
                      r="140"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="10"
                      pathLength="1"
                      strokeDasharray="1"
                      style={{ animation: 'nuvemshop-nv-draw 1.6s .3s cubic-bezier(.6,0,.3,1) both' }}
                    />
                    <circle
                      cx="330"
                      cy="200"
                      r="140"
                      fill="none"
                      stroke="#B5ABFC"
                      strokeWidth="10"
                      pathLength="1"
                      strokeDasharray="1"
                      style={{ animation: 'nuvemshop-nv-draw 1.6s .6s cubic-bezier(.6,0,.3,1) both' }}
                    />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      left: '7%',
                      top: '43%',
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      animation: 'nuvemshop-nv-in .8s 1.2s both',
                    }}
                  >
                    Plataforma
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      right: '9%',
                      top: '43%',
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#D2CEFD',
                      animation: 'nuvemshop-nv-in .8s 1.4s both',
                    }}
                  >
                    Agência
                  </div>
                  <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
                    <div style={{ animation: 'nuvemshop-nv-pop .6s 1.8s cubic-bezier(.2,.9,.3,1.3) both' }}>
                      <div
                        style={{
                          animation: 'nuvemshop-nv-float 5s 2.4s ease-in-out infinite',
                          background: '#FFFFFF',
                          color: '#1B2140',
                          borderRadius: '20px',
                          padding: '14px 18px',
                          boxShadow: '0 20px 40px -20px rgba(0,0,0,.5)',
                          textAlign: 'center',
                          minWidth: '120px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '.08em',
                            textTransform: 'uppercase',
                            color: '#4A5072',
                          }}
                        >
                          Resultado
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: '700', marginTop: '4px' }}>Sua loja</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* POR QUE PARCERIA */}
          <section
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(44,51,87,.08)',
              borderBottom: '1px solid rgba(44,51,87,.08)',
            }}
          >
            <div
              style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)' }}
            >
              <div data-reveal="1" style={{ maxWidth: '760px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#2C3357',
                  }}
                >
                  Por que parceria importa
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(34px,4.4vw,60px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  Você não está escolhendo só uma plataforma. Está escolhendo quem vai estar ao seu lado.
                </h2>
              </div>
              <div className="nv-4" style={{ marginTop: '56px' }}>
                {vals.why.map((w, i) => (
                  <article
                    key={i}
                    data-reveal="1"
                    data-delay={w.delay}
                    className="nv-card nv-pad"
                    style={{
                      background: '#F7F8FC',
                      border: '1px solid rgba(44,51,87,.1)',
                      borderRadius: '28px',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: '#2C3357',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={w.icon} />
                      </svg>
                    </div>
                    <h3 style={{ margin: '0', fontSize: '22px', lineHeight: '1.2', fontWeight: '700' }}>{w.t}</h3>
                    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#4A5072' }}>{w.d}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* IPANEMA */}
          <section
            id="ipanema"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)' }}
          >
            <div className="nv-2">
              <div data-reveal="1">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#2C3357',
                    color: '#FFFFFF',
                    borderRadius: '100px',
                    padding: '7px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.04em',
                  }}
                >
                  Novo · Layout Ipanema
                </div>
                <h2
                  style={{
                    margin: '18px 0 0',
                    fontSize: 'clamp(36px,4.6vw,64px)',
                    lineHeight: '1.02',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  O layout é seu. 100% personalizável, sem depender de ninguém.
                </h2>
                <p
                  style={{
                    margin: '22px 0 0',
                    fontSize: '18px',
                    lineHeight: '1.65',
                    color: '#4A5072',
                    maxWidth: '560px',
                  }}
                >
                  O Ipanema é o layout da Nuvemshop construído inteiro com seções e blocos, com edição visual direto na
                  prévia da loja. A Tec3 monta a base com a sua marca e entrega a loja para você mudar o que quiser,
                  quando quiser.
                </p>
                <ul className="nv-feat" style={{ listStyle: 'none', margin: '32px 0 0', padding: '0' }}>
                  {vals.ipanema.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        background: '#FFFFFF',
                        border: '1px solid rgba(44,51,87,.1)',
                        borderRadius: '18px',
                        padding: '16px 18px',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: '0 0 auto',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#D9F36A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1B2140"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>{' '}
                      <span style={{ fontSize: '15px', lineHeight: '1.5' }}>
                        <b style={{ fontWeight: '700' }}>{f.t}</b> {f.d}
                      </span>
                    </li>
                  ))}
                </ul>
                <p style={{ margin: '18px 0 0', fontSize: '13px', color: '#6A6F8C' }}>
                  Fonte:{' '}
                  <a href="https://www.nuvemshop.com.br/solucoes/novo-editor" style={{ textDecoration: 'underline' }}>
                    Nuvemshop · Editor com IA
                  </a>{' '}
                  e{' '}
                  <a
                    href="https://atendimento.nuvemshop.com.br/pt_BR/layout-ipanema/como-personalizar-meu-layout-ipanema-na-nuvemshop"
                    style={{ textDecoration: 'underline' }}
                  >
                    Central de Atendimento
                  </a>
                </p>
              </div>
              {/* mini editor animado */}
              <div
                data-reveal="1"
                data-delay="120"
                aria-hidden="true"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.12)',
                  borderRadius: '28px',
                  boxShadow: '0 40px 80px -46px rgba(44,51,87,.55)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 18px',
                    borderBottom: '1px solid rgba(44,51,87,.1)',
                  }}
                >
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DDE1F0' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DDE1F0' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DDE1F0' }} />{' '}
                  <span style={{ marginLeft: '10px', fontSize: '12px', fontWeight: '600', color: '#4A5072' }}>
                    Editor · Ipanema
                  </span>{' '}
                  <span
                    style={{
                      marginLeft: 'auto',
                      background: '#2C3357',
                      color: '#FFFFFF',
                      borderRadius: '100px',
                      padding: '5px 12px',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    Publicar
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '38% 62%', minHeight: '340px' }}>
                  <div
                    style={{
                      borderRight: '1px solid rgba(44,51,87,.1)',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#6A6F8C',
                      }}
                    >
                      Seções
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        background: '#F7F8FC',
                        borderRadius: '10px',
                        padding: '10px 12px',
                      }}
                    >
                      Cabeçalho
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        background: '#EEF0F7',
                        borderRadius: '10px',
                        padding: '10px 12px',
                        border: '1.5px solid #2C3357',
                        animation: 'nuvemshop-nv-swap 6s ease-in-out infinite',
                      }}
                    >
                      Banner principal
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        background: '#F7F8FC',
                        borderRadius: '10px',
                        padding: '10px 12px',
                        animation: 'nuvemshop-nv-swap2 6s ease-in-out infinite',
                      }}
                    >
                      Vitrine
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        background: '#F7F8FC',
                        borderRadius: '10px',
                        padding: '10px 12px',
                      }}
                    >
                      Depoimentos
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        background: '#F7F8FC',
                        borderRadius: '10px',
                        padding: '10px 12px',
                      }}
                    >
                      Rodapé
                    </div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      style={{
                        position: 'absolute',
                        left: '62%',
                        top: '96px',
                        animation: 'nuvemshop-nv-cursor 6s ease-in-out infinite',
                      }}
                    >
                      <path d="M4 2l16 9-7 2-3 7z" fill="#1B2140" stroke="#FFFFFF" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div
                    style={{
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      background: '#F7F8FC',
                    }}
                  >
                    <div style={{ height: '16px', width: '40%', borderRadius: '6px', background: '#DDE1F0' }} />
                    <div
                      style={{
                        height: '120px',
                        borderRadius: '14px',
                        animation: 'nuvemshop-nv-color 6s ease-in-out infinite',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '12px',
                      }}
                    >
                      <span
                        style={{
                          background: '#1B2140',
                          color: '#FFFFFF',
                          fontSize: '10px',
                          fontWeight: '700',
                          borderRadius: '100px',
                          padding: '5px 10px',
                        }}
                      >
                        COMPRAR
                      </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '8px' }}>
                      <div
                        style={{
                          height: '70px',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(44,51,87,.1)',
                        }}
                      />
                      <div
                        style={{
                          height: '70px',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(44,51,87,.1)',
                        }}
                      />
                      <div
                        style={{
                          height: '70px',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(44,51,87,.1)',
                        }}
                      />
                    </div>
                    <div style={{ height: '10px', width: '70%', borderRadius: '6px', background: '#DDE1F0' }} />
                    <div style={{ height: '10px', width: '50%', borderRadius: '6px', background: '#DDE1F0' }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CHECKOUT */}
          <section
            id="checkout"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)' }}
          >
            <div
              data-reveal="1"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
              }}
            >
              <div style={{ maxWidth: '760px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#2C3357',
                  }}
                >
                  Checkout Nuvem Pago
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontSize: 'clamp(34px,4.4vw,60px)',
                    lineHeight: '1.04',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  O checkout é onde a venda acontece. Ou se perde.
                </h2>
              </div>
              <p style={{ margin: '0', maxWidth: '360px', fontSize: '16px', lineHeight: '1.6', color: '#4A5072' }}>
                Recursos nativos de pagamento da Nuvemshop, sem app extra. A Tec3 configura e testa cada um antes do
                go-live.
              </p>
            </div>
            <div className="nv-ck" style={{ marginTop: '44px' }}>
              <div
                data-reveal="1"
                data-delay="0"
                className="nv-card nv-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.1)',
                  borderRadius: '24px',
                  padding: '26px',
                }}
              >
                <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Checkout transparente</h3>
                <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A5072' }}>
                  O cliente paga sem sair da sua loja: cartão, boleto e Pix no mesmo ambiente.
                </p>
              </div>
              <div
                data-reveal="1"
                data-delay="70"
                className="nv-card nv-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.1)',
                  borderRadius: '24px',
                  padding: '26px',
                }}
              >
                <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Checkout acelerado</h3>
                <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A5072' }}>
                  Compra em um clique para quem já comprou na rede, que reúne mais de 15 milhões de consumidores.
                </p>
              </div>
              <div
                data-reveal="1"
                data-delay="140"
                className="nv-card nv-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.1)',
                  borderRadius: '24px',
                  padding: '26px',
                }}
              >
                <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Botão "Comprar agora"</h3>
                <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A5072' }}>
                  Compra direto da página do produto, sem passar pelo carrinho.
                </p>
              </div>
              <div
                data-reveal="1"
                data-delay="0"
                className="nv-card nv-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.1)',
                  borderRadius: '24px',
                  padding: '26px',
                }}
              >
                <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Até 3x mais rápido</h3>
                <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A5072' }}>
                  Finalização de compra mais rápida com o Nuvem Pago, segundo a Nuvemshop.
                </p>
              </div>
              <div
                data-reveal="1"
                data-delay="70"
                className="nv-card nv-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.1)',
                  borderRadius: '24px',
                  padding: '26px',
                }}
              >
                <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Antifraude incluso</h3>
                <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A5072' }}>
                  Camada de antifraude que aprova mais pedidos com segurança.
                </p>
              </div>
              <div
                data-reveal="1"
                data-delay="140"
                className="nv-card nv-pad"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44,51,87,.1)',
                  borderRadius: '24px',
                  padding: '26px',
                }}
              >
                <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Ativação sem programador</h3>
                <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A5072' }}>
                  É só ativar o Nuvem Pago em Meios de Pagamento, no painel.
                </p>
              </div>
            </div>
            <p style={{ margin: '18px 0 0', fontSize: '13px', color: '#6A6F8C' }}>
              Números informados pela Nuvemshop. Fonte:{' '}
              <a
                href="https://www.nuvemshop.com.br/funcionalidades/checkout-transparente"
                style={{ textDecoration: 'underline' }}
              >
                Checkout transparente Nuvem Pago
              </a>
              .
            </p>
          </section>
          {/* NUVEM NEXT */}
          <section id="next" style={{ padding: '0 clamp(12px,2vw,24px)' }}>
            <div style={{ background: '#2C3357', color: '#FFFFFF', borderRadius: '40px', overflow: 'hidden' }}>
              <div
                className="nv-2"
                style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,48px)' }}
              >
                <div data-reveal="1">
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#D9F36A',
                      color: '#1B2140',
                      borderRadius: '100px',
                      padding: '6px 14px',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Para operações que estão crescendo
                  </span>
                  <h2
                    style={{
                      margin: '18px 0 0',
                      fontSize: 'clamp(40px,5.6vw,80px)',
                      lineHeight: '.98',
                      letterSpacing: '-.02em',
                      fontWeight: '700',
                    }}
                  >
                    Nuvemshop Next
                  </h2>
                  <p
                    style={{
                      margin: '18px 0 0',
                      fontSize: '19px',
                      lineHeight: '1.6',
                      color: 'rgba(255,255,255,.82)',
                      maxWidth: '520px',
                    }}
                  >
                    O plano enterprise da Nuvemshop, para marcas que precisam de mais estrutura, mais velocidade e
                    suporte de verdade nos momentos que importam.
                  </p>
                  <div
                    aria-hidden="true"
                    style={{
                      marginTop: '32px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '14px',
                      background: 'rgba(255,255,255,.08)',
                      border: '1px solid rgba(255,255,255,.18)',
                      borderRadius: '22px',
                      padding: '16px 20px',
                    }}
                  >
                    <span
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: '#25D366',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z" />
                      </svg>
                    </span>{' '}
                    <span>
                      <b style={{ display: 'block', fontSize: '22px' }}>Até 1 hora</b>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.75)' }}>
                        no WhatsApp, inclusive fim de semana
                      </span>
                    </span>
                  </div>
                </div>
                <div data-reveal="1" data-delay="120">
                  <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: '0' }}>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.15)',
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
                      <span>
                        Atendimento prioritário via WhatsApp, com resposta em até 1 hora, inclusive aos fins de semana
                      </span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.15)',
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
                      <span>Gerente de contas dedicado, com reuniões periódicas de acompanhamento</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.15)',
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
                      <span>Migração assistida, com redirecionamentos 301 e preservação dos IDs de produto</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.15)',
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
                      <span>Isenção da tarifa por venda usando o Nuvem Pago</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.15)',
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
                      <span>Nuvem Envio com mais de 30 transportadoras</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.15)',
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
                      <span>APIs abertas para ERP, CRM, WMS e marketplaces</span>
                    </li>
                  </ul>
                  <p style={{ margin: '18px 0 0', fontSize: '13px', color: 'rgba(255,255,255,.6)' }}>
                    Fonte:{' '}
                    <a href="https://www.nuvemshop.com.br/next" style={{ textDecoration: 'underline' }}>
                      Nuvemshop Next
                    </a>
                    . Condições de atendimento conforme o plano contratado.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* IMPLANTAÇÃO */}
          <section id="implantacao" style={{ background: '#EEF0F7' }}>
            <div
              style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)' }}
            >
              <div
                data-reveal="1"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '24px',
                }}
              >
                <div style={{ maxWidth: '720px' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#2C3357',
                    }}
                  >
                    Implantação Tec3
                  </div>
                  <h2
                    style={{
                      margin: '14px 0 0',
                      fontSize: 'clamp(34px,4.4vw,60px)',
                      lineHeight: '1.04',
                      letterSpacing: '-.02em',
                      fontWeight: '700',
                    }}
                  >
                    Do diagnóstico ao go-live, um caminho só.
                  </h2>
                </div>
                <p style={{ margin: '0', maxWidth: '380px', fontSize: '17px', lineHeight: '1.6', color: '#4A5072' }}>
                  Cada etapa tem responsável, prazo combinado no diagnóstico e acompanhamento da Tec3.
                </p>
              </div>
              <div style={{ position: 'relative', marginTop: '56px' }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '23px',
                    top: '8px',
                    bottom: '8px',
                    width: '2px',
                    background: 'rgba(44,51,87,.18)',
                  }}
                />
                <div
                  aria-hidden="true"
                  data-reveal="1"
                  style={{
                    position: 'absolute',
                    left: '23px',
                    top: '8px',
                    bottom: '8px',
                    width: '2px',
                    background: '#2C3357',
                    transformOrigin: 'top',
                    animation: 'nuvemshop-nv-grow 2.4s .2s cubic-bezier(.4,0,.2,1) both',
                  }}
                />
                <ol style={{ listStyle: 'none', margin: '0', padding: '0', position: 'relative' }}>
                  {vals.steps.map((s, i) => (
                    <li
                      key={i}
                      data-reveal="1"
                      data-delay={s.delay}
                      style={{
                        position: 'relative',
                        display: 'grid',
                        gridTemplateColumns: '48px minmax(0,1fr)',
                        gap: '20px',
                        padding: '0 0 28px',
                      }}
                    >
                      <span
                        style={{
                          position: 'relative',
                          zIndex: '1',
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: s.bg,
                          color: s.fg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          border: '2px solid #2C3357',
                        }}
                      >
                        {s.n}
                      </span>
                      <div
                        className="nv-pad"
                        style={{ background: '#FFFFFF', borderRadius: '22px', padding: '22px 26px' }}
                      >
                        <h3 style={{ margin: '0', fontSize: '21px', fontWeight: '700' }}>{s.t}</h3>
                        <p style={{ margin: '8px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#4A5072' }}>
                          {s.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
          {/* BENEFÍCIOS */}
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)' }}
          >
            <div
              data-reveal="1"
              style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: '#2C3357',
              }}
            >
              Só para clientes Tec3
            </div>
            <h2
              data-reveal="1"
              style={{
                margin: '14px 0 48px',
                fontSize: 'clamp(34px,4.4vw,60px)',
                lineHeight: '1.04',
                letterSpacing: '-.02em',
                fontWeight: '700',
                maxWidth: '760px',
              }}
            >
              Benefícios de entrar pela porta da parceria.
            </h2>
            <div className="nv-4">
              {vals.perks.map((p, i) => (
                <div
                  key={i}
                  data-reveal="1"
                  data-delay={p.delay}
                  className="nv-card nv-pad"
                  style={{
                    background: p.bg,
                    color: p.fg,
                    borderRadius: '28px',
                    padding: '32px',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(34px,3.4vw,48px)',
                      fontWeight: '700',
                      letterSpacing: '-.02em',
                      lineHeight: '1',
                    }}
                  >
                    {p.big}
                  </div>
                  <div style={{ fontSize: '16px', lineHeight: '1.5' }}>{p.d}</div>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ */}
          <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(44,51,87,.08)' }}>
            <div style={{ maxWidth: '880px', margin: '0 auto', padding: 'clamp(72px,9vw,120px) clamp(20px,4vw,48px)' }}>
              <h2
                data-reveal="1"
                style={{
                  margin: '0 0 32px',
                  fontSize: 'clamp(32px,4vw,52px)',
                  lineHeight: '1.05',
                  letterSpacing: '-.02em',
                  fontWeight: '700',
                }}
              >
                Perguntas frequentes
              </h2>
              {vals.faq.map((q, i) => (
                <details key={i} style={{ borderTop: '1px solid rgba(44,51,87,.14)' }}>
                  <summary
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '22px 0',
                      minHeight: '44px',
                      fontSize: '19px',
                      fontWeight: '600',
                    }}
                  >
                    {q.q}
                    <span
                      className="nv-plus"
                      aria-hidden="true"
                      style={{
                        flex: '0 0 auto',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#EEF0F7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        color: '#2C3357',
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    style={{
                      margin: '0 0 22px',
                      fontSize: '16px',
                      lineHeight: '1.65',
                      color: '#4A5072',
                      maxWidth: '720px',
                    }}
                  >
                    {q.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
          {/* CTA */}
          <section style={{ padding: '0 clamp(12px,2vw,24px) clamp(12px,2vw,24px)' }}>
            <div
              data-reveal="1"
              style={{
                background: '#EEF0F7',
                borderRadius: '40px',
                padding: 'clamp(48px,7vw,96px) clamp(24px,5vw,72px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ maxWidth: '720px' }}>
                <img
                  src="/assets/logo-nuvemshop.png"
                  alt="Nuvemshop"
                  style={{ height: '56px', width: 'auto', display: 'block', marginBottom: '24px' }}
                />
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(36px,5vw,72px)',
                    lineHeight: '1',
                    letterSpacing: '-.02em',
                    fontWeight: '700',
                  }}
                >
                  Vamos tirar sua loja do papel na Nuvemshop?
                </h2>
                <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A5072' }}>
                  Conta o momento da sua marca. A gente indica o melhor caminho, sem compromisso.
                </p>
              </div>
              <div className="nv-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  className="nv-btn"
                  href={vals.wa}
                  style={{
                    background: '#2C3357',
                    color: '#FFFFFF',
                    borderRadius: '100px',
                    padding: '19px 30px',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'inline-flex',
                  }}
                >
                  Falar com a Tec3
                </a>{' '}
                <Link
                  href="/"
                  style={{
                    border: '1.5px solid #2C3357',
                    borderRadius: '100px',
                    padding: '18px 26px',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'inline-flex',
                  }}
                >
                  Voltar ao site
                </Link>
              </div>
            </div>
            <p
              style={{
                maxWidth: '1280px',
                margin: '24px auto 0',
                padding: '0 clamp(8px,2vw,24px)',
                fontSize: '13px',
                color: '#6A6F8C',
              }}
            >
              Nuvemshop e o logo Nuvemshop são marcas da Nuvemshop. Condições de benefícios sujeitas às regras vigentes
              do programa de parceiros.
            </p>
          </section>
        </main>
      </div>
      <PageEffects revealDistance={26} revealDuration={800} />
    </>
  );
}
