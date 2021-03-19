FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install express

COPY . .

EXPOSE 10000

CMD [ "node", "app.js" ]