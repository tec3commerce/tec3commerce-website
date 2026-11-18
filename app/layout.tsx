import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tec3 Commerce',
  description: 'Agência de e-commerce: implantação, integração e operação de lojas, ERP, marketplaces e pagamentos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
