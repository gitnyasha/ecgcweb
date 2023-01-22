# Install dependencies only when needed
FROM node:16.13.2 AS deps

WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN yarn install --frozen-lockfile

FROM node:16.13.2 AS builder

ENV NODE_ENV=production
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN yarn build

FROM node:16.13.2 AS runner

ARG X_TAG
WORKDIR /opt/app
ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]

