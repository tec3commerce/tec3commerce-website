'use client';

import { useState } from 'react';
import { ApiError } from '@/lib/api';
import type { Client, ClientInput } from '@/lib/admin';
import { formatDocument } from '@/lib/admin';
import form from '@/components/auth/form.module.css';
import styles from './admin.module.css';

type Props = {
  /** Cliente a editar. Sem ele, o formulário é de cadastro novo. */
  client?: Client;
  submitLabel: string;
  onSubmit: (input: ClientInput, sendInvite: boolean) => Promise<void>;
  onCancel?: () => void;
};

type Field = keyof Omit<ClientInput, 'address'> | `address.${keyof ClientInput['address']}`;

function initial(client?: Client): ClientInput {
  return {
    name: client?.name ?? '',
    tradeName: client?.tradeName ?? '',
    document: formatDocument(client?.document ?? null),
    phone: client?.phone ?? '',
    notes: client?.notes ?? '',
    contactName: client?.user?.name ?? '',
    email: client?.user?.email ?? '',
    address: { ...client?.address },
  };
}

/** Formulário de cadastro e edição do cliente (dados da empresa, acesso, endereço e observações). */
export default function ClientForm({ client, submitLabel, onSubmit, onCancel }: Props) {
  const [values, setValues] = useState(() => initial(client));
  const [sendInvite, setSendInvite] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({});
  const [saved, setSaved] = useState(false);

  const isNew = !client;

  function get(field: Field) {
    if (field.startsWith('address.')) {
      return values.address[field.slice(8) as keyof ClientInput['address']] ?? '';
    }
    return values[field as keyof Omit<ClientInput, 'address'>];
  }

  function set(field: Field, value: string) {
    setSaved(false);
    setFieldErrors((e) => ({ ...e, [field]: undefined }));
    setValues((v) =>
      field.startsWith('address.')
        ? { ...v, address: { ...v.address, [field.slice(8)]: value } }
        : { ...v, [field]: value },
    );
  }

  function input(field: Field, label: string, opts: React.InputHTMLAttributes<HTMLInputElement> = {}) {
    const id = `f-${field}`;
    const err = fieldErrors[field];
    return (
      <div className={form.field}>
        <label htmlFor={id} className={form.label}>
          {label}
        </label>
        <input
          id={id}
          className={form.input}
          value={get(field)}
          onChange={(e) => set(field, e.target.value)}
          aria-invalid={err ? true : undefined}
          aria-describedby={err ? `${id}-err` : undefined}
          {...opts}
        />
        {err && (
          <span id={`${id}-err`} className={styles.fieldError}>
            {err}
          </span>
        )}
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setFieldErrors({});
    try {
      await onSubmit(values, sendInvite);
      if (!isNew) setSaved(true);
    } catch (err) {
      if (err instanceof ApiError) {
        // "/address/zip" → "address.zip"
        const byField = Object.fromEntries(err.issues.map((i) => [i.path.slice(1).replace('/', '.'), i.message]));
        setFieldErrors(byField);
        setError(err.code === 'VALIDATION_ERROR' ? 'Confira os campos destacados.' : err.message);
      } else {
        setError('Algo deu errado. Tente novamente.');
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={styles.panel} onSubmit={submit} noValidate>
      <fieldset className={styles.section}>
        <legend className={styles.legend}>Empresa</legend>
        <div className={styles.grid}>
          <div className={styles.col4}>{input('name', 'Razão social ou nome', { required: true, maxLength: 200 })}</div>
          <div className={styles.col2}>{input('document', 'CPF ou CNPJ', { inputMode: 'numeric', maxLength: 18 })}</div>
          <div className={styles.col4}>{input('tradeName', 'Nome fantasia', { maxLength: 200 })}</div>
          <div className={styles.col2}>{input('phone', 'Telefone', { type: 'tel', maxLength: 30 })}</div>
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.legend}>Acesso à área do cliente</legend>
        <p className={styles.sectionHint}>
          É com este e-mail que o cliente entra. Cada cliente tem um único login.
        </p>
        <div className={styles.grid}>
          <div className={styles.col3}>
            {input('contactName', 'Nome do responsável', { required: true, maxLength: 120, autoComplete: 'off' })}
          </div>
          <div className={styles.col3}>
            {input('email', 'E-mail de acesso', { type: 'email', required: true, maxLength: 254, autoComplete: 'off' })}
          </div>
          {isNew && (
            <div className={styles.col6}>
              <label className={styles.check}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={sendInvite}
                  onChange={(e) => setSendInvite(e.target.checked)}
                />
                <span>Enviar agora o e-mail de convite para o cliente criar a senha</span>
              </label>
            </div>
          )}
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.legend}>Endereço</legend>
        <div className={styles.grid}>
          <div className={styles.col2}>{input('address.zip', 'CEP', { inputMode: 'numeric', maxLength: 9 })}</div>
          <div className={styles.col4}>{input('address.street', 'Rua', { maxLength: 200 })}</div>
          <div className={styles.col2}>{input('address.number', 'Número', { maxLength: 20 })}</div>
          <div className={styles.col4}>{input('address.complement', 'Complemento', { maxLength: 100 })}</div>
          <div className={styles.col2}>{input('address.district', 'Bairro', { maxLength: 100 })}</div>
          <div className={styles.col3}>{input('address.city', 'Cidade', { maxLength: 100 })}</div>
          <div className={styles.col2}>{input('address.state', 'UF', { maxLength: 2 })}</div>
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.legend}>Observações internas</legend>
        <p className={styles.sectionHint}>Só o admin vê. O cliente não tem acesso a este campo.</p>
        <div className={styles.grid}>
          <div className={styles.col6}>
            <textarea
              aria-label="Observações internas"
              className={styles.textarea}
              value={values.notes}
              maxLength={2000}
              onChange={(e) => set('notes', e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      <div className={styles.formActions}>
        <button type="submit" className={styles.primary} disabled={busy}>
          {busy ? 'Salvando…' : submitLabel}
        </button>
        {onCancel && (
          <button type="button" className={styles.ghost} onClick={onCancel} disabled={busy}>
            Cancelar
          </button>
        )}
        {saved && (
          <span className={styles.saved} role="status">
            Alterações salvas
          </span>
        )}
      </div>
      {error && (
        <p className={styles.formAlert} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
