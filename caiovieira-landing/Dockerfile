FROM node:22-alpine AS builder

WORKDIR /app

# Instale pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copie apenas arquivos de dependências primeiro (cache layer)
COPY caiovieira-landing/package.json caiovieira-landing/pnpm-lock.yaml ./

# Instale dependências
RUN pnpm install --frozen-lockfile

# Copie o resto dos arquivos do projeto
COPY caiovieira-landing/ ./

# Build da aplicação
RUN pnpm run build

# Stage de produção
FROM caddy:2-alpine

# Copie o build do stage anterior
COPY --from=builder /app/dist /usr/share/caddy

# Crie Caddyfile
RUN echo ':80 { root * /usr/share/caddy; file_server; try_files {path} /index.html; }' > /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
