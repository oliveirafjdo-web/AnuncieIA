# Etapa base
FROM node:20-alpine AS base

# Ativa o corepack (gerenciador que instala pnpm)
RUN corepack enable

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos do projeto
COPY . .

# Instala dependências
RUN corepack prepare pnpm@9.0.0 --activate && pnpm install --no-frozen-lockfile

# Compila o projeto Next.js
RUN pnpm build

# Exposição da porta padrão
EXPOSE 3000

# Comando de inicialização
CMD ["pnpm", "start"]
