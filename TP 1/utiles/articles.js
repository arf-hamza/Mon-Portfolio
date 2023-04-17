
'use strict';



// Importe les articles

var articles = [
    {
      id: 1, 
      name: 'Site Streaming IMDB', 
      language: "HTML, CSS", 
      year: "2022", 
      image: "/images/imdb.jpg", 
      video:"/images/imdb_video.mp4",
      description: "- Site IMDB créé avec HTML et CSS, avec cinq pages et une page de détails et valeur,Le site web Netflix permet aux utilisateurs de regarder des films en ligne via leur ordinateur, leur téléphone portable, leur tablette ou leur télévision connectée." 
      +"Les utilisateurs peuvent choisir parmi une sélection de titres dans différentes catégories telles que les films d'action, les comédies, les drames, les documentaires,"
    + "et bien plus encore"},
    {
      id: 2, 
      name: 'Test de Covid 19', 
      language: "Javascript", 
      year: "2022", 
      image: "/images/test_covid.jpg", 
      video: "/images/test_covid_video.mp4", 
      description:"- Un test covid creer avec javascript qui demande en premier sur combien de jour on veut faire l'analyse et ensuite il prent la consommation de chaque jour pour qu'il puissent donner au final le resultat du test pour chaque individue selon son cas et sa situation particuliaire ." },
    {
      id: 3, 
      name: 'Un Jeu de Memoire', 
      language: "Javascript, HTML, CSS", 
      year: "2022", 
      image: "/images/jeu_de_memoire.jpg", 
      video: "/images/jeu_memoire_video.mp4",
      description:"- Un jeu de mémoire qui teste la capacité d'un joueur à se souvenir et à retrouver des paires de cartes. Le jeu peut être joué sur un ordinateur, une tablette ou un smartphone via un navigateur web, avec un compteur de cinq minutes."+
      "Le jeu commence par afficher un certain nombre de cartes, chacune avec un chiffre dessus. Les cartes sont mélangées et retournées face cachée. Le joueur doit ensuite retourner deux cartes à la fois, en essayant de trouver deux cartes identiques."+
      " Si les cartes retournées sont identiques, elles restent face visible en vert. Si les cartes ne sont pas identiques elles s'affichent en rouge et apres une seconde elles sont retournées face cachée et le joueur doit continuer à chercher des paires jusqu'à ce qu'il ait trouvé toutes les cartes correspondantes."},
    {
      id: 4, 
      name: 'Agence de Voyage au Japon', 
      language: "HTML, CSS", 
      year: "2022", 
      image: "/images/voyage_au_japon.jpg", 
      video:"/images/voyage_au_japon_video.mp4",
      description:"- Site d'une agence de voyage qui organise des voyages organisé au japon, créer en HTML et CSS avec trois pages dont une page d'accueil, une page de détails pour chaque ville a visiter pendant le voyage et une page de contact avec l'agence de voyage."},
    {
      id: 5, 
      name: 'Maquette Graphique et Layout', 
      language: "FIGMA", 
      year: "2023", 
      image: "/images/figma_baseball.jpg", 
      video:"/images/figma_baseball_video.mp4",
      description:"- Maquette graphique créer avec Figma pour un site de vente des equipements de baseball. Cela comprend la disposition des catégories de produits" +
      ", des images de produits, des descriptions, des options de personnalisation, des informations de paiement et de livraison, et plus encore."
    }];



// On exporte le tableau d'articles pour pouvoir l'utiliser dans les routes
exports.posts = articles;