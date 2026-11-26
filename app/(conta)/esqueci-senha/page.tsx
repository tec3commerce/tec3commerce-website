import type { Metadata } from 'next';
import { Suspense } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import ForgotForm from './ForgotForm';

export const metadata: Metadata = { title: 'Esqueci minha senha · Tec3 Commerce' };

export default function Page() {
  return (
    <AuthShell title="Esqueci minha senha" subtitle="Informe seu e-mail e enviaremos um link para criar uma nova senha.">
      <Suspense>
        <ForgotForm />
      </Suspense>
    </AuthShell>
  );
}
