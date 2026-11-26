/**
 * Liga/desliga o portal (login, área do cliente e admin).
 * Desligado (padrão), essas rotas respondem 404 e os links somem do site.
 * Para ligar: NEXT_PUBLIC_PORTAL_ENABLED=true no ambiente do build.
 */
export const PORTAL_ENABLED = process.env.NEXT_PUBLIC_PORTAL_ENABLED === 'true';
