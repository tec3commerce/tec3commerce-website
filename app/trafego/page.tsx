import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/trafego';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Tec3 · Tráfego pago' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="trafego">
        <SiteHeader current="trafego" wa={vals.wa} />
        <main>
          <section className={styles.sectionSection}>
            <div className={styles.hero}>
              <div>
                <div className={styles.sectionBox}>
                  <div className={styles.eyebrow}>Tráfego pago</div>
                </div>
                <h1 className={styles.sectionTitle}>
                  Gente certa, na hora certa, numa loja <span className={styles.sectionLabel}>pronta para vender</span>.
                </h1>
                <p className={styles.sectionText}>
                  Google, Meta e agora os anúncios dentro do ChatGPT. A Tec3 planeja, cria e otimiza suas campanhas
                  olhando para o que importa: venda com margem.
                </p>
                <div className={`${styles.ctas} ${styles.sectionRow}`}>
                  <a className={`${styles.btn} ${styles.sectionButton}`} href={vals.wa}>
                    Quero anunciar com a Tec3
                  </a>{' '}
                  <a className={styles.sectionButton2} href="#canais">
                    Ver os canais
                  </a>
                </div>
              </div>
              <div className={styles.stage} aria-hidden="true">
                <div className={`${styles.a} ${styles.sectionBox2}`}>
                  <div className={styles.sectionRow2}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-4-4" />
                    </svg>
                    panela inox indução
                  </div>
                  <div className={styles.sectionBox3}>Patrocinado</div>
                  <div className={styles.sectionBox4}>suamarca.com.br</div>
                  <div className={styles.sectionBox5}>Panelas em aço inox · Frete grátis</div>
                  <div className={styles.sectionBox6}>Google Ads · Pesquisa e Shopping</div>
                </div>
                <div className={`${styles.b} ${styles.sectionBox7}`}>
                  <div className={styles.sectionRow3}>
                    <span className={styles.sectionDot} />
                    <span className={styles.sectionLabel2}>suamarca</span>
                    <span className={styles.sectionLabel3}>· Patrocinado</span>
                  </div>
                  <div className={styles.sectionRow4}>
                    <span className={styles.sectionPill}>Comprar</span>
                  </div>
                  <div className={styles.sectionBox8}>Meta Ads · Instagram e Facebook</div>
                </div>
                <div className={`${styles.c} ${styles.sectionBox9}`}>
                  <div className={styles.sectionBox10}>Qual a melhor panela para indução?</div>
                  <div className={styles.sectionBox11} />
                  <div className={styles.sectionBox12} />
                  <div className={styles.sectionRow5}>
                    <span className={styles.sectionLabel4} />
                    <span className={styles.sectionLabel5}>
                      <b className={styles.sectionStrong}>Panela inox 24cm · suamarca</b>Patrocinado
                    </span>
                  </div>
                  <div className={styles.sectionBox13}>Anúncios no ChatGPT</div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.canaisSection} id="canais">
            <div className={styles.box}>
              <div data-reveal="1">
                <div className={styles.eyebrow}>Canais</div>
                <h2 className={styles.canaisTitle}>Três lugares onde o seu cliente decide a compra.</h2>
              </div>
              <div className={`${styles.g3} ${styles.canaisBox}`}>
                <article className={`${styles.card} ${styles.pad} ${styles.canaisCard}`} data-reveal="1" data-delay="0">
                  <h3 className={styles.canaisTitle2}>Google Ads</h3>
                  <p className={styles.canaisText}>Quem pesquisa já quer comprar.</p>
                  <ul className={styles.canaisList}>
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                  className={`${styles.card} ${styles.pad} ${styles.canaisCard}`}
                  data-reveal="1"
                  data-delay="80"
                >
                  <h3 className={styles.canaisTitle2}>Meta Ads</h3>
                  <p className={styles.canaisText}>Desejo antes da busca.</p>
                  <ul className={styles.canaisList}>
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                  className={`${styles.card} ${styles.pad} ${styles.canaisCard2}`}
                  data-reveal="1"
                  data-delay="160"
                >
                  <span className={styles.canaisPill}>Novidade</span>
                  <h3 className={styles.canaisTitle2}>Anúncios no ChatGPT</h3>
                  <p className={styles.canaisText}>O novo lugar onde as pessoas decidem.</p>
                  <ul className={styles.canaisList}>
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
                    <li className={styles.canaisItem}>
                      <span className={styles.canaisDot} aria-hidden="true">
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
          <section className={styles.box}>
            <div className={`${styles.split} ${styles.sectionBox14}`}>
              <div data-reveal="1">
                <div className={styles.eyebrow}>Método</div>
                <h2 className={styles.sectionTitle2}>Campanha boa não é sorte. É rotina.</h2>
                <div className={`${styles.pad} ${styles.sectionBox15}`} aria-hidden="true">
                  <div className={styles.sectionBox16}>Vendas por semana de otimização</div>
                  <div className={styles.sectionRow6}>
                    <span className={styles.sectionLabel6} />
                    <span className={styles.sectionLabel7} />
                    <span className={styles.sectionLabel8} />
                    <span className={styles.sectionLabel9} />
                    <span className={styles.sectionLabel10} />
                    <span className={styles.sectionLabel11} />
                    <span className={styles.sectionLabel12} />
                  </div>
                  <div className={styles.sectionBox17}>Ilustrativo</div>
                </div>
              </div>
              <ol className={`${styles.g2} ${styles.sectionList}`}>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="0">
                  <span className={styles.sectionLabel13}>01</span>
                  <h3 className={styles.sectionTitle3}>Diagnóstico</h3>
                  <p className={styles.sectionText2}>
                    Margem, ticket, produtos campeões e quanto você pode pagar por venda.
                  </p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="70">
                  <span className={styles.sectionLabel13}>02</span>
                  <h3 className={styles.sectionTitle3}>Estrutura de medição</h3>
                  <p className={styles.sectionText2}>
                    Pixel, eventos e conversões configurados para saber o que funciona.
                  </p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="140">
                  <span className={styles.sectionLabel13}>03</span>
                  <h3 className={styles.sectionTitle3}>Criativos</h3>
                  <p className={styles.sectionText2}>
                    Imagens e vídeos pensados para cada canal, não o mesmo post em todo lugar.
                  </p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="0">
                  <span className={styles.sectionLabel13}>04</span>
                  <h3 className={styles.sectionTitle3}>Campanhas</h3>
                  <p className={styles.sectionText2}>Do topo ao remarketing, com orçamento distribuído por objetivo.</p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="70">
                  <span className={styles.sectionLabel13}>05</span>
                  <h3 className={styles.sectionTitle3}>Otimização semanal</h3>
                  <p className={styles.sectionText2}>Corta o que não vende e coloca mais verba no que vende.</p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="140">
                  <span className={styles.sectionLabel13}>06</span>
                  <h3 className={styles.sectionTitle3}>Relatório claro</h3>
                  <p className={styles.sectionText2}>Investimento, vendas e retorno em linguagem de dono de loja.</p>
                </li>
              </ol>
            </div>
          </section>
          <section className={styles.sectionSection2}>
            <div className={`${styles.pad} ${styles.sectionRow7}`} data-reveal="1">
              <div className={styles.sectionBox18}>
                <h2 className={styles.sectionTitle4}>Anúncio sem loja preparada é dinheiro indo embora.</h2>
                <p className={styles.sectionText3}>
                  Antes de acelerar, a gente confere checkout, frete, fotos e velocidade. No TEC3 Connect, loja e
                  tráfego andam juntos.
                </p>
              </div>
              <Link className={`${styles.btn} ${styles.sectionButton3}`} href="/connect">
                Conhecer o TEC3 Connect →
              </Link>
            </div>
            <p className={styles.sectionText4}>
              Sobre anúncios no ChatGPT:{' '}
              <a
                className={styles.sectionLink}
                href="https://www.cnnbrasil.com.br/inteligencia-artificial/chatgpt-comeca-a-exibir-anuncios-no-brasil/"
              >
                CNN Brasil
              </a>{' '}
              e{' '}
              <a
                className={styles.sectionLink}
                href="https://timesbrasil.com.br/colunas/ai-451/openai-anuncios-chatgpt-brasil-autoatendimento/"
              >
                Times Brasil
              </a>
              .
            </p>
          </section>
          <section className={styles.sectionSection3}>
            <div className={`${styles.pad} ${styles.sectionRow8}`} data-reveal="1">
              <div className={styles.sectionBox19}>
                <h2 className={styles.sectionTitle5}>Vamos fazer sua loja aparecer?</h2>
                <p className={styles.sectionText5}>
                  Conta quanto você investe hoje (ou se nunca investiu). A gente monta o plano.
                </p>
              </div>
              <div className={`${styles.ctas} ${styles.sectionRow9}`}>
                <a className={`${styles.btn} ${styles.sectionButton4}`} href={vals.wa}>
                  Quero anunciar
                </a>{' '}
                <Link className={styles.sectionButton5} href="/connect">
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
