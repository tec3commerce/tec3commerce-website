/**
 * Cliente HTTP da API (tec3_site_back).
 *
 * - O access token fica só em memória (nunca em localStorage).
 * - O refresh token é um cookie httpOnly da API; por isso as chamadas usam credentials: 'include'.
 * - Se uma chamada autenticada der 401, renova a sessão uma vez e tenta de novo.
 */

export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333').replace(/\/$/, '');

export type Role = 'ADMIN' | 'CLIENT';

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  client: { id: string; name: string } | null;
}

interface SessionResponse {
  accessToken: string;
  expiresIn: number;
  user: SessionUser;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    /** Erros de validação por campo (path no formato /campo). */
    public issues: { path: string; message: string }[] = [],
  ) {
    super(message);
  }
}

let accessToken: string | null = null;
let refreshing: Promise<SessionUser | null> | null = null;

async function request<T>(path: string, init: RequestInit & { json?: unknown } = {}): Promise<T> {
  const { json, headers, ...rest } = init;
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...rest,
      credentials: 'include',
      headers: {
        ...(json !== undefined ? { 'content-type': 'application/json' } : {}),
        ...headers,
      },
      body: json !== undefined ? JSON.stringify(json) : rest.body,
    });
  } catch {
    throw new ApiError(0, 'NETWORK_ERROR', 'Não foi possível conectar. Verifique sua internet e tente de novo.');
  }

  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(
      res.status,
      data?.error ?? 'ERROR',
      data?.message ?? 'Algo deu errado. Tente novamente.',
      Array.isArray(data?.issues) ? data.issues : [],
    );
  }
  return data as T;
}

/** Chamada autenticada (Bearer). Renova a sessão e repete uma vez se o token tiver expirado. */
export async function apiFetch<T>(path: string, init: RequestInit & { json?: unknown } = {}): Promise<T> {
  const withAuth = () =>
    request<T>(path, {
      ...init,
      headers: { ...init.headers, ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}) },
    });
  try {
    return await withAuth();
  } catch (err) {
    if (!(err instanceof ApiError) || err.status !== 401) throw err;
    const user = await refreshSession();
    if (!user) throw err;
    return withAuth();
  }
}

function startSession(data: SessionResponse) {
  accessToken = data.accessToken;
  return data.user;
}

export const auth = {
  async login(email: string, password: string) {
    return startSession(await request<SessionResponse>('/auth/login', { method: 'POST', json: { email, password } }));
  },

  async logout() {
    accessToken = null;
    await request('/auth/logout', { method: 'POST' }).catch(() => undefined);
  },

  forgotPassword(email: string) {
    return request<void>('/auth/forgot-password', { method: 'POST', json: { email } });
  },

  checkToken(token: string) {
    return request<{ type: 'INVITE' | 'RESET'; email: string; name: string }>('/auth/check-token', {
      method: 'POST',
      json: { token },
    });
  },

  resetPassword(token: string, password: string) {
    return request<void>('/auth/reset-password', { method: 'POST', json: { token, password } });
  },
};

/**
 * Restaura/renova a sessão pelo cookie de refresh. Devolve null se não houver sessão.
 * Chamadas simultâneas compartilham a mesma requisição (o refresh token é de uso único).
 */
export function refreshSession(): Promise<SessionUser | null> {
  refreshing ??= request<SessionResponse>('/auth/refresh', { method: 'POST' })
    .then(startSession)
    .catch(() => {
      accessToken = null;
      return null;
    })
    .finally(() => {
      refreshing = null;
    });
  return refreshing;
}

/** Página inicial de cada papel depois do login. */
export const homeFor = (role: Role) => (role === 'ADMIN' ? '/admin' : '/area-do-cliente');

/** Aceita só caminhos internos no ?next= (evita redirecionar para outro site). */
export function safeNext(next: string | null | undefined) {
  return next && next.startsWith('/') && !next.startsWith('//') && !next.startsWith('/\\') ? next : null;
}
