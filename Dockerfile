FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN npm install -g pnpm && \
    pnpm install
EXPOSE 3001
CMD ["pnpm", "run", "start"]


