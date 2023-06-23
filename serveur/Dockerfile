FROM node:18.16.0

RUN npm install -g http-server

# Définir les variables d'environnement
ENV DB_SERVER=mon_serveur
ENV DB_USER=mon_utilisateur
ENV DB_PASSWORD=mon_mot_de_passe
ENV DB_DATABASE=ma_base_de_donnees

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD ["node", "serveur.js"]

EXPOSE 3000