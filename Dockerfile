FROM node:lts-alpine

WORKDIR /code

ADD package*.json ./
RUN npm ci

COPY . .
EXPOSE 3000

CMD [ "node", "--inspect=0.0.0.0", "index.js"]