FROM node:14-alpine

WORKDIR /usr/src/app

COPY rollup.config.js ./
COPY package*.json ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public

RUN yarn build

EXPOSE 3002

ENV HOST=0.0.0.0

CMD [ "yarn", "start" ]
