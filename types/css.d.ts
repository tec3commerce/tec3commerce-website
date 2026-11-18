import 'react';

// Permite variáveis CSS (ex.: { '--d': '120px' }) em estilos inline.
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
