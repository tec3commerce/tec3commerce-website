# Site Tec3 Commerce

Site institucional da Tec3 Commerce em [Next.js](https://nextjs.org) (App Router) + React + TypeScript.

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # build de produção
npm run start    # serve o build
npm run lint     # checagem de tipos (tsc)
```

## Estrutura

```
app/
  layout.tsx            layout raiz (html, fontes, metadata padrão)
  globals.css           reset mínimo
  page.tsx / page.css   página inicial
  <rota>/page.tsx       nuvemshop, olist, marketplaces, trafego, connect, teca
  <rota>/page.css       estilos da página, escopados em .pg-<rota>
components/
  site/SiteHeader.tsx   cabeçalho e menu mobile compartilhados (client component)
  site/SimpleFooter.tsx rodapé das páginas internas
  site/PageEffects.tsx  animação de entrada [data-reveal] e autoplay dos vídeos
  site/LiveViewers.tsx  contador animado da live (home)
  teca/TecaHeader.tsx   cabeçalho e menu próprios da TEC·A
content/<pagina>.ts     textos e listas de cada página
public/assets/          imagens, logos e vídeos
```

### Onde editar

- **Textos e listas** (pedidos, depoimentos, FAQ, etapas…): `content/<pagina>.ts`.
- **Link do WhatsApp** de cada página: campo `wa` em `content/<pagina>.ts`.
- **Itens do menu**: `components/site/SiteHeader.tsx`.
- **Layout e estilos**: `app/<rota>/page.tsx` (estilos inline) e `app/<rota>/page.css` (classes e responsivo).

Os estilos de cada página ficam escopados na classe `.pg-<rota>` e os `@keyframes` levam o prefixo da página
(ex.: `index-t3-in`). Assim, páginas diferentes não sobrescrevem os estilos umas das outras na navegação.

### URLs antigas

Os endereços do site estático (`/olist.html`, `/index.html`…) redirecionam permanentemente para as novas rotas
(`/olist`, `/`). Veja `next.config.ts`.
