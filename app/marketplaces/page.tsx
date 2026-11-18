import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/marketplaces';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Tec3 · Marketplaces' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="marketplaces">
        <SiteHeader current="marketplaces" wa={vals.wa} />
        <main>
          <section className={styles.sectionSection}>
            <div className={styles.hero}>
              <div>
                <div className={styles.sectionBox}>
                  <div className={styles.sectionEyebrow}>Gestão de marketplaces</div>
                </div>
                <h1 className={styles.sectionTitle}>
                  Venda onde o cliente <span className={styles.sectionLabel}>já está comprando</span>.
                </h1>
                <p className={styles.sectionText}>
                  Mercado Livre, Shopee e TikTok Shop operados pela Tec3, com estoque integrado à sua loja e ao ERP.
                  Você vende em todos; a gente cuida de todos.
                </p>
                <div className={styles.sectionRow}>
                  <img className={styles.sectionImage} src="/assets/logo-mercadolivre.png" alt="Mercado Livre" />
                  <img className={styles.sectionImage2} src="/assets/logo-shopee.png" alt="Shopee" />
                  <img className={styles.sectionImage3} src="/assets/logo-tiktokshop.png" alt="TikTok Shop" />
                </div>
                <div className={`${styles.ctas} ${styles.sectionRow2}`}>
                  <a className={`${styles.btn} ${styles.sectionButton}`} href={vals.wa}>
                    Quero vender nos marketplaces
                  </a>
                </div>
              </div>
              <div className={styles.sectionBox2} aria-hidden="true">
                <div className={styles.sectionRow3}>
                  <span className={styles.sectionLabel2}>ML</span>
                  <span>
                    <b className={styles.sectionStrong}>Novo pedido</b>
                    <span className={styles.sectionLabel3}>Mercado Livre</span>
                  </span>
                </div>
                <div className={styles.sectionRow4}>
                  <span className={styles.sectionLabel4}>SH</span>
                  <span>
                    <b className={styles.sectionStrong}>Novo pedido</b>
                    <span className={styles.sectionLabel3}>Shopee</span>
                  </span>
                </div>
                <div className={styles.sectionRow5}>
                  <span className={styles.sectionLabel5}>TT</span>
                  <span>
                    <b className={styles.sectionStrong}>Novo pedido</b>
                    <span className={styles.sectionLabel3}>TikTok Shop</span>
                  </span>
                </div>
                <div className={styles.sectionBox3}>
                  <div className={styles.sectionEyebrow2}>Estoque único</div>
                  <div className={styles.sectionBox4}>Sincronizado em todos</div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sectionSection2}>
            <div className={styles.sectionBox5}>
              <div data-reveal="1">
                <div className={styles.sectionEyebrow}>O que sua operação ganha</div>
                <h2 className={styles.sectionTitle2}>Marketplace não substitui sua loja. Multiplica.</h2>
              </div>
              <div className={`${styles.g4} ${styles.sectionBox6}`}>
                <div className={`${styles.card} ${styles.pad} ${styles.sectionBox7}`} data-reveal="1" data-delay="0">
                  <div className={styles.sectionBox8}>01</div>
                  <h3 className={styles.sectionTitle3}>Mais alcance</h3>
                  <p className={styles.sectionText2}>
                    Seu produto aparece para quem já está buscando, sem você pagar por cada visita.
                  </p>
                </div>
                <div className={`${styles.card} ${styles.pad} ${styles.sectionBox7}`} data-reveal="1" data-delay="80">
                  <div className={styles.sectionBox8}>02</div>
                  <h3 className={styles.sectionTitle3}>Confiança do canal</h3>
                  <p className={styles.sectionText2}>
                    Pagamento, entrega e garantia do marketplace reduzem a desconfiança de quem não conhece sua marca.
                  </p>
                </div>
                <div className={`${styles.card} ${styles.pad} ${styles.sectionBox7}`} data-reveal="1" data-delay="160">
                  <div className={styles.sectionBox8}>03</div>
                  <h3 className={styles.sectionTitle3}>Datas e campanhas</h3>
                  <p className={styles.sectionText2}>
                    Black Friday, 11.11, Dia das Mães: os marketplaces puxam tráfego nas datas e você vai junto.
                  </p>
                </div>
                <div className={`${styles.card} ${styles.pad} ${styles.sectionBox7}`} data-reveal="1" data-delay="240">
                  <div className={styles.sectionBox8}>04</div>
                  <h3 className={styles.sectionTitle3}>Mais giro, mais dados</h3>
                  <p className={styles.sectionText2}>
                    Você descobre rápido o que vende, em qual preço, e leva isso para a sua loja.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sectionSection}>
            <div className={styles.sectionBox9} data-reveal="1">
              <div className={styles.sectionEyebrow}>Canal por canal</div>
              <h2 className={styles.sectionTitle2}>Cada marketplace tem as próprias regras. A gente joga todas.</h2>
            </div>
            <div className={`${styles.row} ${styles.sectionBox10}`} data-reveal="1">
              <div className={styles.sectionBox11}>
                <div className={`${styles.pad} ${styles.sectionStack}`}>
                  <div className={styles.sectionBox12}>
                    <img className={styles.sectionImage4} src="/assets/logo-mercadolivre.png" alt="Mercado Livre" />
                  </div>
                  <p className={styles.sectionText3}>
                    O maior marketplace do Brasil exige reputação impecável. A gente cuida dela.
                  </p>
                </div>
              </div>
              <div className={styles.sectionBox13}>
                <div className={styles.sectionEyebrow}>Tec3 no Mercado Livre</div>
                <h3 className={styles.sectionTitle4}>O que a gente faz no Mercado Livre</h3>
                <ul className={styles.sectionList}>
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
            <div className={`${styles.row} ${styles.sectionBox10}`} data-reveal="1">
              <div className={styles.sectionBox13}>
                <div className={`${styles.pad} ${styles.sectionStack2}`}>
                  <div className={styles.sectionBox12}>
                    <img className={styles.sectionImage4} src="/assets/logo-shopee.png" alt="Shopee" />
                  </div>
                  <p className={styles.sectionText4}>
                    Volume, cupons e datas duplas. Shopee vende muito para quem joga o jogo dela.
                  </p>
                </div>
              </div>
              <div className={styles.sectionBox11}>
                <div className={styles.sectionEyebrow}>Tec3 no Shopee</div>
                <h3 className={styles.sectionTitle4}>O que a gente faz no Shopee</h3>
                <ul className={styles.sectionList}>
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
            <div className={`${styles.row} ${styles.sectionBox10}`} data-reveal="1">
              <div className={styles.sectionBox11}>
                <div className={`${styles.pad} ${styles.sectionStack3}`}>
                  <div className={styles.sectionBox12}>
                    <img className={styles.sectionImage4} src="/assets/logo-tiktokshop.png" alt="TikTok Shop" />
                  </div>
                  <p className={styles.sectionText4}>
                    Aqui o cliente compra enquanto assiste. Vídeo e live viram vitrine.
                  </p>
                </div>
              </div>
              <div className={styles.sectionBox13}>
                <div className={styles.sectionEyebrow}>Tec3 no TikTok Shop</div>
                <h3 className={styles.sectionTitle4}>O que a gente faz no TikTok Shop</h3>
                <ul className={styles.sectionList}>
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
                  <li className={styles.sectionItem}>
                    <span className={styles.sectionDot} aria-hidden="true">
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
          <section className={styles.sectionSection3}>
            <div className={`${styles.pad} ${styles.sectionGrid}`} data-reveal="1">
              <div className={styles.sectionEyebrow3}>O erro que mais custa caro</div>
              <h2 className={styles.sectionTitle5}>Vendeu no site, faltou no Mercado Livre.</h2>
              <p className={styles.sectionText5}>
                Estoque desencontrado vira venda cancelada e reputação em queda. Com o Olist ERP no centro, vendeu em um
                canal, atualiza em todos.
              </p>
              <Link className={styles.sectionButton2} href="/olist">
                Ver integração com o Olist ERP →
              </Link>
            </div>
          </section>
          <section className={styles.sectionSection4}>
            <div className={`${styles.pad} ${styles.sectionRow6}`} data-reveal="1">
              <div className={styles.sectionBox14}>
                <h2 className={styles.sectionTitle6}>Sua marca em todos os canais, com um time só.</h2>
                <p className={styles.sectionText6}>
                  A Tec3 assume a operação nos marketplaces e cuida da reputação como se fosse nossa.
                </p>
              </div>
              <div className={`${styles.ctas} ${styles.sectionRow7}`}>
                <a className={`${styles.btn} ${styles.sectionButton3}`} href={vals.wa}>
                  Quero vender nos marketplaces
                </a>{' '}
                <Link className={styles.sectionButton4} href="/connect">
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
