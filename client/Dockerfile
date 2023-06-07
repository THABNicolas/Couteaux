FROM node:lts-alpine

# Installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

# Définit le dossier de travail à l'intérieur de l'image
WORKDIR /app

# Copie les fichiers de configuration pour l'installation des dépendances
COPY package*.json ./
COPY package-lock.json ./

# Installe les dépendances du projet
RUN npm install

# Copie les fichiers et dossiers de votre projet dans l'image
COPY . .

# Construit l'application pour la production en la minifiant
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]