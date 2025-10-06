# AnuncieIA Studio — Redutron (sem integração ML)

Gere textos com quebra de objeções, baixe fotos de anúncio, edite imagens com IA, crie banners e cheque a posição do seu anúncio nas buscas — **sem autenticação no Mercado Livre** (usa apenas APIs públicas).

## Requisitos
- Node.js 20+
- pnpm 9+
- (opcional) OPENAI_API_KEY para edição IA real

## Rodando local
```bash
pnpm install
pnpm dev
# http://localhost:3000
```

## Variáveis (.env)
```
OPENAI_API_KEY= # opcional (para edição IA real)
NEXT_PUBLIC_API_BASE_URL= # opcional
```

## Deploy no Render (serviço único)
- Crie Web Service com Dockerfile: `render/web.Dockerfile`
- Porta: 3000
- Variáveis: OPENAI_API_KEY (se for usar IA real), NEXT_PUBLIC_API_BASE_URL (igual à URL pública)
- Build: automático via Dockerfile

## Módulos
- /gerar-texto → /api/gerar-texto
- /simular-objeções → usa /api/gerar-texto (tipo objeções)
- /baixar-fotos → /api/baixar-fotos (API pública ML /items/:id)
- /rank-anuncio → /api/rank-anuncio (API pública ML /sites/MLB/search)
- /editar-fotos → /api/editar-foto (placeholder; substitua por provider IA)
- /gerar-banners → canvas client-side (download PNG)
- /analisar-descricao → /api/analisar-descricao (heurística local)
- /tags → /api/gerar-tags (heurística local)

## Observações
- Endpoints públicos do Mercado Livre possuem limites; não abuse de chamadas em sequência.
- A rota /api/editar-foto é um **placeholder** que apenas devolve a imagem. Para IA real, implemente provider de image editing.
