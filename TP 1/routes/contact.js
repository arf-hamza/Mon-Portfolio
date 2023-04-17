"use strict";

/* Ces lignes de code importent le framework Express et créent un objet routeur. L'objet routeur est
utilisé pour définir des routes pour gérer les requêtes HTTP dans l'application. */

const express = require('express');
const router = express.Router();

// Importe la fonction sendEmail du fichier nodemailer.js
const { sendEmail } = require("../config/nodemailer");

// Reçoit les données d'un formulaire de contact
// avec un titre et un contenu
router.post('/donnees', (req, res) => {
  
  const { name, email,message } = req.body;
  
  // Envoie un courriel avec le titre et le contenu
  sendEmail(name,email, message);

  

  // Redirige vers la page d'accueil
  res.redirect('/');
});








// exporte l'objet `router` afin qu'il puisse être utilisé dans d'autres fichiers. Cela permet à d'autres fichiers d'accéder et d'utiliser les routes définies dans ce fichier.

module.exports = router;