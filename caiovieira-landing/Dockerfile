FROM node:22-alpine AS builder

WORKDIR /app

# Instale pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copie apenas arquivos de dependências primeiro (cache layer)
COPY package.json pnpm-lock.yaml ./

# Instale dependências
RUN pnpm install --frozen-lockfile

# Copie o resto dos arquivos do projeto
COPY . ./

# Build da aplicação
RUN pnpm run build

# Stage de produção
FROM caddy:2-alpine

# Copie o build do stage anterior
COPY --from=builder /app/dist /usr/share/caddy

# Crie Caddyfile com sintaxe correta
RUN printf ':80 {\n  root * /usr/share/caddy\n  file_server\n  try_files {path} /index.html\n}\n' > /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]