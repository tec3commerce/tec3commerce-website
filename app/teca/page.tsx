import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import TecaHeader from '@/components/teca/TecaHeader';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/teca';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Teca · Marcas que merecem palco' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:wght@300;400&family=Montserrat:wght@400..700&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="teca">
        <SiteHeader current="teca" wa={vals.wa} />
        <TecaHeader wa={vals.wa} />
        {/* MENU MOBILE */}
        <main id="topo">
          {/* HERO */}
          <section className={styles.heroSection}>
            <div className={styles.heroEyebrow}>Brand · Eventos · Lives</div>
            <h1 className={styles.heroTitle}>
              Marcas que merecem palco
              <span className={styles.heroDot} />
            </h1>
            <div className={`${styles.hero} ${styles.heroBox}`}>
              <div className={styles.heroBox2}>
                <p className={styles.heroText}>
                  A Teca cria marcas, eventos e transmissões ao vivo sob medida, para grandes marcas e para o mercado de
                  luxo.
                </p>
              </div>
              <div className={styles.heroRow}>
                <span className={styles.heroLabel}>
                  Uma empresa do grupo Tec3
                  <br />
                  São Paulo
                </span>{' '}
                <a className={`${styles.u} ${styles.link}`} href="https://www.instagram.com/atecataon/">
                  @atecataon
                </a>
              </div>
            </div>
          </section>
          {/* faixa de palavras */}
          <div className={styles.page3} aria-hidden="true">
            <div className={`${styles.band} ${styles.pageRow}`}>
              {vals.words.map((w, i) => (
                <span key={i} className={styles.pageLabel}>
                  {w}
                  <span className={styles.pageDot} />
                </span>
              ))}
            </div>
          </div>
          {/* EVENTOS DE LANÇAMENTO */}
          <section className={styles.section} aria-label="Eventos de lançamento de marca">
            <div className={styles.row} data-reveal="1">
              <div>
                <div className={styles.eyebrow}>Eventos · Lançamento de marca</div>
                <h2 className={styles.title}>Carol Vaz Home</h2>
              </div>
              <p className={styles.text}>
                Recepção, mesa e cada detalhe pensados para o dia em que a marca chegou ao público.
              </p>
            </div>
            <p className={`${styles.hint} ${styles.text2}`}>Deslize para o lado →</p>
            <div className={`${styles.c3} ${styles.reel} ${styles.eventosLancamentoBox}`}>
              {vals.videos.map((v, i) => (
                <figure key={i} className={styles.eventosLancamentoBox2} data-reveal="1" data-delay={v.delay}>
                  <video
                    className={styles.eventosLancamentoVideo}
                    src={v.src}
                    poster={v.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={v.label}
                  />
                  <figcaption className={styles.eventosLancamentoBox3}>{v.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          {/* GRAVAÇÃO DE CONTEÚDO */}
          <section className={styles.section} aria-label="Gravação de conteúdo">
            <div className={styles.row} data-reveal="1">
              <div>
                <div className={styles.eyebrow}>Gravação de conteúdo · Redes sociais</div>
                <h2 className={styles.title}>PurisVitta</h2>
              </div>
              <p className={styles.text}>
                Roteiro, direção e captação no lugar certo: o produto em uso, nas mãos de quem conhece a marca.
              </p>
            </div>
            <p className={`${styles.hint} ${styles.text2}`}>Deslize para o lado →</p>
            <div className={`${styles.c6} ${styles.reel} ${styles.small} ${styles.gravacaoConteudoBox}`}>
              {vals.clips.map((v, i) => (
                <video
                  key={i}
                  className={styles.gravacaoConteudoVideo}
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
                />
              ))}
            </div>
          </section>
          {/* MANIFESTO */}
          <section className={styles.manifestoSection}>
            <div className={`${styles.c2} ${styles.manifestoBox}`}>
              <h2 className={styles.manifestoTitle} data-reveal="1">
                Luz e sombra.
              </h2>
              <div data-reveal="1" data-delay="120">
                <p className={styles.manifestoText}>
                  Toda marca tem um momento de palco: o lançamento, o evento, a primeira transmissão. A Teca existe para
                  que esse momento seja lembrado.
                </p>
                <p className={styles.manifestoText2}>
                  Cuidamos do conceito à execução, com poucos projetos por vez e atenção a cada detalhe. Porque o
                  detalhe é a marca.
                </p>
              </div>
            </div>
          </section>
          {/* TRÊS FRENTES */}
          <section className={styles.section2} id="frentes">
            <div className={styles.box}>
              <div className={styles.frentesRow} data-reveal="1">
                <h2 className={styles.frentesTitle}>
                  Três frentes.
                  <br />
                  <span className={styles.label}>Uma só presença.</span>
                </h2>
                <span className={styles.frentesEyebrow}>O que a Teca faz</span>
              </div>
              <div className={`${styles.c3} ${styles.frentesBox}`}>
                {vals.fronts.map((f, i) => (
                  <article key={i} className={`${styles.front} ${styles.frentesCard}`} data-reveal="1">
                    <span className={styles.frentesLabel}>{f.n}</span>
                    <h3 className={styles.frentesTitle2}>{f.t}</h3>
                    <p className={styles.frentesText}>{f.d}</p>
                    <ul className={styles.frentesList}>
                      {f.items.map((it, i2) => (
                        <li key={i2} className={styles.frentesItem}>
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
          <section className={styles.box}>
            <div className={styles.processoEyebrow} data-reveal="1">
              Como trabalhamos
            </div>
            <h2 className={styles.processoTitle} data-reveal="1">
              Do primeiro encontro <span className={styles.label}>ao ao vivo.</span>
            </h2>
            <ol className={`${styles.c4} ${styles.processoList}`}>
              {vals.steps.map((s, i) => (
                <li key={i} className={styles.processoItem} data-reveal="1">
                  <div className={styles.processoRow}>
                    <span className={styles.processoDot} />
                    <span className={styles.eyebrow}>{s.n}</span>
                  </div>
                  <h3 className={styles.processoTitle2}>{s.t}</h3>
                  <p className={styles.processoText}>{s.d}</p>
                </li>
              ))}
            </ol>
          </section>
          {/* TRABALHOS */}
          <section className={styles.trabalhosSection} id="trabalhos">
            <div className={styles.trabalhosRow} data-reveal="1">
              <h2 className={styles.trabalhosTitle}>Trabalhos</h2>
              <a className={`${styles.u} ${styles.link}`} href="https://www.instagram.com/atecataon/">
                Mais no Instagram
              </a>
            </div>
            <div className={styles.c2}>
              {vals.cases.map((c, i) => (
                <article key={i} className={styles.trabalhosCard} data-reveal="1">
                  {c.hasImg && (
                    <>
                      <img className={styles.trabalhosImage} src={c.img} alt={c.t} />
                    </>
                  )}
                  {c.noImg && (
                    <>
                      <div className={styles.trabalhosRow2}>
                        <span className={styles.eyebrow}>{c.ph}</span>
                      </div>
                    </>
                  )}
                  <div className={styles.trabalhosRow3}>
                    <div>
                      <div className={styles.trabalhosEyebrow}>{c.k}</div>
                      <h3 className={styles.trabalhosTitle2}>{c.t}</h3>
                    </div>
                    <img className={styles.trabalhosImage2} src="/assets/teca-icone.svg" alt="" />
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* CONTATO */}
          <section className={styles.section2} id="contato">
            <div className={styles.contatoBox}>
              <p className={styles.contatoText} data-reveal="1">
                Contato
              </p>
              <h2 className={styles.contatoTitle} data-reveal="1">
                Receber também
                <br />é marca
                <span className={styles.contatoDot} />
              </h2>
              <div className={styles.contatoRow} data-reveal="1">
                <a className={`${styles.btnL} ${styles.contatoButton}`} href={vals.wa}>
                  Projetos sob consulta
                </a>{' '}
                <a className={`${styles.u} ${styles.contatoLink}`} href="https://www.instagram.com/atecataon/">
                  @atecataon
                </a>
              </div>
              <div className={styles.contatoRow2}>
                <img className={styles.image} src="/assets/teca-logo-marfim.svg" alt="TEC·A" />{' '}
                <Link className={styles.u} href="/">
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
