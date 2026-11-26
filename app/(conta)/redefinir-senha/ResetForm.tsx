'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import PasswordInput from '@/components/auth/PasswordInput';
import { ApiError, auth } from '@/lib/api';
import styles from '@/components/auth/form.module.css';

type TokenInfo = { type: 'INVITE' | 'RESET'; email: string; name: string };
type State = { step: 'checking' } | { step: 'invalid'; message: string } | { step: 'form'; info: TokenInfo };

const MIN_LENGTH = 8;

export default function ResetForm() {
  const router = useRouter();
  const token = useSearchParams().get('token') ?? '';
  const [state, setState] = useState<State>({ step: 'checking' });
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!token) {
      setState({ step: 'invalid', message: 'Este link está incompleto. Abra de novo o link do e-mail.' });
      return;
    }
    let active = true;
    auth
      .checkToken(token)
      .then((info) => active && setState({ step: 'form', info }))
      .catch((err) => {
        if (!active) return;
        setState({
          step: 'invalid',
          message: err instanceof ApiError ? err.message : 'Não foi possível validar o link. Tente novamente.',
        });
      });
    return () => {
      active = false;
    };
  }, [token]);

  if (state.step === 'checking') {
    return (
      <AuthShell title="Criar senha">
        <p className={styles.loading}>Validando o link…</p>
      </AuthShell>
    );
  }

  if (state.step === 'invalid') {
    return (
      <AuthShell title="Link inválido">
        <div className={styles.form}>
          <p className={styles.alert} role="alert">
            {state.message}
          </p>
          <Link className={styles.button} href="/esqueci-senha">
            Pedir um novo link
          </Link>
          <p className={styles.footer}>
            <Link className={styles.link} href="/login">
              Ir para o login
            </Link>
          </p>
        </div>
      </AuthShell>
    );
  }

  const { info } = state;
  const isInvite = info.type === 'INVITE';
  const tooShort = password.length > 0 && password.length < MIN_LENGTH;
  const mismatch = confirm.length > 0 && confirm !== password;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password.length < MIN_LENGTH) return setError(`A senha precisa ter pelo menos ${MIN_LENGTH} caracteres.`);
    if (password !== confirm) return setError('As senhas não conferem.');
    setError(null);
    setSending(true);
    try {
      await auth.resetPassword(token, password);
      router.replace(`/login?senha=ok&email=${encodeURIComponent(info.email)}`);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível salvar. Tente novamente.');
      setSending(false);
    }
  }

  return (
    <AuthShell
      title={isInvite ? `Olá, ${info.name.split(' ')[0]}!` : 'Nova senha'}
      subtitle={
        isInvite ? (
          <>
            Crie uma senha para acessar a área do cliente com <strong>{info.email}</strong>.
          </>
        ) : (
          <>
            Escolha uma nova senha para <strong>{info.email}</strong>.
          </>
        )
      }
    >
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        {/* Ajuda gerenciadores de senha a salvar com o e-mail certo. */}
        <input type="hidden" name="username" autoComplete="username" value={info.email} />
        {error && (
          <p className={styles.alert} role="alert">
            {error}
          </p>
        )}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            {isInvite ? 'Senha' : 'Nova senha'}
          </label>
          <PasswordInput
            id="password"
            autoComplete="new-password"
            required
            minLength={MIN_LENGTH}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={tooShort}
            aria-describedby="password-hint"
          />
          <span id="password-hint" className={styles.hint}>
            Pelo menos {MIN_LENGTH} caracteres.
          </span>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirm">
            Confirme a senha
          </label>
          <PasswordInput
            id="confirm"
            autoComplete="new-password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            aria-invalid={mismatch}
          />
          {mismatch && <span className={styles.hint}>As senhas não conferem.</span>}
        </div>
        <button className={styles.button} type="submit" disabled={sending || !password || !confirm}>
          {sending ? 'Salvando…' : isInvite ? 'Criar senha' : 'Salvar nova senha'}
        </button>
      </form>
    </AuthShell>
  );
}
