FROM node:14-alpine AS svelte-content-renderer

# install dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Copy all local files into the image.
COPY . .

RUN yarn build

EXPOSE 3000
CMD ["node", "./server.js"]

FROM svelte-content-renderer AS storybook

RUN yarn build-storybook
EXPOSE 6006
CMD ["npx", "http-server", "./storybook-static", "-p", "6006"]
