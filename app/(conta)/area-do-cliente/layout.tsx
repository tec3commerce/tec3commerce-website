import type { Metadata } from 'next';
import PortalShell from '@/components/auth/PortalShell';

export const metadata: Metadata = { title: 'Área do cliente · Tec3 Commerce' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell role="CLIENT" area="Área do cliente">
      {children}
    </PortalShell>
  );
}
