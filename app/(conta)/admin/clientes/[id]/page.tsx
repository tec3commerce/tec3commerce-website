'use client';

import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { ApiError } from '@/lib/api';
import { accessStatus, adminClients, formatDate, formatDocument, type Client } from '@/lib/admin';
import ClientForm from '@/components/admin/ClientForm';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import BoletosPanel from '@/components/admin/BoletosPanel';
import portal from '@/components/auth/portal.module.css';
import styles from '@/components/admin/admin.module.css';

type Tab = 'dados' | 'boletos' | 'arquivos';
const TABS: [Tab, string][] = [
  ['dados', 'Dados'],
  ['boletos', 'Boletos'],
  ['arquivos', 'Arquivos'],
];

type Confirm = 'delete' | 'deactivate' | null;

function ClientDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const params = useSearchParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>('dados');
  const [notice, setNotice] = useState<string | null>(() => {
    const novo = params.get('novo');
    if (novo === 'convite') return 'Cliente cadastrado. O convite para criar a senha foi enviado por e-mail.';
    if (novo) return 'Cliente cadastrado. Envie o convite quando quiser liberar o acesso.';
    return null;
  });
  const [actionError, setActionError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirm, setConfirm] = useState<Confirm>(null);

  useEffect(() => {
    adminClients
      .get(id)
      .then(setClient)
      .catch((err) => setLoadError(err instanceof ApiError && err.status === 404 ? 'Cliente não encontrado.' : err.message));
  }, [id]);

  async function run(action: () => Promise<void>) {
    setBusy(true);
    setActionError(null);
    setNotice(null);
    try {
      await action();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : 'Algo deu errado. Tente novamente.');
    } finally {
      setBusy(false);
      setConfirm(null);
    }
  }

  if (loadError) {
    return (
      <>
        <Link href="/admin/clientes" className={styles.back}>
          ← Clientes
        </Link>
        <p className={styles.formAlert} role="alert">
          {loadError}
        </p>
      </>
    );
  }

  if (!client) return <p className={portal.lead}>Carregando…</p>;

  const st = accessStatus(client);
  const canInvite = client.active && !client.user?.hasPassword;

  return (
    <>
      <Link href="/admin/clientes" className={styles.back}>
        ← Clientes
      </Link>
      <div className={styles.head}>
        <div className={styles.headText}>
          <span className={portal.eyebrow}>Cliente</span>
          <h1 className={portal.title}>{client.tradeName || client.name}</h1>
          <p className={styles.headMeta}>
            <span className={styles[st.tone]}>{st.label}</span>
            {client.tradeName && <span>{client.name}</span>}
            {client.document && <span>{formatDocument(client.document)}</span>}
          </p>
        </div>
      </div>

      <div className={styles.tabs} role="tablist">
        {TABS.map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            className={styles.tab}
            aria-selected={tab === value}
            onClick={() => setTab(value)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'dados' && (
        <>
          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>Acesso</h2>
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>E-mail de acesso</dt>
                <dd className={styles.factValue}>{client.user?.email}</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Último acesso</dt>
                <dd className={styles.factValue}>{formatDate(client.user?.lastLoginAt ?? null, true) || 'Nunca entrou'}</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Cadastrado em</dt>
                <dd className={styles.factValue}>{formatDate(client.createdAt)}</dd>
              </div>
            </dl>
            <div className={styles.actions}>
              {canInvite && (
                <button
                  type="button"
                  className={styles.ghost}
                  disabled={busy}
                  onClick={() =>
                    run(async () => {
                      await adminClients.invite(client.id);
                      setNotice(`Convite enviado para ${client.user?.email}. O link vale por 7 dias.`);
                    })
                  }
                >
                  Enviar convite de novo
                </button>
              )}
              {client.active ? (
                <button type="button" className={styles.ghost} disabled={busy} onClick={() => setConfirm('deactivate')}>
                  Desativar acesso
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.ghost}
                  disabled={busy}
                  onClick={() =>
                    run(async () => {
                      setClient(await adminClients.update(client.id, { active: true }));
                      setNotice('Acesso reativado.');
                    })
                  }
                >
                  Reativar acesso
                </button>
              )}
              <button type="button" className={styles.dangerGhost} disabled={busy} onClick={() => setConfirm('delete')}>
                Excluir cliente
              </button>
            </div>
            {notice && (
              <p className={styles.notice} role="status">
                {notice}
              </p>
            )}
            {actionError && (
              <p className={styles.formAlert} role="alert">
                {actionError}
              </p>
            )}
          </section>

          <ClientForm
            client={client}
            submitLabel="Salvar alterações"
            onSubmit={async (input) => {
              setClient(await adminClients.update(client.id, input));
            }}
          />
        </>
      )}

      {tab === 'boletos' && <BoletosPanel clientId={client.id} />}

      {tab === 'arquivos' && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Arquivos</h2>
          <p className={styles.panelText}>
            Aqui você vai enviar contratos, relatórios e outros documentos para o cliente. Chega na próxima etapa.
          </p>
        </section>
      )}

      <ConfirmDialog
        open={confirm === 'deactivate'}
        title="Desativar o acesso?"
        confirmLabel="Desativar"
        busy={busy}
        onCancel={() => setConfirm(null)}
        onConfirm={() =>
          run(async () => {
            setClient(await adminClients.update(client.id, { active: false }));
            setNotice('Acesso desativado. O cliente não consegue mais entrar até você reativar.');
          })
        }
      >
        {client.tradeName || client.name} deixa de entrar na área do cliente na hora. Os dados continuam guardados e você
        pode reativar quando quiser.
      </ConfirmDialog>

      <ConfirmDialog
        open={confirm === 'delete'}
        title="Excluir este cliente?"
        confirmLabel="Excluir de vez"
        danger
        busy={busy}
        onCancel={() => setConfirm(null)}
        onConfirm={() =>
          run(async () => {
            await adminClients.remove(client.id);
            router.replace('/admin/clientes');
          })
        }
      >
        Apaga o cadastro e o login de {client.tradeName || client.name}, junto com os boletos e arquivos dele. Não dá para
        desfazer. Se for só uma pausa, prefira desativar o acesso.
      </ConfirmDialog>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ClientDetail />
    </Suspense>
  );
}
