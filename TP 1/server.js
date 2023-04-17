"use strict";


/* Ces lignes de code importent le module Express et créent une instance de l'application Express. La
variable `app` est utilisée pour configurer et exécuter le serveur. */

var express = require('express');
var app = express();



/* importe le module Node.js intégré `path`, qui fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires. */
const path =require('path');



// Ces lignes de code importent les modules `index` et `contact` des fichiers `./routes/index` et`./routes/contact`.
const index = require('./routes/index');
const contact = require('./routes/contact');



// importe le module `contact` du fichier`./routes/contact` et l'assigne à la constante `postrouter`. 
const postrouter = require('./routes/contact');

// Ces lignes de code servent des fichiers statiques du répertoire "public".

app.use("/public", express.static(path.join(__dirname + "/public/")));
app.use(express.static(path.join(__dirname, 'public')));



// Importe les articles
const { posts } = require('./utiles/articles');

const { sendEmail } = require("./config/nodemailer");

// Déclaration d'un parser pour analyser "le corps (body)" d'une requête entrante avec POST  
// Permet donc d'analyser

app.use(express.urlencoded({ extended: false }));


// set the view engine to ejs
app.set('view engine', 'ejs');








/* Ce bloc de code gère une demande POST au point de terminaison '/contact'. Il extrait les valeurs des
champs 'name', 'email' et 'message' du corps de la requête à l'aide de l'objet 'req.body'. Il
appelle ensuite la fonction 'sendEmail' avec ces valeurs. */

/*  app.post('/contact', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message; 
  

  
  sendEmail(name,email, message);
  
  if (!name || !email || !message) {
    res.render('pages/contact',{
      messageError : "Veuillez remplir tous les champs requis SVP...!"
    })
    
 } 
  res.render('pages/donnees', {
    name: name,
    email: email,
    message: message,
    messageSuccess: "Votre message a bien été envoyé."
  });
});  */ 

app.post('/contact', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message; 

  
  if (!name || !email || !message) {
    res.render('pages/contact',{
      messageError : "Veuillez remplir tous les champs requis SVP...!"
    });
  } else {
    res.render('pages/donnees', {
      name: name,
      email: email,
      message: message,
      messageSuccess: "Votre message a bien été envoyé."
    });
    sendEmail(name,email, message);
  }
});





// portfolio page
app.get('/', (req, res) => {
  
  
  res.render('pages/portfolio', {
    posts: posts,
    
  });
});


// accueil page
app.get('/accueil', (req, res) => {
  res.render('pages/accueil');

});

// contact page

app.get('/contact', (req, res) => {
  res.render('pages/contact',{
    messageError: ""
  });

});

// post page

app.use('/contact', contact);
app.use(index)




// page erreur 404

app.use((req,res) =>{
  res.render('pages/erreur404');
})

 app.use('/contact', postrouter);
 
const SERVER = "http://localhost:4000/accueil" 

app.listen(4000);
console.log('Server is listening on port 4000  '+ SERVER);

