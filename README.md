# Installation de Node.js

Pour faire fonctionner le projet, installé la version 18.2.0 de Node.js

lien vers le site node.js: https://nodejs.org/en/

# Lancer le backend du projet

- Ouvrez le dossier dans votre editeur
- Rendez vous dans backend/config/ Puis créer un fichier '.env' (SANS LES GUILLEMETS DE DEBUT ET DE FIN)
- faite un copié/collé de ceci :
                                    PORT=5000
                                    CLIENT_URL=http://localhost:3000
                                    TOKEN_SECRET=RANDOM_TOKEN_KEY
                                    DB_USER_PASS= ici vos identifiant (ex: Admin_db:Admin123) 
                                    DB_NAME= ici le nom de vote base de donné

- Complétez dans le fichier 'DB_USER_PASS' et 'DB_NAME' par rapport a votre cluster
- Ouvrez votre terminal 'Ctrl + MAJ + P' sous visual studio code
- Rendez vous dans le sous dossier 'backend' via la commande 'cd frontend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet 

# ATTENTION

SI VOUS RENCONTRER UNE ERREUR LORS DE L'UPLOAD D'IMAGE LORS D'UNE PUBLICATION VEUILLEZ VOUS RENDRE A CETTE ENDROIT 'backend/node_modules/fs-temp/lib/write-stream.js':

- A LA LIGNE 6 REMPLACER LE CONTENU ######### PAR 'WriteStream.call(this, '', options)' (SANS LES GUILLEMETS DE DEBUT ET DE FIN)

# Lancer le frontend du projet

- Ouvrez un nouveau terminal 'Ctrl + MAJ + P' sous visual studio code
- Rendez vous dans le sous dossier 'frontend' via la commande 'cd frontend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet