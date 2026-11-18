'use client';

import { useEffect, useState } from 'react';

/** Contador de "espectadores" da live simulada: oscila levemente a cada 1,4 s. */
export default function LiveViewers({ initial = 1284 }: { initial?: number }) {
  const [viewers, setViewers] = useState(initial);

  useEffect(() => {
    const iv = setInterval(() => {
      setViewers((v) => Math.max(900, v + Math.round(Math.random() * 14 - 4)));
    }, 1400);
    return () => clearInterval(iv);
  }, []);

  return <>{viewers.toLocaleString('pt-BR')}</>;
}
