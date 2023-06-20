FROM node:18.16.0

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD ["node", "serveur.js"]

EXPOSE 3000