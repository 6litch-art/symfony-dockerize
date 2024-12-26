ARG PUBLIC_PATH=/
FROM node:18-alpine as builder
ARG PUBLIC_PATH
WORKDIR /app

RUN apk add --no-cache --virtual .gyp \
        g++ make py3-pip

RUN yarn global add @quasar/cli

COPY ./deployments/docker/typesense/dashboard/package.json ./deployments/docker/typesense/dashboard/yarn.lock ./
RUN yarn install

COPY ./deployments/docker/typesense/dashboard .

RUN quasar build

RUN apk del .gyp

FROM caddy:2-alpine
ARG PUBLIC_PATH
WORKDIR /srv
COPY --from=builder /app/dist/spa/ .${PUBLIC_PATH}

RUN apk add envsubst
RUN ln -s .${PUBLIC_PATH}/config.json /srv/config.json 

EXPOSE 80