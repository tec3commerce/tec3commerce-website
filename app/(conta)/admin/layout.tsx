import type { Metadata } from 'next';
import PortalShell from '@/components/auth/PortalShell';

export const metadata: Metadata = { title: 'Admin · Tec3 Commerce' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell role="ADMIN" area="Admin">
      {children}
    </PortalShell>
  );
}
