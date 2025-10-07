# Base Node
FROM node:20-alpine

# Ativa o corepack (necessário para pnpm)
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# Define pasta de trabalho
WORKDIR /app

# Copia apenas os manifests primeiro (melhor cache)
COPY package.json pnpm-lock.yaml* ./

# Instala dependências
RUN pnpm install

# Copia todo o código
COPY . .

# Compila o projeto
RUN pnpm build

# Expõe porta padrão
EXPOSE 3000

# Comando de inicialização
CMD ["pnpm", "start"]
