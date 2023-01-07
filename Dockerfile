FROM node:19.4.0-buster-slim

WORKDIR /bot

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "run"]
CMD ["start"]
