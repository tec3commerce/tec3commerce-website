import type { NextConfig } from 'next';

const legacyPages = ['nuvemshop', 'olist', 'marketplaces', 'trafego', 'connect', 'teca'];

const nextConfig: NextConfig = {
  // Mantém funcionando os links antigos do site estático (ex.: /olist.html -> /olist).
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...legacyPages.map((p) => ({ source: `/${p}.html`, destination: `/${p}`, permanent: true })),
    ];
  },
};

export default nextConfig;
