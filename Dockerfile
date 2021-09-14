FROM node:14-slim

WORKDIR /app

COPY package.json /app

RUN npm config set proxy 'http://192.168.36.35:3128'

RUN npm i

COPY . .

CMD ["npm","start"]
