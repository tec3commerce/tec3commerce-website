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
  layout.tsx                 layout raiz (html, metadata padrão)
  globals.css                tokens (fontes e cores) e reset
  page.tsx                   página inicial
  page.module.css            estilos da página inicial
  <rota>/page.tsx            nuvemshop, olist, marketplaces, trafego, connect, teca
  <rota>/page.module.css     estilos de cada página
components/
  site/SiteHeader.tsx        cabeçalho e menu mobile compartilhados (+ SiteHeader.module.css)
  site/SimpleFooter.tsx      rodapé das páginas internas (+ SimpleFooter.module.css)
  site/PageEffects.tsx       animação de entrada [data-reveal] e autoplay dos vídeos
  site/LiveViewers.tsx       contador animado da live (home)
  teca/TecaHeader.tsx        cabeçalho e menu próprios da TEC·A (usa app/teca/page.module.css)
content/<pagina>.ts          textos e listas de cada página
public/assets/               imagens, logos e vídeos

app/(conta)/                 área logada (o grupo "(conta)" não aparece na URL)
  layout.tsx                 SessionProvider + noindex
  login/, esqueci-senha/, redefinir-senha/
  area-do-cliente/           só para clientes logados
  admin/                     só para o admin
components/auth/             sessão, molduras (AuthShell, PortalShell) e estilos dos formulários
lib/api.ts                   cliente da API (tokens, renovação automática da sessão)
```

### Área do cliente e admin

Essas páginas conversam com a API do repositório `tec3_site_back`. Configure o endereço dela em
`NEXT_PUBLIC_API_URL` (veja `.env.example`; sem a variável, usa `http://localhost:3333`).
Na Netlify, defina `NEXT_PUBLIC_API_URL=https://api.tec3commerce.com.br`.

A sessão fica num cookie da API, então o site precisa estar no mesmo domínio dela
(`tec3commerce.com.br` e `api.tec3commerce.com.br`). Pelo endereço `*.netlify.app` o login não se mantém.

A proteção das rotas é feita no navegador pelo `PortalShell`: sem sessão vai para `/login?next=...`;
logado com o papel errado vai para a própria área. Quem garante o acesso aos dados é a API.

### Onde editar

- **Textos e listas** (pedidos, depoimentos, FAQ, etapas…): `content/<pagina>.ts`.
- **Link do WhatsApp** de cada página: campo `wa` em `content/<pagina>.ts`.
- **Itens do menu**: `components/site/SiteHeader.tsx`.
- **Estrutura da página**: `app/<rota>/page.tsx`.
- **Estilos**: `app/<rota>/page.module.css`. Não há estilos inline; todo elemento usa uma classe.
- **Fontes e cores principais**: variáveis em `app/globals.css` (`--font-sans`, `--ink`, `--violet`…).

### Como os estilos estão organizados

Cada página usa [CSS Modules](https://nextjs.org/docs/app/getting-started/css#css-modules): as classes são
locais ao arquivo, então páginas diferentes nunca se sobrescrevem. Dentro de cada `page.module.css`:

1. **`@layer page`**: regras de responsivo (`@media`), hover e grids da página.
2. **`@keyframes`** usados pela página.
3. **Classes por seção** (`/* ---------- hero ---------- */`, `servicos`, `footer`…), nomeadas como
   `<seção><Papel>` (ex.: `heroTitle`, `servicosCard`). Blocos repetidos em várias seções ficam em
   `compartilhados`.

As classes por seção ficam fora da camada e por isso têm prioridade sobre a camada `page`. Para uma regra
responsiva sobrescrever uma delas, use `!important` (como já é feito nos `@media`).

Itens de lista com cores próprias (ex.: canais dos pedidos na home, etapas da Nuvemshop) usam o campo `tone`
nos dados, renderizado como `data-tone`, e o CSS define as cores de cada tom
(`.heroRow5[data-tone='yellow'] { … }`).

### URLs antigas

Os endereços do site estático (`/olist.html`, `/index.html`…) redirecionam permanentemente para as novas rotas
(`/olist`, `/`). Veja `next.config.ts`.
