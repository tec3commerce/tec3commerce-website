'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ApiError, auth } from '@/lib/api';
import styles from '@/components/auth/form.module.css';

export default function ForgotForm() {
  const params = useSearchParams();
  const [email, setEmail] = useState(params.get('email') ?? '');
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      await auth.forgotPassword(email);
      setSent(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível enviar. Tente novamente.');
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <>
        <p className={styles.success} role="status">
          Se <strong>{email}</strong> estiver cadastrado, você vai receber um e-mail com o link em alguns minutos. O link
          vale por 1 hora. Confira também a caixa de spam.
        </p>
        <div className={styles.form}>
          <Link className={styles.button} href={`/login?email=${encodeURIComponent(email)}`}>
            Voltar para o login
          </Link>
        </div>
      </>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {error && (
        <p className={styles.alert} role="alert">
          {error}
        </p>
      )}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          className={styles.input}
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit" disabled={sending || !email}>
        {sending ? 'Enviando…' : 'Enviar link'}
      </button>
      <p className={styles.footer}>
        Lembrou?{' '}
        <Link className={styles.link} href="/login">
          Entrar
        </Link>
      </p>
    </form>
  );
}
