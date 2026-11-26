'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminClients } from '@/lib/admin';
import ClientForm from '@/components/admin/ClientForm';
import portal from '@/components/auth/portal.module.css';
import styles from '@/components/admin/admin.module.css';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Link href="/admin/clientes" className={styles.back}>
        ← Clientes
      </Link>
      <span className={portal.eyebrow}>Clientes</span>
      <h1 className={portal.title}>Novo cliente</h1>
      <p className={portal.lead}>
        Cadastre a empresa e o e-mail de acesso. O cliente recebe um convite para criar a própria senha.
      </p>
      <ClientForm
        submitLabel="Cadastrar cliente"
        onCancel={() => router.push('/admin/clientes')}
        onSubmit={async (input, sendInvite) => {
          const client = await adminClients.create({ ...input, sendInvite });
          router.push(`/admin/clientes/${client.id}?novo=${sendInvite ? 'convite' : '1'}`);
        }}
      />
    </>
  );
}
