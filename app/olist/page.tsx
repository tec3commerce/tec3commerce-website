import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SimpleFooter from '@/components/site/SimpleFooter';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/olist';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Tec3 · Olist' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="olist">
        <SiteHeader current="olist" wa={vals.wa} />
        <main>
          <section className={styles.sectionSection}>
            <div className={styles.hero}>
              <div>
                <div className={styles.sectionRow}>
                  <img
                    className={styles.sectionImage}
                    src="/assets/selo-olist-ouro.png"
                    alt="Selo Parceira Ouro Olist"
                  />
                  <div>
                    <div className={styles.sectionEyebrow}>Parceira nível Ouro</div>
                    <img className={styles.sectionImage2} src="/assets/logo-olist-azul.png" alt="olist" />
                  </div>
                </div>
                <h1 className={styles.sectionTitle}>
                  Toda a sua operação em <span className={styles.sectionLabel}>um só ecossistema</span>.
                </h1>
                <p className={styles.sectionText}>
                  ERP, loja virtual, envios e financeiro conversando entre si. A Tec3 implanta o ecossistema Olist
                  completo e faz a migração do seu ERP atual sem parar a operação.
                </p>
                <div className={`${styles.ctas} ${styles.sectionRow2}`}>
                  <a className={`${styles.btn} ${styles.sectionButton}`} href={vals.wa}>
                    Quero migrar para a Olist
                  </a>{' '}
                  <a className={styles.sectionButton2} href="#solucoes">
                    Ver as soluções
                  </a>
                </div>
              </div>
              <div className={`${styles.pad} ${styles.sectionBox}`} aria-hidden="true">
                <div className={styles.sectionEyebrow2}>Migração de ERP</div>
                <div className={styles.mig}>
                  <div className={styles.sectionBox2}>
                    <div className={styles.sectionBox3}>ERP atual</div>
                    <div className={styles.sectionBox4} />
                    <div className={styles.sectionBox5} />
                    <div className={styles.sectionBox6} />
                    <div className={styles.sectionBox7} />
                    <div className={styles.sectionBox8} />
                  </div>
                  <div className={styles.sectionBox9}>
                    <span className={`${styles.chip} ${styles.sectionPill}`}>Produtos</span>
                    <span className={`${styles.chip} ${styles.sectionPill2}`}>Estoque</span>
                    <span className={`${styles.chip} ${styles.sectionPill3}`}>Clientes</span>
                    <span className={`${styles.chip} ${styles.sectionPill4}`}>Notas</span>
                    <span className={`${styles.chip} ${styles.sectionPill5}`}>Pedidos</span>
                  </div>
                  <div className={styles.sectionBox10}>
                    <img className={styles.sectionImage3} src="/assets/logo-olist-azul.png" alt="" />
                    <div className={styles.sectionBox11}>ERP</div>
                    <div className={styles.sectionRow3}>
                      <span className={styles.sectionDot}>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className={styles.sectionLabel2}>Produtos</span>
                    </div>
                    <div className={styles.sectionRow4}>
                      <span className={styles.sectionDot}>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className={styles.sectionLabel2}>Estoque</span>
                    </div>
                    <div className={styles.sectionRow5}>
                      <span className={styles.sectionDot}>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className={styles.sectionLabel2}>Clientes</span>
                    </div>
                    <div className={styles.sectionRow6}>
                      <span className={styles.sectionDot}>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className={styles.sectionLabel2}>Notas</span>
                    </div>
                    <div className={styles.sectionRow7}>
                      <span className={styles.sectionDot}>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className={styles.sectionLabel2}>Pedidos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.solucoesSection} id="solucoes">
            <div className={styles.box}>
              <div data-reveal="1">
                <div className={styles.eyebrow}>O ecossistema</div>
                <h2 className={styles.solucoesTitle}>Quatro soluções. Uma operação conectada.</h2>
              </div>
              <div className={`${styles.g4} ${styles.solucoesBox}`}>
                <article
                  className={`${styles.card} ${styles.pad} ${styles.solucoesCard}`}
                  data-reveal="1"
                  data-delay="0"
                >
                  <div className={styles.solucoesRow}>
                    <img className={styles.solucoesImage} src="/assets/logo-olist-azul.png" alt="olist" />
                    <span className={styles.solucoesPill}>01</span>
                  </div>
                  <h3 className={styles.solucoesTitle2}>Olist ERP</h3>
                  <p className={styles.solucoesText}>O coração da operação.</p>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Pedidos de todos os canais em um só lugar</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Nota fiscal, estoque e expedição em fluxo automático</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Financeiro: contas, fluxo de caixa e margem por venda</span>
                    </li>
                  </ul>
                </article>
                <article
                  className={`${styles.card} ${styles.pad} ${styles.solucoesCard}`}
                  data-reveal="1"
                  data-delay="80"
                >
                  <div className={styles.solucoesRow}>
                    <img className={styles.solucoesImage} src="/assets/logo-olist-azul.png" alt="olist" />
                    <span className={styles.solucoesPill}>02</span>
                  </div>
                  <h3 className={styles.solucoesTitle2}>Olist E-commerce</h3>
                  <p className={styles.solucoesText}>Sua loja virtual integrada de fábrica.</p>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Loja conectada nativamente ao ERP</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Catálogo, preço e estoque sem retrabalho</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Layout e implantação feitos pela Tec3</span>
                    </li>
                  </ul>
                </article>
                <article
                  className={`${styles.card} ${styles.pad} ${styles.solucoesCard}`}
                  data-reveal="1"
                  data-delay="160"
                >
                  <div className={styles.solucoesRow}>
                    <img className={styles.solucoesImage} src="/assets/logo-olist-azul.png" alt="olist" />
                    <span className={styles.solucoesPill}>03</span>
                  </div>
                  <h3 className={styles.solucoesTitle2}>Olist Envios</h3>
                  <p className={styles.solucoesText}>Frete sem planilha.</p>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Compara preço e prazo de várias transportadoras</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Gera etiquetas e acompanha a entrega</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Reenvio e devolução no mesmo painel</span>
                    </li>
                  </ul>
                </article>
                <article
                  className={`${styles.card} ${styles.pad} ${styles.solucoesCard}`}
                  data-reveal="1"
                  data-delay="240"
                >
                  <div className={styles.solucoesRow}>
                    <img className={styles.solucoesImage} src="/assets/logo-olist-azul.png" alt="olist" />
                    <span className={styles.solucoesPill}>04</span>
                  </div>
                  <h3 className={styles.solucoesTitle2}>Olist Digital</h3>
                  <p className={styles.solucoesText}>O financeiro conectado à operação.</p>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Conta digital da Olist ligada ao ERP</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Recebimentos e pagamentos organizados</span>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.solucoesDot} aria-hidden="true">
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
                      <span>Menos conciliação manual no fim do mês</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
          <section className={styles.box}>
            <div className={`${styles.split} ${styles.sectionBox12}`}>
              <div data-reveal="1">
                <div className={styles.eyebrow}>Migração de ERP</div>
                <h2 className={styles.sectionTitle2}>Trocar de ERP sem parar de vender.</h2>
                <p className={styles.sectionText2}>
                  Migração de ERP assusta porque mexe em tudo: fiscal, estoque, financeiro e integrações. Por isso a
                  gente faz em etapas, com validação antes da virada. O Olist ERP é o único ERP que a Tec3 implanta, e a
                  gente conhece cada detalhe dele.
                </p>
              </div>
              <ol className={`${styles.g2} ${styles.sectionList}`}>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="0">
                  <span className={styles.sectionDot2}>1</span>
                  <h3 className={styles.sectionTitle3}>Levantamento</h3>
                  <p className={styles.sectionText3}>
                    Mapeamos cadastros, regras fiscais, integrações e o que precisa vir do sistema atual.
                  </p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="60">
                  <span className={styles.sectionDot2}>2</span>
                  <h3 className={styles.sectionTitle3}>Importação</h3>
                  <p className={styles.sectionText3}>
                    Produtos, clientes, fornecedores e estoque levados para o Olist ERP.
                  </p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="120">
                  <span className={styles.sectionDot2}>3</span>
                  <h3 className={styles.sectionTitle3}>Fiscal e financeiro</h3>
                  <p className={styles.sectionText3}>Configuração de notas, tributação, contas e categorias.</p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="180">
                  <span className={styles.sectionDot2}>4</span>
                  <h3 className={styles.sectionTitle3}>Integrações</h3>
                  <p className={styles.sectionText3}>Loja, marketplaces, envios e pagamentos conectados ao ERP.</p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="240">
                  <span className={styles.sectionDot2}>5</span>
                  <h3 className={styles.sectionTitle3}>Validação</h3>
                  <p className={styles.sectionText3}>Pedidos de teste e conferência lado a lado antes da virada.</p>
                </li>
                <li className={`${styles.pad} ${styles.sectionItem}`} data-reveal="1" data-delay="300">
                  <span className={styles.sectionDot2}>6</span>
                  <h3 className={styles.sectionTitle3}>Virada e treinamento</h3>
                  <p className={styles.sectionText3}>Sua equipe operando com segurança, com a Tec3 por perto.</p>
                </li>
              </ol>
            </div>
          </section>
          <section className={styles.sectionSection2}>
            <div className={styles.box}>
              <div className={styles.sectionRow8} data-reveal="1">
                <div>
                  <div className={styles.eyebrow}>Nativo da plataforma</div>
                  <h2 className={styles.sectionTitle4}>O que o Olist ERP já faz, sem app extra.</h2>
                </div>
                <p className={styles.sectionText4}>Funcionalidades nativas descritas pela própria Olist.</p>
              </div>
              <div className={`${styles.g3} ${styles.sectionBox13}`}>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="0">
                  <h3 className={styles.sectionTitle5}>Fluxo automático de pedidos</h3>
                  <p className={styles.sectionText5}>
                    O pedido entra, a nota é emitida, o estoque baixa e a expedição é gerada.
                  </p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="70">
                  <h3 className={styles.sectionTitle5}>Estoque em tempo real</h3>
                  <p className={styles.sectionText5}>
                    Sincronizado entre canais, com controle por lote e validade e reserva de estoque.
                  </p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="140">
                  <h3 className={styles.sectionTitle5}>Margem de contribuição</h3>
                  <p className={styles.sectionText5}>
                    Relatório que mostra o lucro real de cada venda, já com custos e taxas.
                  </p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="0">
                  <h3 className={styles.sectionTitle5}>Logística com conferência</h3>
                  <p className={styles.sectionText5}>
                    Lista de separação e conferência por leitura de código de barras.
                  </p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="70">
                  <h3 className={styles.sectionTitle5}>Várias empresas, um sistema</h3>
                  <p className={styles.sectionText5}>Gestão de mais de um CNPJ com faturamento distribuído.</p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="140">
                  <h3 className={styles.sectionTitle5}>Financeiro completo</h3>
                  <p className={styles.sectionText5}>
                    Contas a pagar e a receber, fluxo de caixa e previsão financeira.
                  </p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="0">
                  <h3 className={styles.sectionTitle5}>Documentos automáticos</h3>
                  <p className={styles.sectionText5}>Notas, orçamentos, etiquetas e devoluções com envio por e-mail.</p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="70">
                  <h3 className={styles.sectionTitle5}>Lis, assistente com IA</h3>
                  <p className={styles.sectionText5}>Consulta dados do ERP e executa ações no sistema por você.</p>
                </div>
                <div className={`${styles.pad} ${styles.sectionBox14}`} data-reveal="1" data-delay="140">
                  <h3 className={styles.sectionTitle5}>Integrações nativas</h3>
                  <p className={styles.sectionText5}>Mercado Livre, Shopee, Amazon, Magalu, Correios e outras.</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.box}>
            <div className={styles.split}>
              <div className={styles.sectionRow9} data-reveal="1">
                <div className={styles.sectionBox15} aria-hidden="true" />
                <img
                  className={styles.sectionImage4}
                  src="/assets/selo-olist-ouro.png"
                  alt="Selo Parceira Ouro Olist"
                />
              </div>
              <div data-reveal="1" data-delay="100">
                <div className={styles.sectionEyebrow3}>Por que uma parceira Ouro</div>
                <h2 className={styles.sectionTitle2}>Parceria Ouro é experiência comprovada no ecossistema.</h2>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <span className={styles.sectionDot3} aria-hidden="true">
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
                    <span>Parceira Olist nível Ouro desde 2022</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.sectionDot3} aria-hidden="true">
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
                    <span>Implantação de todo o ecossistema: ERP, loja, envios e financeiro</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.sectionDot3} aria-hidden="true">
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
                    <span>Uma única pessoa responsável do diagnóstico ao go-live</span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.sectionDot3} aria-hidden="true">
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
                    <span>Integração com Nuvemshop, marketplaces e Stone quando a operação pede</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.sectionSection3}>
            <div className={`${styles.pad} ${styles.sectionRow10}`} data-reveal="1">
              <div className={styles.sectionBox16}>
                <h2 className={styles.sectionTitle6}>Vamos colocar sua operação no ecossistema Olist?</h2>
                <p className={styles.sectionText6}>Conta qual ERP você usa hoje e a gente desenha a migração.</p>
              </div>
              <div className={`${styles.ctas} ${styles.sectionRow11}`}>
                <a className={`${styles.btn} ${styles.sectionButton3}`} href={vals.wa}>
                  Quero migrar meu ERP
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
