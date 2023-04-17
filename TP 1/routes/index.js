"use strict";

/* Ces lignes de code importent le framework Express et créent un nouvel objet routeur. L'objet routeur
est utilisé pour définir des routes pour gérer les requêtes HTTP dans l'application. */

const express = require('express');
const router = express.Router();


// Importe les articles
const { posts } = require('../utiles/articles');



/* Ce code définit une route pour la méthode GET sur le chemin '/post/:id', où ':id' est un paramètre
qui peut être n'importe quelle valeur. Lorsqu'une demande est faite à cette route, le code récupère
la valeur du paramètre 'id' de l'objet de requête, recherche une publication avec cet identifiant
dans le tableau 'posts' et affiche la vue 'pages/post' avec le publier les données et le titre de la
page. Si aucun message n'est trouvé avec l'identifiant donné, il affiche la vue 'pages/erreur404' à
la place. */

router.get('/post/:id', (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id == id);

  if (post === undefined) {
    res.render('pages/erreur404');
  };

  res.render('pages/post', {
    post: post,
    pageTitle : post.name
  
});
});



// exporte l'objet `router` afin qu'il puisse être utilisé dans d'autres fichiers. Cela permet à d'autres fichiers d'accéder et d'utiliser les routes définies dans ce fichier.
module.exports = router;



