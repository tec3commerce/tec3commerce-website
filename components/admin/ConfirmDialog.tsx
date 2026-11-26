'use client';

import { useEffect, useRef } from 'react';
import styles from './admin.module.css';

type Props = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  confirmLabel: string;
  /** Ação destrutiva (botão vermelho). */
  danger?: boolean;
  busy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

/** Diálogo modal nativo (<dialog>): fecha com Esc e prende o foco. */
export default function ConfirmDialog({ open, title, children, confirmLabel, danger, busy, onConfirm, onCancel }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby="confirm-title"
      onCancel={(e) => {
        e.preventDefault();
        if (!busy) onCancel();
      }}
    >
      <h2 id="confirm-title" className={styles.dialogTitle}>
        {title}
      </h2>
      <div className={styles.dialogText}>{children}</div>
      <div className={styles.dialogActions}>
        <button type="button" className={styles.ghost} onClick={onCancel} disabled={busy}>
          Cancelar
        </button>
        <button type="button" className={danger ? styles.danger : styles.primary} onClick={onConfirm} disabled={busy}>
          {busy ? 'Aguarde…' : confirmLabel}
        </button>
      </div>
    </dialog>
  );
}
