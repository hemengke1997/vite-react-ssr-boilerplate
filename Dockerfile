FROM node:16-alpine3.15 as build
WORKDIR /app
COPY . .
RUN npm install -g pnpm && \
    pnpm install
ARG ENV
ENV NODE_ENV=${ENV}
RUN pnpm run build

FROM node:16-alpine3.15
WORKDIR /app
COPY --from=build /app .
ARG ENV
ENV NODE_ENV=${ENV}
EXPOSE 3001
CMD ["npm", "run", "ssr"]
