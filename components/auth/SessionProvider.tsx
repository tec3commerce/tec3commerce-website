'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { auth, refreshSession, type SessionUser } from '@/lib/api';

type Status = 'loading' | 'authenticated' | 'anonymous';

interface SessionContextValue {
  status: Status;
  user: SessionUser | null;
  login: (email: string, password: string) => Promise<SessionUser>;
  logout: () => Promise<void>;
}

const SessionContext = createContext<SessionContextValue | null>(null);

/** Guarda quem está logado. Ao abrir a página, tenta restaurar a sessão pelo cookie de refresh. */
export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let active = true;
    refreshSession().then((u) => {
      if (!active) return;
      setUser(u);
      setStatus(u ? 'authenticated' : 'anonymous');
    });
    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const u = await auth.login(email, password);
    setUser(u);
    setStatus('authenticated');
    return u;
  }, []);

  const logout = useCallback(async () => {
    await auth.logout();
    setUser(null);
    setStatus('anonymous');
  }, []);

  const value = useMemo(() => ({ status, user, login, logout }), [status, user, login, logout]);
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession precisa estar dentro de <SessionProvider>');
  return ctx;
}
