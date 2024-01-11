# Utilisez une image Node.js LTS comme base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le fichier package.json et package-lock.json pour installer les dépendances
COPY back/package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY back/ .

# Exposez le port sur lequel l'application fonctionne
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["npm", "start"]
