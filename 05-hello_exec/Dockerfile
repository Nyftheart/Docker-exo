# Utiliser l'image officielle de PostgreSQL depuis Docker Hub
FROM postgres:latest

# Copier le fichier db.sql dans le répertoire /docker-entrypoint-initdb.d/
ADD db.sql /docker-entrypoint-initdb.d/

# Définir les variables d'environnement pour PostgreSQL (le cas échéant)
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB dbname
