# edit nextjs Dockerfile
# see https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:18-alpine3.16 AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN \
  npm i pnpm --global; \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile --ignore-scripts; \
  else echo "Lockfile not found." && pnpm i; \
  fi


FROM node:18-alpine3.16 AS builder

ARG node_env
ENV NODE_ENV=${node_env}

COPY package.json  ./

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN \
  npm run bundle:server; \
  npm run bundle:pm2; \
  if [ "${NODE_ENV}" == "test" ]; then npm run build:test;\
  else npm run build; \
  fi


FROM node:18-alpine3.16 AS runner

WORKDIR /app

COPY --from=builder /app/ ./

ARG node_env
ENV NODE_ENV=${node_env}
ENV PORT 9527

EXPOSE ${PORT}

ENTRYPOINT [ "node", "server/pm2.js" ]
