# Utiliser l'image de base Ubuntu
FROM ubuntu:latest

# Mettre à jour les paquets et installer le compilateur C++ et make
RUN apt-get update && \
    apt-get install -y build-essential g++ make

# Créer un répertoire de travail et copier le fichier C++
WORKDIR /app
COPY main.cpp .

# Compiler le fichier C++
RUN g++ -o main main.cpp

# Exposer le port pour accéder à l'application (si nécessaire)
EXPOSE 8080

# Définir la commande pour exécuter l'application
CMD ["./main"]

