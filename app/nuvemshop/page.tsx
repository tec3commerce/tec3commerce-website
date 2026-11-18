import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import PageEffects from '@/components/site/PageEffects';
import { vals } from '@/content/nuvemshop';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Tec3 × Nuvemshop · Implantação' };

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
        precedence="default"
      />
      <div className={styles.page} data-page="nuvemshop">
        <SiteHeader current="nuvemshop" wa={vals.wa} />
        <main>
          {/* HERO */}
          <section className={styles.heroSection}>
            <svg className={styles.heroIcon} aria-hidden="true" viewBox="0 0 600 400">
              <circle cx="220" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="22" />
              <circle cx="380" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="22" />
            </svg>
            <div className={styles.heroBox}>
              <div className={styles.heroRow}>
                <img className={styles.heroImage} src="/assets/logo-nuvemshop-branco.png" alt="Nuvemshop" />{' '}
                <span className={styles.heroLabel} />{' '}
                <span className={styles.heroEyebrow}>
                  Agência parceira oficial
                  <br />
                  Tec3 Commerce
                </span>
              </div>
              <div className={`${styles.nvHero} ${styles.heroBox2}`}>
                <div>
                  <h1 className={styles.heroTitle}>
                    Plataforma e agência <span className={styles.heroLabel2}>do mesmo lado</span>.
                  </h1>
                  <p className={styles.heroText}>
                    Quando quem implanta a sua loja é parceira da plataforma, você ganha segurança: conhecimento de
                    dentro, benefícios exclusivos e alguém que continua junto depois do go-live.
                  </p>
                  <div className={`${styles.nvCtas} ${styles.heroRow2}`}>
                    <a className={`${styles.nvBtn} ${styles.heroButton}`} href={vals.wa}>
                      Quero minha loja na Nuvemshop
                    </a>{' '}
                    <a className={styles.heroButton2} href="#implantacao">
                      Como é a implantação
                    </a>
                  </div>
                </div>
                <div className={styles.heroBox3} aria-hidden="true">
                  <svg className={styles.heroIcon2} viewBox="0 0 520 400">
                    <circle cx="190" cy="200" r="140" fill="rgba(255,255,255,.06)" />
                    <circle cx="330" cy="200" r="140" fill="rgba(181,171,252,.14)" />
                    <circle
                      className={styles.heroBox4}
                      cx="190"
                      cy="200"
                      r="140"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="10"
                      pathLength="1"
                      strokeDasharray="1"
                    />
                    <circle
                      className={styles.heroBox5}
                      cx="330"
                      cy="200"
                      r="140"
                      fill="none"
                      stroke="#B5ABFC"
                      strokeWidth="10"
                      pathLength="1"
                      strokeDasharray="1"
                    />
                  </svg>
                  <div className={styles.heroBox6}>Plataforma</div>
                  <div className={styles.heroBox7}>Agência</div>
                  <div className={styles.heroBox8}>
                    <div className={styles.heroBox9}>
                      <div className={styles.heroBox10}>
                        <div className={styles.heroEyebrow2}>Resultado</div>
                        <div className={styles.heroBox11}>Sua loja</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* POR QUE PARCERIA */}
          <section className={styles.queParceriaSection}>
            <div className={styles.box}>
              <div className={styles.box2} data-reveal="1">
                <div className={styles.eyebrow}>Por que parceria importa</div>
                <h2 className={styles.title}>
                  Você não está escolhendo só uma plataforma. Está escolhendo quem vai estar ao seu lado.
                </h2>
              </div>
              <div className={`${styles.nv4} ${styles.queParceriaBox}`}>
                {vals.why.map((w, i) => (
                  <article
                    key={i}
                    className={`${styles.nvCard} ${styles.nvPad} ${styles.queParceriaCard}`}
                    data-reveal="1"
                    data-delay={w.delay}
                  >
                    <div className={styles.queParceriaRow}>
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
                    <h3 className={styles.queParceriaTitle}>{w.t}</h3>
                    <p className={styles.queParceriaText}>{w.d}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* IPANEMA */}
          <section className={styles.box} id="ipanema">
            <div className={styles.nv2}>
              <div data-reveal="1">
                <div className={styles.ipanemaRow}>Novo · Layout Ipanema</div>
                <h2 className={styles.ipanemaTitle}>O layout é seu. 100% personalizável, sem depender de ninguém.</h2>
                <p className={styles.ipanemaText}>
                  O Ipanema é o layout da Nuvemshop construído inteiro com seções e blocos, com edição visual direto na
                  prévia da loja. A Tec3 monta a base com a sua marca e entrega a loja para você mudar o que quiser,
                  quando quiser.
                </p>
                <ul className={`${styles.nvFeat} ${styles.ipanemaList}`}>
                  {vals.ipanema.map((f, i) => (
                    <li key={i} className={styles.ipanemaItem}>
                      <span className={styles.ipanemaDot} aria-hidden="true">
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
                      <span className={styles.ipanemaLabel}>
                        <b className={styles.ipanemaStrong}>{f.t}</b> {f.d}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={styles.text}>
                  Fonte:{' '}
                  <a className={styles.link} href="https://www.nuvemshop.com.br/solucoes/novo-editor">
                    Nuvemshop · Editor com IA
                  </a>{' '}
                  e{' '}
                  <a
                    className={styles.link}
                    href="https://atendimento.nuvemshop.com.br/pt_BR/layout-ipanema/como-personalizar-meu-layout-ipanema-na-nuvemshop"
                  >
                    Central de Atendimento
                  </a>
                </p>
              </div>
              {/* mini editor animado */}
              <div className={styles.ipanemaBox} data-reveal="1" data-delay="120" aria-hidden="true">
                <div className={styles.ipanemaRow2}>
                  <span className={styles.ipanemaDot2} />
                  <span className={styles.ipanemaDot2} />
                  <span className={styles.ipanemaDot2} /> <span className={styles.ipanemaLabel2}>Editor · Ipanema</span>{' '}
                  <span className={styles.ipanemaPill}>Publicar</span>
                </div>
                <div className={styles.ipanemaGrid}>
                  <div className={styles.ipanemaStack}>
                    <div className={styles.ipanemaEyebrow}>Seções</div>
                    <div className={styles.ipanemaBox2}>Cabeçalho</div>
                    <div className={styles.ipanemaBox3}>Banner principal</div>
                    <div className={styles.ipanemaBox4}>Vitrine</div>
                    <div className={styles.ipanemaBox2}>Depoimentos</div>
                    <div className={styles.ipanemaBox2}>Rodapé</div>
                    <svg className={styles.ipanemaIcon} width="22" height="22" viewBox="0 0 24 24">
                      <path d="M4 2l16 9-7 2-3 7z" fill="#1B2140" stroke="#FFFFFF" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className={styles.ipanemaStack2}>
                    <div className={styles.ipanemaBox5} />
                    <div className={styles.ipanemaRow3}>
                      <span className={styles.ipanemaPill2}>COMPRAR</span>
                    </div>
                    <div className={styles.ipanemaGrid2}>
                      <div className={styles.ipanemaBox6} />
                      <div className={styles.ipanemaBox6} />
                      <div className={styles.ipanemaBox6} />
                    </div>
                    <div className={styles.ipanemaBox7} />
                    <div className={styles.ipanemaBox8} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CHECKOUT */}
          <section className={styles.box} id="checkout">
            <div className={styles.row} data-reveal="1">
              <div className={styles.box2}>
                <div className={styles.eyebrow}>Checkout Nuvem Pago</div>
                <h2 className={styles.title}>O checkout é onde a venda acontece. Ou se perde.</h2>
              </div>
              <p className={styles.checkoutText}>
                Recursos nativos de pagamento da Nuvemshop, sem app extra. A Tec3 configura e testa cada um antes do
                go-live.
              </p>
            </div>
            <div className={`${styles.nvCk} ${styles.checkoutBox}`}>
              <div className={`${styles.nvCard} ${styles.nvPad} ${styles.checkoutBox2}`} data-reveal="1" data-delay="0">
                <h3 className={styles.checkoutTitle}>Checkout transparente</h3>
                <p className={styles.checkoutText2}>
                  O cliente paga sem sair da sua loja: cartão, boleto e Pix no mesmo ambiente.
                </p>
              </div>
              <div
                className={`${styles.nvCard} ${styles.nvPad} ${styles.checkoutBox2}`}
                data-reveal="1"
                data-delay="70"
              >
                <h3 className={styles.checkoutTitle}>Checkout acelerado</h3>
                <p className={styles.checkoutText2}>
                  Compra em um clique para quem já comprou na rede, que reúne mais de 15 milhões de consumidores.
                </p>
              </div>
              <div
                className={`${styles.nvCard} ${styles.nvPad} ${styles.checkoutBox2}`}
                data-reveal="1"
                data-delay="140"
              >
                <h3 className={styles.checkoutTitle}>Botão "Comprar agora"</h3>
                <p className={styles.checkoutText2}>Compra direto da página do produto, sem passar pelo carrinho.</p>
              </div>
              <div className={`${styles.nvCard} ${styles.nvPad} ${styles.checkoutBox2}`} data-reveal="1" data-delay="0">
                <h3 className={styles.checkoutTitle}>Até 3x mais rápido</h3>
                <p className={styles.checkoutText2}>
                  Finalização de compra mais rápida com o Nuvem Pago, segundo a Nuvemshop.
                </p>
              </div>
              <div
                className={`${styles.nvCard} ${styles.nvPad} ${styles.checkoutBox2}`}
                data-reveal="1"
                data-delay="70"
              >
                <h3 className={styles.checkoutTitle}>Antifraude incluso</h3>
                <p className={styles.checkoutText2}>Camada de antifraude que aprova mais pedidos com segurança.</p>
              </div>
              <div
                className={`${styles.nvCard} ${styles.nvPad} ${styles.checkoutBox2}`}
                data-reveal="1"
                data-delay="140"
              >
                <h3 className={styles.checkoutTitle}>Ativação sem programador</h3>
                <p className={styles.checkoutText2}>É só ativar o Nuvem Pago em Meios de Pagamento, no painel.</p>
              </div>
            </div>
            <p className={styles.text}>
              Números informados pela Nuvemshop. Fonte:{' '}
              <a className={styles.link} href="https://www.nuvemshop.com.br/funcionalidades/checkout-transparente">
                Checkout transparente Nuvem Pago
              </a>
              .
            </p>
          </section>
          {/* NUVEM NEXT */}
          <section className={styles.nextSection} id="next">
            <div className={styles.nextBox}>
              <div className={`${styles.nv2} ${styles.nextBox2}`}>
                <div data-reveal="1">
                  <span className={styles.nextEyebrow}>Para operações que estão crescendo</span>
                  <h2 className={styles.nextTitle}>Nuvemshop Next</h2>
                  <p className={styles.nextText}>
                    O plano enterprise da Nuvemshop, para marcas que precisam de mais estrutura, mais velocidade e
                    suporte de verdade nos momentos que importam.
                  </p>
                  <div className={styles.nextRow} aria-hidden="true">
                    <span className={styles.nextLabel}>
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
                      <b className={styles.nextStrong}>Até 1 hora</b>
                      <span className={styles.nextLabel2}>no WhatsApp, inclusive fim de semana</span>
                    </span>
                  </div>
                </div>
                <div data-reveal="1" data-delay="120">
                  <ul className={styles.nextList}>
                    <li className={styles.nextItem}>
                      <span className={styles.nextDot} aria-hidden="true">
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
                    <li className={styles.nextItem}>
                      <span className={styles.nextDot} aria-hidden="true">
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
                    <li className={styles.nextItem}>
                      <span className={styles.nextDot} aria-hidden="true">
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
                    <li className={styles.nextItem}>
                      <span className={styles.nextDot} aria-hidden="true">
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
                    <li className={styles.nextItem}>
                      <span className={styles.nextDot} aria-hidden="true">
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
                    <li className={styles.nextItem}>
                      <span className={styles.nextDot} aria-hidden="true">
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
                  <p className={styles.nextText2}>
                    Fonte:{' '}
                    <a className={styles.link} href="https://www.nuvemshop.com.br/next">
                      Nuvemshop Next
                    </a>
                    . Condições de atendimento conforme o plano contratado.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* IMPLANTAÇÃO */}
          <section className={styles.implantacaoSection} id="implantacao">
            <div className={styles.box}>
              <div className={styles.row} data-reveal="1">
                <div className={styles.box3}>
                  <div className={styles.eyebrow}>Implantação Tec3</div>
                  <h2 className={styles.title}>Do diagnóstico ao go-live, um caminho só.</h2>
                </div>
                <p className={styles.implantacaoText}>
                  Cada etapa tem responsável, prazo combinado no diagnóstico e acompanhamento da Tec3.
                </p>
              </div>
              <div className={styles.implantacaoBox}>
                <div className={styles.implantacaoBox2} aria-hidden="true" />
                <div className={styles.implantacaoBox3} aria-hidden="true" data-reveal="1" />
                <ol className={styles.implantacaoList}>
                  {vals.steps.map((s, i) => (
                    <li key={i} className={styles.implantacaoItem} data-reveal="1" data-delay={s.delay}>
                      <span className={styles.implantacaoDot} data-tone={s.tone}>
                        {s.n}
                      </span>
                      <div className={`${styles.nvPad} ${styles.implantacaoBox4}`}>
                        <h3 className={styles.implantacaoTitle}>{s.t}</h3>
                        <p className={styles.implantacaoText2}>{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
          {/* BENEFÍCIOS */}
          <section className={styles.box}>
            <div className={styles.eyebrow} data-reveal="1">
              Só para clientes Tec3
            </div>
            <h2 className={styles.beneficiosTitle} data-reveal="1">
              Benefícios de entrar pela porta da parceria.
            </h2>
            <div className={styles.nv4}>
              {vals.perks.map((p, i) => (
                <div
                  key={i}
                  className={`${styles.nvCard} ${styles.nvPad} ${styles.beneficiosStack}`}
                  data-reveal="1"
                  data-delay={p.delay}
                  data-tone={p.tone}
                >
                  <div className={styles.beneficiosBox}>{p.big}</div>
                  <div className={styles.beneficiosBox2}>{p.d}</div>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ */}
          <section className={styles.faqSection}>
            <div className={styles.faqBox}>
              <h2 className={styles.faqTitle} data-reveal="1">
                Perguntas frequentes
              </h2>
              {vals.faq.map((q, i) => (
                <details key={i} className={styles.faqBox2}>
                  <summary className={styles.faqRow}>
                    {q.q}
                    <span className={`${styles.nvPlus} ${styles.faqDot}`} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className={styles.faqText}>{q.a}</p>
                </details>
              ))}
            </div>
          </section>
          {/* CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaRow} data-reveal="1">
              <div className={styles.box3}>
                <img className={styles.ctaImage} src="/assets/logo-nuvemshop.png" alt="Nuvemshop" />
                <h2 className={styles.ctaTitle}>Vamos tirar sua loja do papel na Nuvemshop?</h2>
                <p className={styles.ctaText}>
                  Conta o momento da sua marca. A gente indica o melhor caminho, sem compromisso.
                </p>
              </div>
              <div className={`${styles.nvCtas} ${styles.ctaRow2}`}>
                <a className={`${styles.nvBtn} ${styles.ctaButton}`} href={vals.wa}>
                  Falar com a Tec3
                </a>{' '}
                <Link className={styles.ctaButton2} href="/">
                  Voltar ao site
                </Link>
              </div>
            </div>
            <p className={styles.ctaText2}>
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
