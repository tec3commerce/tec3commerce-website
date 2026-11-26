import type { Metadata } from 'next';
import { Suspense } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import LoginForm from './LoginForm';

export const metadata: Metadata = { title: 'Entrar · Tec3 Commerce' };

export default function Page() {
  return (
    <AuthShell title="Entrar" subtitle="Acesse seus boletos e arquivos da Tec3 Commerce.">
      <Suspense>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
