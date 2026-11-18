import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import TecaHeader from '@/components/teca/TecaHeader';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/teca';
import './page.css';

export const metadata: Metadata = { title: 'Teca · Marcas que merecem palco' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:wght@300;400&family=Montserrat:wght@400..700&display=swap"
        precedence="default"
      />
      <div
        className="pg-teca"
        style={{
          fontFamily: "Poppins,'Helvetica Neue',Arial,sans-serif",
          fontWeight: '300',
          background: '#F3EDE2',
          color: '#17110F',
          minHeight: '100vh',
        }}
      >
        <SiteHeader current="teca" wa={vals.wa} />
        <TecaHeader wa={vals.wa} />
        <main id="topo">
          {/* HERO */}
          <section
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: 'clamp(72px,10vw,150px) clamp(20px,4vw,64px) clamp(56px,7vw,96px)',
            }}
          >
            <div
              style={{
                animation: 'teca-tc-in .9s cubic-bezier(.2,.7,.2,1) both',
                fontSize: '13px',
                fontWeight: '400',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
              }}
            >
              Brand · Eventos · Lives
            </div>
            <h1
              style={{
                animation: 'teca-tc-in 1s .1s cubic-bezier(.2,.7,.2,1) both',
                margin: '32px 0 0',
                fontFamily: 'Lora,Georgia,serif',
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: 'clamp(46px,9.6vw,152px)',
                lineHeight: '1',
                letterSpacing: '-.01em',
                maxWidth: '1100px',
              }}
            >
              Marcas que merecem palco
              <span
                style={{
                  display: 'inline-block',
                  width: '.16em',
                  height: '.16em',
                  borderRadius: '50%',
                  background: '#B3123F',
                  marginLeft: '.04em',
                  animation: 'teca-tc-dot 2.4s ease-in-out infinite',
                }}
              />
            </h1>
            <div className="tc-hero" style={{ marginTop: '72px' }}>
              <div
                style={{
                  animation: 'teca-tc-in 1s .25s cubic-bezier(.2,.7,.2,1) both',
                  borderTop: '1px solid #17110F',
                  paddingTop: '24px',
                  transformOrigin: 'left',
                }}
              >
                <p style={{ margin: '0', fontSize: '20px', lineHeight: '1.65', maxWidth: '560px' }}>
                  A Teca cria marcas, eventos e transmissões ao vivo sob medida, para grandes marcas e para o mercado de
                  luxo.
                </p>
              </div>
              <div
                style={{
                  animation: 'teca-tc-in 1s .35s cubic-bezier(.2,.7,.2,1) both',
                  borderTop: '1px solid #17110F',
                  paddingTop: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '16px',
                }}
              >
                <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6E6258' }}>
                  Uma empresa do grupo Tec3
                  <br />
                  São Paulo
                </span>{' '}
                <a className="tc-u" href="https://www.instagram.com/atecataon/" style={{ fontSize: '14px' }}>
                  @atecataon
                </a>
              </div>
            </div>
          </section>
          {/* faixa de palavras */}
          <div
            aria-hidden="true"
            style={{ background: '#17110F', color: '#F3EDE2', overflow: 'hidden', padding: '26px 0' }}
          >
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                gap: '64px',
                alignItems: 'center',
                animation: 'teca-tc-left 40s linear infinite',
                fontFamily: 'Lora,Georgia,serif',
                fontStyle: 'italic',
                fontSize: '40px',
                whiteSpace: 'nowrap',
              }}
              className="tc-band"
            >
              {vals.words.map((w, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '64px' }}>
                  {w}
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D4204F' }} />
                </span>
              ))}
            </div>
          </div>
          {/* EVENTOS DE LANÇAMENTO */}
          <section
            aria-label="Eventos de lançamento de marca"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,64px) 0' }}
          >
            <div
              data-reveal="1"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '16px',
                borderBottom: '1px solid #17110F',
                paddingBottom: '18px',
                marginBottom: '32px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: '400', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  Eventos · Lançamento de marca
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontFamily: 'Lora,Georgia,serif',
                    fontWeight: '400',
                    fontSize: 'clamp(36px,4vw,56px)',
                    lineHeight: '1.1',
                  }}
                >
                  Carol Vaz Home
                </h2>
              </div>
              <p style={{ margin: '0', maxWidth: '420px', fontSize: '16px', lineHeight: '1.7', color: '#6E6258' }}>
                Recepção, mesa e cada detalhe pensados para o dia em que a marca chegou ao público.
              </p>
            </div>
            <p
              className="tc-hint"
              style={{
                display: 'none',
                margin: '0 0 14px',
                fontSize: '12px',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#6E6258',
              }}
            >
              Deslize para o lado →
            </p>
            <div className="tc-3 tc-reel" style={{ gap: '16px' }}>
              {vals.videos.map((v, i) => (
                <figure key={i} data-reveal="1" data-delay={v.delay} style={{ margin: '0' }}>
                  <video
                    src={v.src}
                    poster={v.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={v.label}
                    style={{
                      display: 'block',
                      width: '100%',
                      aspectRatio: '720/1060',
                      objectFit: 'cover',
                      background: '#D8CBB8',
                    }}
                  />
                  <figcaption style={{ paddingTop: '12px', fontSize: '14px', color: '#6E6258' }}>{v.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          {/* GRAVAÇÃO DE CONTEÚDO */}
          <section
            aria-label="Gravação de conteúdo"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,64px) 0' }}
          >
            <div
              data-reveal="1"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '16px',
                borderBottom: '1px solid #17110F',
                paddingBottom: '18px',
                marginBottom: '32px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: '400', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  Gravação de conteúdo · Redes sociais
                </div>
                <h2
                  style={{
                    margin: '14px 0 0',
                    fontFamily: 'Lora,Georgia,serif',
                    fontWeight: '400',
                    fontSize: 'clamp(36px,4vw,56px)',
                    lineHeight: '1.1',
                  }}
                >
                  PurisVitta
                </h2>
              </div>
              <p style={{ margin: '0', maxWidth: '420px', fontSize: '16px', lineHeight: '1.7', color: '#6E6258' }}>
                Roteiro, direção e captação no lugar certo: o produto em uso, nas mãos de quem conhece a marca.
              </p>
            </div>
            <p
              className="tc-hint"
              style={{
                display: 'none',
                margin: '0 0 14px',
                fontSize: '12px',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#6E6258',
              }}
            >
              Deslize para o lado →
            </p>
            <div className="tc-6 tc-reel tc-small" style={{ gap: '12px' }}>
              {vals.clips.map((v, i) => (
                <video
                  key={i}
                  data-reveal="1"
                  data-delay={v.delay}
                  src={v.src}
                  poster={v.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={v.label}
                  style={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '9/16',
                    objectFit: 'cover',
                    background: '#D8CBB8',
                  }}
                />
              ))}
            </div>
          </section>
          {/* MANIFESTO */}
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(80px,10vw,150px) clamp(20px,4vw,64px)' }}
          >
            <div className="tc-2" style={{ alignItems: 'start' }}>
              <h2
                data-reveal="1"
                style={{
                  margin: '0',
                  fontFamily: 'Lora,Georgia,serif',
                  fontWeight: '400',
                  fontSize: 'clamp(44px,5vw,72px)',
                  lineHeight: '1.1',
                }}
              >
                Luz e sombra.
              </h2>
              <div data-reveal="1" data-delay="120">
                <p style={{ margin: '0', fontSize: '20px', lineHeight: '1.65' }}>
                  Toda marca tem um momento de palco: o lançamento, o evento, a primeira transmissão. A Teca existe para
                  que esse momento seja lembrado.
                </p>
                <p style={{ margin: '24px 0 0', fontSize: '18px', lineHeight: '1.7', color: '#6E6258' }}>
                  Cuidamos do conceito à execução, com poucos projetos por vez e atenção a cada detalhe. Porque o
                  detalhe é a marca.
                </p>
              </div>
            </div>
          </section>
          {/* TRÊS FRENTES */}
          <section id="frentes" style={{ background: '#17110F', color: '#F3EDE2' }}>
            <div
              style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(80px,10vw,140px) clamp(20px,4vw,64px)' }}
            >
              <div
                data-reveal="1"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '24px',
                  marginBottom: '64px',
                }}
              >
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'Lora,Georgia,serif',
                    fontWeight: '400',
                    fontSize: 'clamp(40px,4.6vw,64px)',
                    lineHeight: '1.12',
                  }}
                >
                  Três frentes.
                  <br />
                  <span style={{ fontStyle: 'italic' }}>Uma só presença.</span>
                </h2>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '400',
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: '#B9AEA0',
                  }}
                >
                  O que a Teca faz
                </span>
              </div>
              <div className="tc-3" style={{ borderTop: '1px solid #F3EDE2' }}>
                {vals.fronts.map((f, i) => (
                  <article
                    key={i}
                    className="tc-front"
                    data-reveal="1"
                    style={{
                      padding: '40px 32px 48px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      borderBottom: '1px solid rgba(243,237,226,.25)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Lora,Georgia,serif',
                        fontStyle: 'italic',
                        fontSize: '28px',
                        color: '#D4204F',
                      }}
                    >
                      {f.n}
                    </span>
                    <h3
                      style={{
                        margin: '0',
                        fontFamily: 'Lora,Georgia,serif',
                        fontWeight: '400',
                        fontSize: '40px',
                        lineHeight: '1.15',
                      }}
                    >
                      {f.t}
                    </h3>
                    <p
                      style={{ margin: '0', fontSize: '17px', lineHeight: '1.7', color: '#B9AEA0', maxWidth: '340px' }}
                    >
                      {f.d}
                    </p>
                    <ul
                      style={{
                        margin: '8px 0 0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {f.items.map((it, i2) => (
                        <li
                          key={i2}
                          style={{ padding: '12px 0', borderTop: '1px solid rgba(243,237,226,.18)', fontSize: '15px' }}
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* PROCESSO */}
          <section
            style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(80px,10vw,140px) clamp(20px,4vw,64px)' }}
          >
            <div
              data-reveal="1"
              style={{
                fontSize: '13px',
                fontWeight: '400',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              Como trabalhamos
            </div>
            <h2
              data-reveal="1"
              style={{
                margin: '0 0 64px',
                fontFamily: 'Lora,Georgia,serif',
                fontWeight: '400',
                fontSize: 'clamp(40px,4.6vw,64px)',
                lineHeight: '1.12',
                maxWidth: '760px',
              }}
            >
              Do primeiro encontro <span style={{ fontStyle: 'italic' }}>ao ao vivo.</span>
            </h2>
            <ol
              className="tc-4"
              style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #17110F' }}
            >
              {vals.steps.map((s, i) => (
                <li key={i} data-reveal="1" style={{ padding: '32px 28px 0 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#B3123F' }} />
                    <span
                      style={{ fontSize: '13px', fontWeight: '400', letterSpacing: '.2em', textTransform: 'uppercase' }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3
                    style={{
                      margin: '18px 0 0',
                      fontFamily: 'Lora,Georgia,serif',
                      fontWeight: '400',
                      fontSize: '30px',
                    }}
                  >
                    {s.t}
                  </h3>
                  <p style={{ margin: '12px 0 0', fontSize: '16px', lineHeight: '1.7', color: '#6E6258' }}>{s.d}</p>
                </li>
              ))}
            </ol>
          </section>
          {/* TRABALHOS */}
          <section
            id="trabalhos"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(20px,4vw,64px) clamp(80px,10vw,140px)' }}
          >
            <div
              data-reveal="1"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '24px',
                borderTop: '1px solid #17110F',
                paddingTop: '24px',
                marginBottom: '48px',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'Lora,Georgia,serif',
                  fontWeight: '400',
                  fontSize: 'clamp(36px,4vw,56px)',
                }}
              >
                Trabalhos
              </h2>
              <a className="tc-u" href="https://www.instagram.com/atecataon/" style={{ fontSize: '14px' }}>
                Mais no Instagram
              </a>
            </div>
            <div className="tc-2">
              {vals.cases.map((c, i) => (
                <article key={i} data-reveal="1" style={{ display: 'flex', flexDirection: 'column' }}>
                  {c.hasImg && (
                    <>
                      <img
                        src={c.img}
                        alt={c.t}
                        style={{ display: 'block', width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                      />
                    </>
                  )}
                  {c.noImg && (
                    <>
                      <div
                        style={{
                          aspectRatio: '4/5',
                          background: '#D8CBB8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: '400',
                            letterSpacing: '.2em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {c.ph}
                        </span>
                      </div>
                    </>
                  )}
                  <div
                    style={{
                      background: '#17110F',
                      color: '#F3EDE2',
                      padding: '28px 28px 30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: '400',
                          letterSpacing: '.2em',
                          textTransform: 'uppercase',
                          color: '#B9AEA0',
                        }}
                      >
                        {c.k}
                      </div>
                      <h3
                        style={{
                          margin: '10px 0 0',
                          fontFamily: 'Lora,Georgia,serif',
                          fontWeight: '400',
                          fontSize: '30px',
                          lineHeight: '1.2',
                        }}
                      >
                        {c.t}
                      </h3>
                    </div>
                    <img
                      src="/assets/teca-icone.svg"
                      alt=""
                      style={{ height: '32px', width: 'auto', filter: 'invert(1)' }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* CONTATO */}
          <section id="contato" style={{ background: '#17110F', color: '#F3EDE2' }}>
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: 'clamp(96px,12vw,170px) clamp(20px,4vw,64px) 64px',
              }}
            >
              <p
                data-reveal="1"
                style={{
                  margin: '0',
                  fontSize: '13px',
                  fontWeight: '400',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: '#B9AEA0',
                }}
              >
                Contato
              </p>
              <h2
                data-reveal="1"
                style={{
                  margin: '28px 0 0',
                  fontFamily: 'Lora,Georgia,serif',
                  fontStyle: 'italic',
                  fontWeight: '400',
                  fontSize: 'clamp(44px,8vw,128px)',
                  lineHeight: '1.05',
                }}
              >
                Receber também
                <br />é marca
                <span
                  style={{
                    display: 'inline-block',
                    width: '.16em',
                    height: '.16em',
                    borderRadius: '50%',
                    background: '#D4204F',
                    marginLeft: '.04em',
                    animation: 'teca-tc-dot 2.4s ease-in-out infinite',
                  }}
                />
              </h2>
              <div
                data-reveal="1"
                style={{ marginTop: '64px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}
              >
                <a
                  className="tc-btn-l"
                  href={vals.wa}
                  style={{
                    border: '1px solid #F3EDE2',
                    padding: '18px 30px',
                    fontSize: '13px',
                    fontWeight: '400',
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    transition: 'background .3s,color .3s',
                  }}
                >
                  Projetos sob consulta
                </a>{' '}
                <a
                  className="tc-u"
                  href="https://www.instagram.com/atecataon/"
                  style={{ fontSize: '15px', padding: '12px 8px' }}
                >
                  @atecataon
                </a>
              </div>
              <div
                style={{
                  marginTop: '120px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(243,237,226,.3)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  gap: '16px',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#B9AEA0',
                }}
              >
                <img src="/assets/teca-logo-marfim.svg" alt="TEC·A" style={{ height: '32px', width: 'auto' }} />{' '}
                <Link className="tc-u" href="/">
                  Uma empresa do grupo Tec3
                </Link>{' '}
                <span>São Paulo</span>
              </div>
            </div>
          </section>
        </main>
      </div>
      <PageEffects revealDistance={24} revealDuration={900} videos />
    </>
  );
}
