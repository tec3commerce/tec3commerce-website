'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { accessStatus, adminClients, formatDocument, type ClientPage, type ClientStatus } from '@/lib/admin';
import portal from '@/components/auth/portal.module.css';
import styles from '@/components/admin/admin.module.css';

const PAGE_SIZE = 20;

const FILTERS: [ClientStatus, string][] = [
  ['all', 'Todos'],
  ['active', 'Ativos'],
  ['inactive', 'Desativados'],
];

export default function Page() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ClientStatus>('all');
  const [page, setPage] = useState(1);
  const [data, setData] = useState<ClientPage | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Espera a pessoa parar de digitar antes de buscar.
  useEffect(() => {
    const t = setTimeout(() => {
      setQuery(search.trim());
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    let cancelled = false;
    adminClients
      .list({ search: query, status, page, pageSize: PAGE_SIZE })
      .then((d) => {
        if (!cancelled) {
          setData(d);
          setError(null);
        }
      })
      .catch((err) => !cancelled && setError(err.message));
    return () => {
      cancelled = true;
    };
  }, [query, status, page]);

  const pages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1;

  return (
    <>
      <Link href="/admin" className={styles.back}>
        ← Painel
      </Link>
      <div className={styles.head}>
        <div className={styles.headText}>
          <span className={portal.eyebrow}>Admin</span>
          <h1 className={portal.title}>Clientes</h1>
        </div>
        <Link href="/admin/clientes/novo" className={styles.primary}>
          + Novo cliente
        </Link>
      </div>

      <div className={styles.toolbar}>
        <input
          type="search"
          className={styles.search}
          placeholder="Buscar por nome, CNPJ ou e-mail"
          aria-label="Buscar clientes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.filters} role="group" aria-label="Filtrar por situação">
          {FILTERS.map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={styles.filter}
              aria-pressed={status === value}
              onClick={() => {
                setStatus(value);
                setPage(1);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className={styles.formAlert} role="alert">
          {error}
        </p>
      )}

      <div className={styles.tableWrap}>
        {!data ? (
          <p className={styles.empty}>Carregando…</p>
        ) : data.items.length === 0 ? (
          <p className={styles.empty}>
            {query || status !== 'all' ? 'Nenhum cliente encontrado com esses filtros.' : 'Nenhum cliente cadastrado ainda.'}
          </p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Cliente</th>
                <th className={styles.th}>Responsável</th>
                <th className={styles.th}>Acesso</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((c) => {
                const st = accessStatus(c);
                const href = `/admin/clientes/${c.id}`;
                return (
                  <tr key={c.id} className={styles.row} onClick={() => router.push(href)}>
                    <td className={styles.td}>
                      <Link href={href} className={styles.rowLink} onClick={(e) => e.stopPropagation()}>
                        {c.tradeName || c.name}
                      </Link>
                      <span className={styles.sub}>
                        {[c.tradeName ? c.name : null, formatDocument(c.document)].filter(Boolean).join(' · ')}
                      </span>
                    </td>
                    <td className={styles.td}>
                      {c.user?.name}
                      <span className={styles.sub}>{c.user?.email}</span>
                    </td>
                    <td className={styles.td}>
                      <span className={styles[st.tone]}>{st.label}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {data && data.total > PAGE_SIZE && (
        <div className={styles.pager}>
          <span>
            Página {page} de {pages} · {data.total} clientes
          </span>
          <div className={styles.pagerButtons}>
            <button type="button" className={styles.ghost} disabled={page <= 1} onClick={() => setPage(page - 1)}>
              Anterior
            </button>
            <button type="button" className={styles.ghost} disabled={page >= pages} onClick={() => setPage(page + 1)}>
              Próxima
            </button>
          </div>
        </div>
      )}
    </>
  );
}
