import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResetForm from './ResetForm';

export const metadata: Metadata = { title: 'Criar senha · Tec3 Commerce' };

// Serve tanto para o convite (primeiro acesso) quanto para "esqueci minha senha".
// O título muda conforme o tipo do link, por isso a moldura fica dentro do formulário.
export default function Page() {
  return (
    <Suspense>
      <ResetForm />
    </Suspense>
  );
}
