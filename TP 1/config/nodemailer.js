// Configuration du serveur SMTP

const nodemailer = require('nodemailer');
const mail_sender = "sender.test@gmail.com" ;
// Configuration du serveur SMTP copié depuis Mailtrap
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
/*       user: "5a4302ec450e78",
      pass: "535a9c613c4f5b" */
      user: "435238903ac33b",
      pass: "3e94473f7f5a81"
    }
  });

// sendEmail sera la fonction qui permet d'envoyer un courriel
// On pourra l'appeler à partir d'un autre fichier quand on aura besoin d'envoyer un courriel
const sendEmail = (name,email ,message) => {
    transport.sendMail({
      from: mail_sender,
      to: "hamza.arfaoui03@outlook.fr",
      subject: "Vous avez un message",
      html: `<h1>Message</h1>
          <h2>${name}</h2>
            <h2>${email}</h2>
          <p>${message}</p>`,
    }).catch (err => ('pages/erreur404'));
  };

// Exporter le module pour pouvoir l'utiliser dans d'autres fichiers.
exports.sendEmail = sendEmail;
