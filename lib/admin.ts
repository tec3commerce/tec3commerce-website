/** Chamadas do admin à API (tec3_site_back). Todas exigem login de ADMIN. */

import { apiFetch } from './api';

export interface Address {
  zip?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}

export interface Client {
  id: string;
  name: string;
  tradeName: string | null;
  document: string | null;
  phone: string | null;
  address: Address | null;
  notes: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    /** false = ainda não aceitou o convite. */
    hasPassword: boolean;
    lastLoginAt: string | null;
  } | null;
}

export interface ClientInput {
  name: string;
  tradeName: string;
  document: string;
  phone: string;
  address: Address;
  notes: string;
  contactName: string;
  email: string;
}

export type ClientStatus = 'all' | 'active' | 'inactive';

export interface ClientPage {
  items: Client[];
  total: number;
  page: number;
  pageSize: number;
}

export const adminClients = {
  list(params: { search?: string; status?: ClientStatus; page?: number; pageSize?: number }) {
    const qs = new URLSearchParams();
    if (params.search) qs.set('search', params.search);
    if (params.status) qs.set('status', params.status);
    if (params.page) qs.set('page', String(params.page));
    if (params.pageSize) qs.set('pageSize', String(params.pageSize));
    return apiFetch<ClientPage>(`/admin/clients?${qs}`);
  },
  get: (id: string) => apiFetch<Client>(`/admin/clients/${id}`),
  create: (input: ClientInput & { sendInvite: boolean }) =>
    apiFetch<Client>('/admin/clients', { method: 'POST', json: input }),
  update: (id: string, input: Partial<ClientInput> & { active?: boolean }) =>
    apiFetch<Client>(`/admin/clients/${id}`, { method: 'PATCH', json: input }),
  remove: (id: string) => apiFetch<void>(`/admin/clients/${id}`, { method: 'DELETE' }),
  invite: (id: string) => apiFetch<void>(`/admin/clients/${id}/invite`, { method: 'POST' }),
};

/** 12345678000190 → 12.345.678/0001-90 (CPF também). */
export function formatDocument(doc: string | null) {
  if (!doc) return '';
  if (doc.length === 11) return doc.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  if (doc.length === 14) return doc.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  return doc;
}

export function formatDate(iso: string | null, withTime = false) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  });
}

/** Situação do acesso do cliente, para os selos da lista e do detalhe. */
export function accessStatus(c: Client): { label: string; tone: 'ok' | 'pending' | 'off' } {
  if (!c.active) return { label: 'Desativado', tone: 'off' };
  if (!c.user?.hasPassword) return { label: 'Convite pendente', tone: 'pending' };
  return { label: 'Ativo', tone: 'ok' };
}
