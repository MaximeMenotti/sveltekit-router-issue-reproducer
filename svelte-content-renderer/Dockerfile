FROM node:14-alpine

# install dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Copy all local files into the image.
COPY . .

RUN yarn build

EXPOSE 3000
CMD ["node", "./server.js"]
