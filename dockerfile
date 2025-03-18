FROM node:lts as dependencies
WORKDIR /gorbunov
COPY package.json npm run.lock ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /gorbunov
COPY . .
COPY --from=dependencies /gorbunov/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /gorbunov
ENV NODE_ENV production

COPY --from=builder /gorbunov/public ./public
COPY --from=builder /gorbunov/package.json ./package.json
COPY --from=builder /gorbunov/.next ./.next
COPY --from=builder /gorbunov/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]