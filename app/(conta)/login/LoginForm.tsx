'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from '@/components/auth/SessionProvider';
import PasswordInput from '@/components/auth/PasswordInput';
import { ApiError, homeFor, safeNext } from '@/lib/api';
import styles from '@/components/auth/form.module.css';

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { status, user, login } = useSession();
  const [email, setEmail] = useState(params.get('email') ?? '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const next = safeNext(params.get('next'));

  // Já está logado: vai direto para a área certa.
  useEffect(() => {
    if (status === 'authenticated' && user) router.replace(next ?? homeFor(user.role));
  }, [status, user, next, router]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const u = await login(email, password);
      router.replace(next ?? homeFor(u.role));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível entrar. Tente novamente.');
      setSending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {params.get('senha') === 'ok' && (
        <p className={styles.success} role="status">
          Senha salva. Agora é só entrar.
        </p>
      )}
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
      <div className={styles.field}>
        <div className={styles.labelRow}>
          <label className={styles.label} htmlFor="password">
            Senha
          </label>
          <Link className={styles.link} href={email ? `/esqueci-senha?email=${encodeURIComponent(email)}` : '/esqueci-senha'}>
            Esqueci minha senha
          </Link>
        </div>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit" disabled={sending || !email || !password}>
        {sending ? 'Entrando…' : 'Entrar'}
      </button>
    </form>
  );
}
