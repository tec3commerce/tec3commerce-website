import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SessionProvider from '@/components/auth/SessionProvider';
import { PORTAL_ENABLED } from '@/lib/portal';

// Login, área do cliente e admin: fora dos buscadores.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function ContaLayout({ children }: { children: React.ReactNode }) {
  // Portal desligado: login, área do cliente e admin não existem para o visitante.
  if (!PORTAL_ENABLED) notFound();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..800&display=swap"
        precedence="default"
      />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}
