# Installation de Node.js

Pour faire fonctionner le projet, installé la version 18.2.0 de Node.js

lien vers le site node.js: https://nodejs.org/en/

# Lancer le backend du projet

- Ouvrez le dossier dans votre editeur
- Ouvrez votre terminal 'Ctrl + MAJ + P' sous visual studio code
- Rendez vous dans le sous dossier 'backend' via la commande 'cd frontend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet 

# ATTENTION
# SI VOUS RENCONTRER UNE ERREUR LORS DE L'UPLOAD D'IMAGE LORS D'UNE PUBLICATION VEUILLEZ VOUS RENDRE A CETTE ENDROIT 'backend/node_modules/fs-temp/lib/write-stream.js'
# A LA LIGNE 6 REMPLACER LE CONTENU ######### PAR 'WriteStream.call(this, '', options)' (SANS LES GUILLEMETS DE DEBUT ET DE FIN)

