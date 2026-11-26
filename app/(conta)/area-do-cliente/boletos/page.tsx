'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { boletoName, formatBarcode, formatDueDate, formatMoney, myBoletos, openInNewTab, type Boleto } from '@/lib/boletos';
import portal from '@/components/auth/portal.module.css';
import styles from './page.module.css';

export default function Page() {
  const [items, setItems] = useState<Boleto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    myBoletos
      .list()
      .then(setItems)
      .catch((err) => setError(err.message));
  }, []);

  async function open(b: Boleto) {
    setError(null);
    try {
      await openInNewTab(() => myBoletos.openUrl(b.id));
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function copy(b: Boleto) {
    try {
      await navigator.clipboard.writeText(b.barcode ?? '');
      setCopied(b.id);
      // Copiar a linha digitável conta como "o cliente viu o boleto". Se falhar, não atrapalha o cliente.
      if (!b.firstViewedAt) myBoletos.markViewed(b.id).catch(() => {});
      setTimeout(() => setCopied((c) => (c === b.id ? null : c)), 2500);
    } catch {
      setError('Não foi possível copiar. Selecione a linha digitável e copie manualmente.');
    }
  }

  return (
    <>
      <Link href="/area-do-cliente" className={styles.back}>
        ← Início
      </Link>
      <span className={portal.eyebrow}>Área do cliente</span>
      <h1 className={portal.title}>Boletos</h1>
      <p className={portal.lead}>Abra o boleto ou copie a linha digitável para pagar no app do seu banco.</p>

      {error && (
        <p className={styles.alert} role="alert">
          {error}
        </p>
      )}

      {!items ? (
        <p className={styles.empty}>Carregando…</p>
      ) : items.length === 0 ? (
        <p className={styles.empty}>Nenhum boleto por aqui ainda. Quando enviarmos um, ele aparece nesta página.</p>
      ) : (
        <ul className={styles.list}>
          {items.map((b) => (
            <li key={b.id} className={styles.item}>
              <div className={styles.top}>
                <div className={styles.info}>
                  {b.dueDate && <span className={styles.due}>Vence em {formatDueDate(b.dueDate)}</span>}
                  <h2 className={styles.description}>{boletoName(b)}</h2>
                </div>
                {b.amountCents != null && <span className={styles.amount}>{formatMoney(b.amountCents)}</span>}
              </div>

              {b.barcode && (
                <div className={styles.barcodeBox}>
                  <span className={styles.barcodeLabel}>Linha digitável</span>
                  <span className={styles.barcode}>{formatBarcode(b.barcode)}</span>
                </div>
              )}

              <div className={styles.actions}>
                {b.url && (
                  <button type="button" className={styles.primary} onClick={() => open(b)}>
                    Abrir boleto
                  </button>
                )}
                {b.barcode && (
                  <button type="button" className={b.url ? styles.secondary : styles.primary} onClick={() => copy(b)}>
                    {copied === b.id ? 'Copiado!' : 'Copiar linha digitável'}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
