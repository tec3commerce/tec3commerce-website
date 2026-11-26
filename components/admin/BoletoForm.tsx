'use client';

import { useState } from 'react';
import { ApiError } from '@/lib/api';
import { centsToMasked, formatBarcode, maskMoney, moneyToCents, type Boleto, type BoletoFields } from '@/lib/boletos';
import form from '@/components/auth/form.module.css';
import styles from './admin.module.css';

type Props = {
  /** Boleto a editar. Sem ele, o formulário é de cadastro novo. */
  boleto?: Boleto;
  onSubmit: (fields: BoletoFields) => Promise<void>;
  onCancel: () => void;
};

type Field = keyof BoletoFields;

const NEED_ONE = 'Informe o link ou a linha digitável.';

/**
 * Formulário do boleto: nome, valor, vencimento, link e linha digitável.
 * Tudo opcional, menos uma coisa: o boleto precisa do link ou da linha digitável.
 */
export default function BoletoForm({ boleto, onSubmit, onCancel }: Props) {
  const isNew = !boleto;
  const [description, setDescription] = useState(boleto?.description ?? '');
  const [amount, setAmount] = useState(centsToMasked(boleto?.amountCents ?? null));
  const [dueDate, setDueDate] = useState(boleto?.dueDate ?? '');
  const [barcode, setBarcode] = useState(formatBarcode(boleto?.barcode ?? null));
  const [url, setUrl] = useState(boleto?.url ?? '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = barcode.replace(/\D/g, '');
    const link = url.trim();
    const local: Partial<Record<Field, string>> = {};
    if (!digits && !link) {
      local.url = NEED_ONE;
      local.barcode = NEED_ONE;
    }
    if (digits && digits.length !== 47 && digits.length !== 48) local.barcode = 'A linha digitável tem 47 ou 48 números.';
    if (link && !/^https?:\/\/\S+\.\S+/i.test(link)) local.url = 'Link inválido. Cole o endereço completo, com https://';
    setErrors(local);
    if (Object.keys(local).length) {
      setError('Confira os campos destacados.');
      return;
    }

    setBusy(true);
    setError(null);
    try {
      await onSubmit({
        description: description.trim(),
        amountCents: moneyToCents(amount) || null,
        dueDate,
        barcode: digits,
        url: link,
      });
    } catch (err) {
      if (err instanceof ApiError) {
        setErrors(Object.fromEntries(err.issues.map((i) => [i.path.slice(1), i.message])));
        setError(err.code === 'VALIDATION_ERROR' ? 'Confira os campos destacados.' : err.message);
      } else {
        setError('Algo deu errado. Tente novamente.');
      }
    } finally {
      setBusy(false);
    }
  }

  const fieldError = (f: Field) =>
    errors[f] && (
      <span id={`b-${f}-err`} className={styles.fieldError}>
        {errors[f]}
      </span>
    );
  const invalid = (f: Field) => (errors[f] ? { 'aria-invalid': true, 'aria-describedby': `b-${f}-err` } : {});
  const optional = <span className={styles.optional}>(opcional)</span>;

  return (
    <form className={styles.panel} onSubmit={submit} noValidate>
      <h2 className={styles.panelTitle}>{isNew ? 'Novo boleto' : 'Editar boleto'}</h2>
      <p className={styles.panelText}>Preencha o link ou a linha digitável. Os outros campos são opcionais.</p>

      <div className={styles.grid}>
        <div className={styles.col6}>
          <div className={form.field}>
            <label htmlFor="b-description" className={form.label}>
              Nome do boleto {optional}
            </label>
            <input
              id="b-description"
              className={form.input}
              value={description}
              maxLength={200}
              placeholder="Ex.: Mensalidade de dezembro"
              onChange={(e) => setDescription(e.target.value)}
              {...invalid('description')}
            />
            {fieldError('description')}
          </div>
        </div>

        <div className={styles.col3}>
          <div className={form.field}>
            <label htmlFor="b-amount" className={form.label}>
              Valor (R$) {optional}
            </label>
            <input
              id="b-amount"
              className={form.input}
              inputMode="numeric"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(maskMoney(e.target.value))}
              {...invalid('amountCents')}
            />
            {fieldError('amountCents')}
          </div>
        </div>

        <div className={styles.col3}>
          <div className={form.field}>
            <label htmlFor="b-due" className={form.label}>
              Vencimento {optional}
            </label>
            <input
              id="b-due"
              type="date"
              className={form.input}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              {...invalid('dueDate')}
            />
            {fieldError('dueDate')}
          </div>
        </div>

        <div className={styles.col6}>
          <div className={form.field}>
            <label htmlFor="b-url" className={form.label}>
              Link do boleto
            </label>
            <input
              id="b-url"
              type="url"
              className={form.input}
              inputMode="url"
              placeholder="https://"
              value={url}
              maxLength={2000}
              onChange={(e) => setUrl(e.target.value)}
              {...invalid('url')}
            />
            {fieldError('url')}
          </div>
        </div>

        <div className={styles.col6}>
          <div className={form.field}>
            <label htmlFor="b-barcode" className={form.label}>
              Linha digitável
            </label>
            <input
              id="b-barcode"
              className={styles.mono}
              inputMode="numeric"
              placeholder="Cole aqui os números do boleto"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              onBlur={() => {
                const d = barcode.replace(/\D/g, '');
                if (d.length === 47 || d.length === 48) setBarcode(formatBarcode(d));
              }}
              {...invalid('barcode')}
            />
            {fieldError('barcode')}
          </div>
        </div>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.primary} disabled={busy}>
          {busy ? 'Salvando…' : isNew ? 'Adicionar boleto' : 'Salvar alterações'}
        </button>
        <button type="button" className={styles.ghost} onClick={onCancel} disabled={busy}>
          Cancelar
        </button>
      </div>
      {error && (
        <p className={styles.formAlert} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
