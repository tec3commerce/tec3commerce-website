import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/connect';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Tec3 · TEC3 Connect' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="connect">
        <SiteHeader current="connect" wa={vals.wa} />
        <main>
          <section className={styles.sectionSection}>
            <div className={styles.hero}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <span className={styles.sectionDot} />
                  TEC3 Connect
                </div>
                <h1 className={styles.sectionTitle}>
                  Todas as frentes. <span className={styles.sectionLabel}>Um time só.</span>
                </h1>
                <p className={styles.sectionText}>
                  O TEC3 Connect atende sua marca de forma 360°: loja, ERP, marketplaces, tráfego, pagamentos e conteúdo
                  trabalhando juntos, com um plano e um responsável.
                </p>
                <div className={`${styles.ctas} ${styles.sectionRow}`}>
                  <a className={`${styles.btn} ${styles.sectionButton}`} href={vals.wa}>
                    Quero o TEC3 Connect
                  </a>{' '}
                  <a className={styles.sectionButton2} href="#frentes">
                    Ver o que está incluso
                  </a>
                </div>
              </div>
              <div className={styles.sectionBox}>
                <div className={`${styles['cn-board']} ${styles.sectionBox2}`} aria-hidden="true">
                  <div className={styles.sectionRow2}>
                    <span className={styles.sectionLabel2}>Painel TEC3 Connect</span>{' '}
                    <span className={styles.sectionLabel3}>
                      <span className={styles.sectionDot2} />1 responsável
                    </span>
                  </div>
                  <div className={styles.sectionStack}>
                    <div className={`${styles['cn-row']} ${styles.sectionGrid}`}>
                      <span className={styles.sectionLabel4} />{' '}
                      <span className={styles.sectionLabel5}>
                        <b className={styles.sectionStrong}>Loja virtual</b>
                        <span className={styles.sectionLabel6}>Nuvemshop · no ar</span>
                      </span>{' '}
                      <span className={styles.sectionDot3}>
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
                    <div className={`${styles['cn-row']} ${styles.sectionGrid2}`}>
                      <span className={styles.sectionLabel7} />{' '}
                      <span className={styles.sectionLabel5}>
                        <b className={styles.sectionStrong}>ERP</b>
                        <span className={styles.sectionLabel6}>Olist ERP · sincronizado</span>
                      </span>{' '}
                      <span className={styles.sectionDot4}>
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
                    <div className={`${styles['cn-row']} ${styles.sectionGrid3}`}>
                      <span className={styles.sectionLabel8} />{' '}
                      <span className={styles.sectionLabel5}>
                        <b className={styles.sectionStrong}>Marketplaces</b>
                        <span className={styles.sectionLabel6}>3 canais · estoque único</span>
                      </span>{' '}
                      <span className={styles.sectionDot5}>
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
                    <div className={`${styles['cn-row']} ${styles.sectionGrid4}`}>
                      <span className={styles.sectionLabel9} />{' '}
                      <span className={styles.sectionLabel5}>
                        <b className={styles.sectionStrong}>Tráfego pago</b>
                        <span className={styles.sectionLabel6}>Google, Meta e ChatGPT</span>
                      </span>{' '}
                      <span className={styles.sectionDot6}>
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
                    <div className={`${styles['cn-row']} ${styles.sectionGrid5}`}>
                      <span className={styles.sectionLabel10} />{' '}
                      <span className={styles.sectionLabel5}>
                        <b className={styles.sectionStrong}>Pagamentos</b>
                        <span className={styles.sectionLabel6}>Stone · taxa exclusiva</span>
                      </span>{' '}
                      <span className={styles.sectionDot7}>
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
                    <div className={`${styles['cn-row']} ${styles.sectionGrid6}`}>
                      <span className={styles.sectionLabel11} />{' '}
                      <span className={styles.sectionLabel5}>
                        <b className={styles.sectionStrong}>Conteúdo e lives</b>
                        <span className={styles.sectionLabel6}>TEC·A · live na sexta</span>
                      </span>{' '}
                      <span className={styles.sectionDot8}>
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
                  <div className={styles.sectionRow3}>
                    <span className={styles.sectionLabel12}>Tudo conectado</span>{' '}
                    <span className={styles.sectionLabel13}>Plano do mês: 1 meta, 6 frentes</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sectionSection2}>
            <div className={styles.box}>
              <div data-reveal="1">
                <div className={styles.eyebrow}>Por que 360°</div>
                <h2 className={styles.title}>Cinco fornecedores e ninguém responsável? Acabou.</h2>
              </div>
              <div className={`${styles.vs} ${styles.box2}`}>
                <div className={`${styles.pad} ${styles.sectionBox3}`} data-reveal="1">
                  <div className={styles.sectionEyebrow2}>Do jeito comum</div>
                  <ul className={styles.sectionList}>
                    <li className={styles.sectionItem}>Agência de mídia culpa a loja</li>
                    <li className={styles.sectionItem}>Quem fez a loja não fala com o ERP</li>
                    <li className={styles.sectionItem}>Marketplace com estoque desencontrado</li>
                    <li className={styles.sectionItem}>Você vira a ponte entre todo mundo</li>
                  </ul>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox4}`} data-reveal="1" data-delay="100">
                  <div className={styles.sectionEyebrow3}>Com o TEC3 Connect</div>
                  <ul className={styles.sectionList2}>
                    <li className={styles.sectionItem2}>Um plano para todas as frentes</li>
                    <li className={styles.sectionItem2}>Loja, ERP e canais integrados desde o início</li>
                    <li className={styles.sectionItem2}>Mídia e conteúdo puxando para o mesmo objetivo</li>
                    <li className={styles.sectionItem2}>Uma pessoa responsável, que você conhece pelo nome</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.box} id="frentes">
            <div data-reveal="1">
              <div className={styles.eyebrow}>O que está incluso</div>
              <h2 className={styles.title}>As frentes que o Connect une.</h2>
            </div>
            <div className={`${styles.g3} ${styles.box2}`}>
              <Link
                className={`${styles.card} ${styles.pad} ${styles.frentesButton}`}
                data-reveal="1"
                data-delay="0"
                href="/nuvemshop"
              >
                <span className={styles.frentesLabel}>01</span>
                <h3 className={styles.frentesTitle}>Loja virtual</h3>
                <p className={styles.frentesText}>Implantação e evolução na Nuvemshop ou na Olist.</p>
                <span className={styles.frentesLabel2}>Ver Nuvemshop →</span>
              </Link>
              <Link
                className={`${styles.card} ${styles.pad} ${styles.frentesButton}`}
                data-reveal="1"
                data-delay="70"
                href="/olist"
              >
                <span className={styles.frentesLabel}>02</span>
                <h3 className={styles.frentesTitle}>ERP e integrações</h3>
                <p className={styles.frentesText}>Olist ERP no centro: estoque, notas e financeiro.</p>
                <span className={styles.frentesLabel2}>Ver Olist →</span>
              </Link>
              <Link
                className={`${styles.card} ${styles.pad} ${styles.frentesButton}`}
                data-reveal="1"
                data-delay="140"
                href="/marketplaces"
              >
                <span className={styles.frentesLabel}>03</span>
                <h3 className={styles.frentesTitle}>Marketplaces</h3>
                <p className={styles.frentesText}>Mercado Livre, Shopee e TikTok Shop operados por nós.</p>
                <span className={styles.frentesLabel2}>Ver Marketplaces →</span>
              </Link>
              <Link
                className={`${styles.card} ${styles.pad} ${styles.frentesButton}`}
                data-reveal="1"
                data-delay="0"
                href="/trafego"
              >
                <span className={styles.frentesLabel}>04</span>
                <h3 className={styles.frentesTitle}>Tráfego pago</h3>
                <p className={styles.frentesText}>Google, Meta e anúncios no ChatGPT.</p>
                <span className={styles.frentesLabel2}>Ver Tráfego pago →</span>
              </Link>
              <Link
                className={`${styles.card} ${styles.pad} ${styles.frentesButton}`}
                data-reveal="1"
                data-delay="70"
                href="/#servicos"
              >
                <span className={styles.frentesLabel}>05</span>
                <h3 className={styles.frentesTitle}>Pagamentos</h3>
                <p className={styles.frentesText}>Taxas exclusivas Stone para clientes Tec3.</p>
                <span className={styles.frentesLabel2}>Ver Serviços →</span>
              </Link>
              <Link
                className={`${styles.card} ${styles.pad} ${styles.frentesButton}`}
                data-reveal="1"
                data-delay="140"
                href="/teca"
              >
                <span className={styles.frentesLabel}>06</span>
                <h3 className={styles.frentesTitle}>Conteúdo, lives e brand</h3>
                <p className={styles.frentesText}>Social media, lives e eventos com a TEC·A.</p>
                <span className={styles.frentesLabel2}>Ver TEC·A →</span>
              </Link>
            </div>
          </section>
          <section className={styles.sectionSection3}>
            <div data-reveal="1">
              <div className={styles.eyebrow}>Como funciona</div>
              <h2 className={styles.title}>Do diagnóstico ao ritual de resultado.</h2>
            </div>
            <ol className={`${styles.g4} ${styles.sectionList3}`}>
              <li className={`${styles.pad} ${styles.sectionItem3}`} data-reveal="1" data-delay="0">
                <span className={styles.sectionDot9}>1</span>
                <h3 className={styles.sectionTitle2}>Diagnóstico 360°</h3>
                <p className={styles.sectionText2}>
                  Olhamos loja, ERP, canais, mídia e conteúdo de uma vez, não em pedaços.
                </p>
              </li>
              <li className={`${styles.pad} ${styles.sectionItem3}`} data-reveal="1" data-delay="70">
                <span className={styles.sectionDot9}>2</span>
                <h3 className={styles.sectionTitle2}>Plano integrado</h3>
                <p className={styles.sectionText2}>
                  Uma prioridade por mês, com metas que todas as frentes perseguem juntas.
                </p>
              </li>
              <li className={`${styles.pad} ${styles.sectionItem3}`} data-reveal="1" data-delay="140">
                <span className={styles.sectionDot9}>3</span>
                <h3 className={styles.sectionTitle2}>Execução por um time só</h3>
                <p className={styles.sectionText2}>Quem implanta, anuncia, opera e cria conteúdo conversa todo dia.</p>
              </li>
              <li className={`${styles.pad} ${styles.sectionItem3}`} data-reveal="1" data-delay="210">
                <span className={styles.sectionDot9}>4</span>
                <h3 className={styles.sectionTitle2}>Ritual de resultado</h3>
                <p className={styles.sectionText2}>Reunião mensal com números de todas as frentes e o próximo passo.</p>
              </li>
            </ol>
          </section>
          <section className={styles.sectionSection4}>
            <div className={`${styles.pad} ${styles.sectionRow4}`} data-reveal="1">
              <div className={styles.sectionBox5}>
                <h2 className={styles.sectionTitle3}>Sua operação inteira, conectada.</h2>
                <p className={styles.sectionText3}>
                  Conta o momento da sua marca. A gente mostra como o Connect se encaixa.
                </p>
              </div>
              <div className={`${styles.ctas} ${styles.sectionRow5}`}>
                <a className={`${styles.btn} ${styles.sectionButton3}`} href={vals.wa}>
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
