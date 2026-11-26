/** Boletos: chamadas à API e formatação de valor, data e linha digitável. */

import { apiFetch } from './api';

export interface Boleto {
  id: string;
  /** Nome do boleto. */
  description: string | null;
  amountCents: number | null;
  /** AAAA-MM-DD */
  dueDate: string | null;
  /** Só números (47 ou 48). */
  barcode: string | null;
  /** Link do boleto (site do banco, Drive etc.). */
  url: string | null;
  /** Quando o cliente abriu o boleto (ou copiou a linha digitável) pela primeira vez. */
  firstViewedAt: string | null;
  createdAt: string;
}

/** Campos do formulário. Todos opcionais, mas é preciso o link ou a linha digitável. Vazio/null apaga. */
export interface BoletoFields {
  description: string;
  amountCents: number | null;
  dueDate: string;
  barcode: string;
  url: string;
}

export const adminBoletos = {
  list: (clientId: string) => apiFetch<Boleto[]>(`/admin/clients/${clientId}/boletos`),
  create: (clientId: string, fields: BoletoFields) =>
    apiFetch<Boleto>(`/admin/clients/${clientId}/boletos`, { method: 'POST', json: fields }),
  update: (id: string, fields: Partial<BoletoFields>) =>
    apiFetch<Boleto>(`/admin/boletos/${id}`, { method: 'PATCH', json: fields }),
  remove: (id: string) => apiFetch<void>(`/admin/boletos/${id}`, { method: 'DELETE' }),
  openUrl: (id: string) => apiFetch<{ url: string }>(`/admin/boletos/${id}/open`),
};

export const myBoletos = {
  list: () => apiFetch<Boleto[]>('/me/boletos'),
  openUrl: (id: string) => apiFetch<{ url: string }>(`/me/boletos/${id}/open`),
  /** Registra que o cliente viu o boleto (ao copiar a linha digitável). */
  markViewed: (id: string) => apiFetch<void>(`/me/boletos/${id}/viewed`, { method: 'POST' }),
};

/** Nome para mostrar quando o boleto não tem nome. */
export const boletoName = (b: Boleto) => b.description || 'Boleto';

/**
 * Abre o boleto numa nova aba. A aba é aberta antes de pedir o link à API: se fosse aberta depois,
 * o navegador bloquearia como pop-up.
 */
export async function openInNewTab(getUrl: () => Promise<{ url: string }>) {
  const tab = window.open('about:blank', '_blank');
  try {
    const { url } = await getUrl();
    if (tab) tab.location.href = url;
    else window.location.href = url;
  } catch (err) {
    tab?.close();
    throw err;
  }
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

/** 123456 → "R$ 1.234,56" */
export const formatMoney = (cents: number | null) => (cents == null ? '' : brl.format(cents / 100));

/** Máscara do campo de valor: os dígitos digitados viram centavos. "123456" → "1.234,56" */
export function maskMoney(input: string) {
  const digits = input.replace(/\D/g, '').replace(/^0+/, '').slice(0, 11);
  if (!digits) return '';
  const cents = digits.padStart(3, '0');
  const int = cents.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${int},${cents.slice(-2)}`;
}

/** "1.234,56" → 123456 */
export const moneyToCents = (masked: string) => Number(masked.replace(/\D/g, '') || '0');

/** 123456 → "1.234,56" (para preencher o campo ao editar) */
export const centsToMasked = (cents: number | null) => (cents ? maskMoney(String(cents)) : '');

/** "2026-12-10" → "10/12/2026" (sem passar por Date, para não mudar o dia por causa do fuso). */
export function formatDueDate(ymd: string | null) {
  if (!ymd) return 'Sem vencimento';
  const [y, m, d] = ymd.split('-');
  return `${d}/${m}/${y}`;
}

/** Linha digitável com os espaços e pontos do boleto impresso. */
export function formatBarcode(code: string | null) {
  if (!code) return '';
  if (code.length === 47) {
    return `${code.slice(0, 5)}.${code.slice(5, 10)} ${code.slice(10, 15)}.${code.slice(15, 21)} ${code.slice(21, 26)}.${code.slice(26, 32)} ${code.slice(32, 33)} ${code.slice(33)}`;
  }
  if (code.length === 48) {
    return [0, 12, 24, 36].map((i) => `${code.slice(i, i + 11)}-${code.slice(i + 11, i + 12)}`).join(' ');
  }
  return code;
}
