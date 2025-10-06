FROM node:20-alpine

# habilita pnpm via corepack
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["pnpm","start"]
