'use client';

import { useState } from 'react';
import styles from './form.module.css';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

/** Campo de senha com botão para mostrar/ocultar. */
export default function PasswordInput(props: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.passwordWrap}>
      <input {...props} type={visible ? 'text' : 'password'} className={styles.input} />
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
        aria-pressed={visible}
      >
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}
