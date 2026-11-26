'use client';

import { useEffect, useState } from 'react';
import {
  adminBoletos,
  boletoName,
  formatBarcode,
  formatDueDate,
  formatMoney,
  openInNewTab,
  type Boleto,
} from '@/lib/boletos';
import { formatDate } from '@/lib/admin';
import BoletoForm from './BoletoForm';
import ConfirmDialog from './ConfirmDialog';
import styles from './admin.module.css';

/** Formulário aberto: novo boleto ou edição de um existente. */
type Editing = { mode: 'new' } | { mode: 'edit'; boleto: Boleto } | null;

/** Mais novo primeiro; sem vencimento no fim (mesma ordem da API). */
const sort = (list: Boleto[]) =>
  [...list].sort((a, b) => {
    if (!a.dueDate || !b.dueDate) return a.dueDate ? -1 : b.dueDate ? 1 : b.createdAt.localeCompare(a.createdAt);
    return b.dueDate.localeCompare(a.dueDate) || b.createdAt.localeCompare(a.createdAt);
  });

/** Aba Boletos da página do cliente no admin: botão para adicionar e lista dos boletos já cadastrados. */
export default function BoletosPanel({ clientId }: { clientId: string }) {
  const [items, setItems] = useState<Boleto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [editing, setEditing] = useState<Editing>(null);
  const [deleting, setDeleting] = useState<Boleto | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    adminBoletos
      .list(clientId)
      .then(setItems)
      .catch((err) => setError(err.message));
  }, [clientId]);

  async function open(b: Boleto) {
    setError(null);
    try {
      await openInNewTab(() => adminBoletos.openUrl(b.id));
    } catch (err) {
      setError((err as Error).message);
    }
  }

  function startEditing(next: Editing) {
    setNotice(null);
    setError(null);
    setEditing(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function confirmDelete() {
    if (!deleting) return;
    setBusy(true);
    try {
      await adminBoletos.remove(deleting.id);
      setItems((list) => list?.filter((b) => b.id !== deleting.id) ?? null);
      setNotice(`${boletoName(deleting)} excluído.`);
      if (editing?.mode === 'edit' && editing.boleto.id === deleting.id) setEditing(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
      setDeleting(null);
    }
  }

  return (
    <>
      {editing?.mode === 'edit' ? (
        <BoletoForm
          key={editing.boleto.id}
          boleto={editing.boleto}
          onCancel={() => setEditing(null)}
          onSubmit={async (fields) => {
            const updated = await adminBoletos.update(editing.boleto.id, fields);
            setItems((list) => sort((list ?? []).map((b) => (b.id === updated.id ? updated : b))));
            setEditing(null);
            setNotice('Boleto atualizado.');
          }}
        />
      ) : editing?.mode === 'new' ? (
        <BoletoForm
          onCancel={() => setEditing(null)}
          onSubmit={async (fields) => {
            const created = await adminBoletos.create(clientId, fields);
            setItems((list) => sort([created, ...(list ?? [])]));
            setEditing(null);
            setNotice(`${boletoName(created)} adicionado. Ele já aparece na área do cliente.`);
          }}
        />
      ) : (
        <div className={styles.toolbar}>
          <button type="button" className={styles.primary} onClick={() => startEditing({ mode: 'new' })}>
            + Novo boleto
          </button>
        </div>
      )}

      {notice && (
        <p className={styles.notice} role="status">
          {notice}
        </p>
      )}
      {error && (
        <p className={styles.formAlert} role="alert">
          {error}
        </p>
      )}

      <div className={styles.tableWrap}>
        {!items ? (
          <p className={styles.empty}>Carregando…</p>
        ) : items.length === 0 ? (
          <p className={styles.empty}>Nenhum boleto cadastrado para este cliente ainda.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Vencimento</th>
                <th className={styles.th}>Boleto</th>
                <th className={styles.th}>Valor</th>
                <th className={styles.th}>Cliente abriu</th>
                <th className={styles.th}>
                  <span className={styles.visuallyHidden}>Ações</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((b) => (
                <tr key={b.id} className={styles.plainRow}>
                  <td className={styles.td}>
                    <span className={b.dueDate ? styles.strong : styles.off}>{formatDueDate(b.dueDate)}</span>
                  </td>
                  <td className={styles.td}>
                    {boletoName(b)}
                    {b.barcode && <span className={styles.barcode}>{formatBarcode(b.barcode)}</span>}
                  </td>
                  <td className={styles.td}>
                    <span className={styles.money}>{formatMoney(b.amountCents) || '—'}</span>
                  </td>
                  <td className={styles.td}>
                    <span className={b.firstViewedAt ? styles.ok : styles.off}>
                      {b.firstViewedAt ? formatDate(b.firstViewedAt) : 'Ainda não'}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.rowActions}>
                      {b.url && (
                        <button type="button" className={styles.linkButton} onClick={() => open(b)}>
                          Abrir link
                        </button>
                      )}
                      <button
                        type="button"
                        className={styles.linkButton}
                        onClick={() => startEditing({ mode: 'edit', boleto: b })}
                      >
                        Editar
                      </button>
                      <button type="button" className={styles.linkDanger} onClick={() => setDeleting(b)}>
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ConfirmDialog
        open={!!deleting}
        title="Excluir este boleto?"
        confirmLabel="Excluir"
        danger
        busy={busy}
        onCancel={() => setDeleting(null)}
        onConfirm={confirmDelete}
      >
        {deleting && (
          <>
            {boletoName(deleting)}
            {deleting.amountCents ? `, de ${formatMoney(deleting.amountCents)}` : ''}
            {deleting.dueDate ? `, com vencimento em ${formatDueDate(deleting.dueDate)}` : ''}, some da área do cliente.
            Não dá para desfazer.
          </>
        )}
      </ConfirmDialog>
    </>
  );
}
