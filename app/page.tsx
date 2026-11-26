import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import LiveViewers from '@/components/site/LiveViewers';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/index';
import { PORTAL_ENABLED } from '@/lib/portal';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Tec3 Commerce · Site' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="index">
        {/* NAV */}
        <SiteHeader current="inicio" wa={vals.wa} />
        <main id="topo">
          {/* HERO */}
          <section className={styles.heroSection}>
            <div className={styles.heroBox}>
              <div className={styles.hero}>
                <div>
                  <div className={styles.heroEyebrow}>
                    <span className={styles.heroDot} /> Agência de e-commerce · desde 2019
                  </div>
                  <h1 className={styles.heroTitle}>
                    Loja no ar é o começo. <span className={styles.heroLabel}>Vender</span> é o projeto.
                  </h1>
                  <div className={styles.heroRow}>
                    <span>Sua marca vendendo</span>{' '}
                    <span className={styles.heroLabel2}>
                      <span className={styles.heroLabel3}>
                        {vals.words.map((w, i) => (
                          <span key={i} className={styles.heroLabel4}>
                            {w}
                          </span>
                        ))}
                      </span>
                    </span>
                  </div>
                  <p className={styles.heroText}>
                    Loja, ERP, marketplaces e pagamento conversando entre si. A Tec3 implanta, integra e opera, com a
                    Bárbara cuidando de cada etapa.
                  </p>
                  <div className={`${styles.ctas} ${styles.heroRow2}`}>
                    <a className={`${styles.btn} ${styles.dark} ${styles.heroButton}`} href={vals.wa}>
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
                    <a className={`${styles.btn} ${styles.ghost} ${styles.heroButton2}`} href="#servicos">
                      Ver como funciona
                    </a>
                  </div>
                </div>
                {/* console de pedidos */}
                <div className={styles.heroBox2}>
                  <div className={`${styles.float} ${styles.heroRow3}`} aria-hidden="true">
                    <img className={styles.heroImage} src="/assets/icone-tec3.png" alt="" />
                  </div>
                  <div className={styles.heroBox3}>
                    <div className={styles.heroRow4}>
                      <span className={styles.heroLabel5}>
                        <span className={styles.heroDot2} />
                        pedidos.ao_vivo
                      </span>{' '}
                      <span className={styles.heroLabel6}>estoque sincronizado</span>
                    </div>
                    <div className={`${styles.console} ${styles.heroBox4}`}>
                      <div className={styles.heroStack}>
                        {vals.orders.map((o, i) => (
                          <div key={i} className={styles.heroGrid}>
                            <div className={styles.heroRow5} data-tone={o.tone}>
                              {o.tag}
                            </div>
                            <div className={styles.heroBox5}>
                              <div className={styles.heroBox6}>Novo pedido · {o.ch}</div>
                              <div className={styles.heroBox7}>{o.item}</div>
                            </div>
                            <div className={styles.heroBox8}>
                              <div className={styles.heroBox9}>{o.v}</div>
                              <div className={styles.heroBox10}>{o.t}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.heroRow6}>
                      {vals.chips.map((c, i) => (
                        <span key={i} className={styles.heroPill}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* números */}
              <div className={`${styles.stats} ${styles.heroBox11}`}>
                {vals.stats.map((s, i) => (
                  <div key={i} className={styles.heroBox12} data-reveal="1">
                    <div className={styles.heroBox13}>{s.n}</div>
                    <div className={styles.heroBox14}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* CLIENTES */}
          <section className={styles.clientesSection} aria-label="Clientes">
            <div className={styles.clientesEyebrow}>Marcas que vendem com a Tec3</div>
            <div className={styles.clientesBox}>
              <div className={styles.clientesRow}>
                {vals.clients.map((c, i) => (
                  <img key={i} className={styles.clientesImage} src={c.src} alt={c.name} />
                ))}
              </div>
            </div>
          </section>
          {/* TEC3 CONNECT EM DESTAQUE */}
          <section className={styles.tec3ConnectSection} aria-label="TEC3 Connect">
            <Link
              className={`${styles.tile} ${styles.pad} ${styles.tec3ConnectButton}`}
              data-reveal="1"
              href="/connect"
            >
              <div className={styles.tec3ConnectBox}>
                <span className={styles.tec3ConnectEyebrow}>
                  <span className={styles.tec3ConnectDot} />
                  Novo · TEC3 Connect
                </span>
                <h2 className={styles.tec3ConnectTitle}>
                  Sua operação 360°. <span className={styles.tec3ConnectLabel}>Um time só.</span>
                </h2>
                <p className={styles.tec3ConnectText}>
                  Loja, ERP, marketplaces, tráfego, pagamentos e conteúdo unidos em um plano, com um responsável.
                </p>
              </div>
              <span className={styles.tec3ConnectDot2} aria-hidden="true">
                →
              </span>
            </Link>
          </section>
          {/* SERVIÇOS BENTO */}
          <section className={styles.servicosSection} id="servicos">
            <div className={styles.servicosRow} data-reveal="1">
              <div>
                <div className={styles.servicosEyebrow}>01 · Serviços</div>
                <h2 className={styles.servicosTitle}>Tudo o que sua operação precisa. Num só responsável.</h2>
              </div>
              <p className={styles.servicosText}>
                Da escolha da plataforma à rotina dos marketplaces. Você fala com uma pessoa só, do começo ao fim.
              </p>
            </div>
            <div className={styles.bento}>
              {/* implantação */}
              <article
                className={`${styles.tile} ${styles.span2} ${styles.pad} ${styles.servicosCard}`}
                data-reveal="1"
              >
                <div className={styles.servicosEyebrow2}>Implantação de e-commerce</div>
                <h3 className={styles.servicosTitle2}>Sua loja no ar, pronta para vender no celular.</h3>
                <div className={styles.servicosRow2}>
                  {vals.platforms.map((p, i) => (
                    <span key={i} className={styles.servicosPill}>
                      {p}
                    </span>
                  ))}
                </div>
                <div className={`${styles.mock} ${styles.servicosBox}`} aria-hidden="true">
                  <div className={styles.servicosRow3}>
                    <span className={styles.servicosDot} />
                    <span className={styles.servicosDot} />
                    <span className={styles.servicosDot} />
                  </div>
                  <div className={styles.servicosGrid}>
                    <div className={styles.servicosBox2} />
                    <div className={styles.servicosBox3} />
                    <div className={styles.servicosBox2} />
                  </div>
                  <div className={styles.servicosRow4}>
                    <div className={styles.servicosBox4} />
                    <div className={styles.servicosBox5}>Comprar</div>
                  </div>
                </div>
              </article>
              {/* marketplaces */}
              <article
                className={`${styles.tile} ${styles.pad} ${styles.servicosCard2}`}
                id="marketplaces"
                data-reveal="1"
                data-delay="80"
              >
                <div className={styles.servicosEyebrow2}>Gestão de marketplaces</div>
                <h3 className={styles.servicosTitle3}>Onde o cliente já está comprando.</h3>
                <div className={styles.servicosStack}>
                  {vals.markets.map((m, i) => (
                    <div key={i} className={styles.servicosRow5}>
                      <span className={styles.servicosLabel}>{m.n}</span>
                      <span className={styles.servicosLabel2}>{m.d}</span>
                    </div>
                  ))}
                </div>
              </article>
              {/* integrações */}
              <article
                className={`${styles.tile} ${styles.span2} ${styles.pad} ${styles.servicosCard3}`}
                data-reveal="1"
              >
                <div className={styles.servicosRow6}>
                  <div>
                    <div className={styles.servicosEyebrow}>Integração ativa</div>
                    <h3 className={styles.servicosTitle4}>Vendeu em um canal, atualiza em todos.</h3>
                  </div>
                  <p className={styles.servicosText2}>
                    Estoque, preço, pedidos e notas sincronizados com o Olist Tiny, o único ERP que a gente indica.
                  </p>
                </div>
                <div className={styles.servicosRow7} aria-hidden="true">
                  <div className={`${styles.flowline} ${styles.servicosBox6}`} />
                  <div className={`${styles.flowline} ${styles.servicosBox7}`}>
                    <span className={styles.servicosDot2} /> <span className={styles.servicosDot3} />
                  </div>
                  {vals.flow.map((f, i) => (
                    <div key={i} className={styles.servicosStack2}>
                      <div className={`${styles.node} ${styles.servicosRow8}`} data-tone={f.tone}>
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
                      <span className={`${styles.nodelabel} ${styles.servicosLabel3}`}>{f.n}</span>
                    </div>
                  ))}
                </div>
              </article>
              {/* pagamentos */}
              <article
                className={`${styles.tile} ${styles.pad} ${styles.servicosCard4}`}
                data-reveal="1"
                data-delay="80"
              >
                <div className={styles.servicosEyebrow3}>Tec3 + Stone</div>
                <h3 className={styles.servicosTitle5}>Taxas exclusivas para clientes Tec3.</h3>
                <p className={styles.servicosText3}>
                  Parceira oficial Stone há mais de 3 anos. Condição ainda melhor acima de R$ 100 mil por mês.
                </p>
                <div className={styles.servicosRow9}>
                  <span className={styles.servicosPill2}>Checkout</span>
                  <span className={styles.servicosPill2}>Link</span>
                  <span className={styles.servicosPill2}>Pix</span>
                </div>
              </article>
              {/* sustentação */}
              <article className={`${styles.tile} ${styles.pad} ${styles.servicosCard4}`} data-reveal="1">
                <div className={styles.servicosEyebrow}>Sustentação</div>
                <h3 className={styles.servicosTitle5}>Depois do go-live, a gente continua.</h3>
                <p className={styles.servicosText3}>
                  Melhorias mês a mês, preparação para datas como a Black Friday e atendimento direto com a fundadora.
                </p>
                <div className={styles.servicosRow10}>
                  <div className={styles.servicosBox8} aria-hidden="true" />
                  <span className={styles.servicosLabel4}>Planos Iniciante e Avançado</span>
                </div>
              </article>
              {/* incubadora */}
              <article
                className={`${styles.tile} ${styles.span2} ${styles.pad} ${styles.servicosCard5}`}
                data-reveal="1"
                data-delay="80"
              >
                <div className={styles.servicosBox9}>
                  <div className={styles.servicosEyebrow}>Incubadora Tec3</div>
                  <h3 className={styles.servicosTitle6}>Começando do zero? A gente começa junto.</h3>
                  <p className={styles.servicosText4}>
                    Um caminho guiado para o primeiro e-commerce, da escolha da plataforma à primeira venda.
                  </p>
                </div>
                <a className={`${styles.btn} ${styles.dark} ${styles.servicosButton}`} href={vals.wa}>
                  Quero entrar na Incubadora
                </a>
              </article>
            </div>
          </section>
          {/* NUVEMSHOP */}
          <section className={styles.nuvemshopSection} id="nuvemshop">
            <div className={styles.nuvemshopRow} data-reveal="1">
              <div className={styles.nuvemshopRow2}>
                <img className={styles.nuvemshopImage} src="/assets/logo-nuvemshop.png" alt="Nuvemshop" />{' '}
                <span className={styles.nuvemshopLabel} />{' '}
                <span className={styles.nuvemshopEyebrow}>02 · Agência parceira Nuvemshop</span>
              </div>
              <Link className={`${styles.link} ${styles.nuvemshopLink}`} href="/nuvemshop">
                Conhecer a parceria e o layout Ipanema →
              </Link>
            </div>
            <div className={styles.two}>
              <div className={`${styles.tile} ${styles.pad} ${styles.nuvemshopStack}`} data-reveal="1">
                <div className={styles.nuvemshopEyebrow2}>Loja nova na Nuvemshop</div>
                <div className={styles.nuvemshopBox}>25% OFF</div>
                <p className={styles.nuvemshopText}>
                  no 1º mês de qualquer plano pago, criando a loja pelo link da Tec3.
                </p>
                <a className={`${styles.btn} ${styles.nuvemshopButton}`} href={vals.wa}>
                  Criar minha loja
                </a>
              </div>
              <div
                className={`${styles.tile} ${styles.pad} ${styles.nuvemshopStack2}`}
                data-reveal="1"
                data-delay="100"
              >
                <div className={styles.nuvemshopEyebrow3}>Migração patrocinada</div>
                <h3 className={styles.nuvemshopTitle}>A Nuvemshop paga a sua migração.</h3>
                <p className={styles.nuvemshopText2}>
                  Fatura mais de R$ 50 mil? A loja nova sai por conta dela, e a Tec3 leva produtos, clientes, pedidos e
                  SEO sem você parar de vender.
                </p>
                <a className={`${styles.btn} ${styles.nuvemshopButton2}`} href={vals.wa}>
                  Quero minha migração paga
                </a>
              </div>
            </div>
          </section>
          {/* TEC·A */}
          <section className={styles.tecaSection} id="teca" aria-label="TEC·A">
            <div className={styles.tecaBox}>
              <div className={styles.tecaBox2}>
                <div className={styles.teca}>
                  <div data-reveal="1">
                    <div className={styles.tecaEyebrow}>03 · Uma empresa do grupo Tec3</div>
                    <div className={styles.tecaBox3}>
                      TEC<span className={styles.tecaLabel}>·</span>A
                    </div>
                    <p className={styles.tecaText}>{'Social, lives & brand para marcas que querem ser lembradas.'}</p>
                    <p className={styles.tecaText2}>
                      A TEC·A cria a presença da sua marca fora da loja: conteúdo, lives que vendem, eventos e
                      identidade visual. Tudo sob medida, com o mesmo cuidado de quem já lançou marcas do site ao
                      coquetel de inauguração.
                    </p>
                    <div className={styles.tecaRow}>
                      <Link className={`${styles.btn} ${styles.tecaButton}`} href="/teca">
                        Conhecer a TEC·A
                      </Link>{' '}
                      <a className={`${styles.link} ${styles.tecaLink}`} href="https://www.instagram.com/atecataon/">
                        @atecataon
                      </a>
                    </div>
                  </div>
                  {/* live mock */}
                  <div className={styles.tecaRow2} data-reveal="1" data-delay="120">
                    <div className={styles.tecaBox4}>
                      <div className={styles.tecaBox5}>
                        <video
                          className={styles.tecaVideo}
                          src="/assets/live.mp4"
                          poster="/assets/live.jpg"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          aria-label="Live de cozinha ao vivo"
                        />
                        <div className={styles.tecaBox6} aria-hidden="true" />
                        <div className={styles.tecaRow3}>
                          <span className={styles.tecaLabel2}>
                            <span className={styles.tecaDot} />
                            AO VIVO
                          </span>{' '}
                          <span className={styles.tecaLabel3}>
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
                        <div className={styles.tecaBox7}>
                          <div className={styles.tecaStack}>
                            {vals.chat.map((m, i) => (
                              <div key={i} className={styles.tecaBox8}>
                                <b className={styles.tecaStrong}>{m.u}</b> {m.t}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={styles.tecaRow4}>
                          <img className={styles.tecaImage} src="/assets/panela.jpg" alt="Panela em aço inox" />
                          <div className={styles.tecaBox9}>
                            <div className={styles.tecaBox10}>Panela em aço inox</div>
                            <div className={styles.tecaBox11}>[preço]</div>
                          </div>
                          <span className={styles.tecaPill}>Comprar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.teca4} ${styles.tecaBox12}`}>
                  {vals.teca.map((t, i) => (
                    <div key={i} className={styles.tecaBox13} data-reveal="1">
                      <div className={styles.tecaBox14}>{t.n}</div>
                      <h3 className={styles.tecaTitle}>{t.t}</h3>
                      <p className={styles.tecaText3}>{t.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* ÁREA DO CLIENTE + CTA FINAL */}
          <section className={styles.areaSection} id="area">
            <div className={styles.areaBox} data-reveal="1">
              <img className={styles.areaImage} aria-hidden="true" src="/assets/icone-tec3.png" alt="" />
              <div className={styles.areaBox2}>
                <h2 className={styles.areaTitle}>Vamos colocar sua marca para vender?</h2>
                <p className={styles.areaText}>Me chama no WhatsApp. Quem responde sou eu, a Bárbara.</p>
                <div className={`${styles.ctas} ${styles.areaRow}`}>
                  <a className={`${styles.btn} ${styles.areaButton}`} href={vals.wa}>
                    Chamar no WhatsApp
                  </a>
                  {PORTAL_ENABLED && (
                    <>
                      {' '}
                      <Link className={`${styles.btn} ${styles.ghost} ${styles.areaButton2}`} href="/login">
                        Já sou cliente · Área do cliente
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className={styles.footerFooter}>
          <div className={styles.foot}>
            <div>
              <img className={styles.footerImage} src="/assets/logo-tec3.png" alt="Tec3 Commerce" />
              <p className={styles.footerText}>E-commerce e marketplaces de ponta a ponta. São Paulo, Brasil.</p>
            </div>
            <div className={styles.footerStack}>
              <span className={styles.footerEyebrow}>Tec3</span>
              <a className={`${styles.link} ${styles.footerLink}`} href="#servicos">
                Serviços
              </a>
              <a className={`${styles.link} ${styles.footerLink}`} href="#nuvemshop">
                Nuvemshop
              </a>
              {PORTAL_ENABLED && (
                <Link className={`${styles.link} ${styles.footerLink}`} href="/login">
                  Área do cliente
                </Link>
              )}
            </div>
            <div className={styles.footerStack}>
              <span className={styles.footerEyebrow}>TEC·A</span>
              <a className={`${styles.link} ${styles.footerLink}`} href="#teca">
                {'Social & lives'}
              </a>
              <a className={`${styles.link} ${styles.footerLink}`} href="https://www.instagram.com/atecataon/">
                @atecataon
              </a>
            </div>
            <div className={styles.footerStack}>
              <span className={styles.footerEyebrow}>Contato</span>
              <a className={`${styles.link} ${styles.footerLink}`} href={vals.wa}>
                WhatsApp
              </a>
              <a className={`${styles.link} ${styles.footerLink}`} href="https://www.instagram.com/tec3commerce_/">
                @tec3commerce_
              </a>
            </div>
          </div>
          <div className={styles.footerRow}>
            <span>Parceira Olist OURO · Parceira oficial Stone · Certificada UAPPI</span>{' '}
            <a href="#topo">Voltar ao topo ↑</a>
          </div>
        </footer>
      </div>
      <PageEffects revealDistance={28} revealDuration={800} videos />
    </>
  );
}
