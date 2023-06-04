// Importation des dépendances nécessaires.
import axios from 'axios'; // Pour faire des requêtes HTTP.
import CookieJS from 'js-cookie'; // Pour gérer les cookies.
import validator from 'validator'; // Pour valider les entrées du formulaire.
import { displayErrorMessages } from '../helpers'; // Pour afficher les erreurs.
import ViewSignIn from '../views/singin'; // Vue de la page de connexion.

// Définition de la classe SignIn.
const SignIn = class SignIn {
  constructor(router) {
    // L'objet router est passé au constructeur et enregistré dans l'instance de la classe.
    this.router = router;
    this.run();
  }

  // Méthode pour vérifier les données du formulaire de connexion.
  checkForm(params, callback) {
    const errors = [];

    // Vérification si l'email est valide.
    if (!validator.isEmail(params.email)) {
      errors.push({ email: 'Email invalid' });
    }

    // Vérification si le mot de passe n'est pas vide.
    if (params.password === '') {
      errors.push({ password: 'Empty password' });
    }

    // Renvoie les erreurs à la fonction de callback.
    callback(errors);
  }

  // Méthode pour gérer l'événement de clic sur le bouton de soumission du formulaire.
  onHandleClick() {
    const elForm = document.querySelector('form');
    const elButton = document.querySelector('button');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Récupère les données du formulaire.
      const formData = Array.from(new FormData(elForm, elButton));
      const params = {
        email: formData[0][1],
        password: formData[1][1]
      };

      // Vérifie les données du formulaire.
      this.checkForm(params, (errors) => {
        if (errors.length > 0) {
          // Si des erreurs sont détectées, elles sont affichées.
          displayErrorMessages('#form-singin', errors);
        } else {
          // Si aucune erreur n'est détectée, une requête HTTP est envoyée pour se connecter.
          axios.get(`http://localhost:3000/auth/signin?email=${params.email}&password=${params.password}`)
            .then((response) => {
              // Si la requête réussit, le token JWT est récupéré et stocké dans un cookie.
              const { token } = response.data;
              CookieJS.set('jwtToken', token, { expires: 90 }); // stocker le token dans les cookies
              // L'utilisateur est ensuite redirigé vers le tableau de bord.
              this.router.navigateTo('/dashboard');
            })
            .catch((error) => {
              // Si la requête échoue, une erreur est affichée.
              console.error(error);
              displayErrorMessages('#form-singin', [{ signin: 'Invalid email or password' }]);
            });
        }
      });
    });
  }

  // La méthode 'run' est exécutée lorsque l'objet SignIn est créé.
  run() {
    const viewSignIn = new ViewSignIn();
    document.body.innerHTML = viewSignIn.render();
    this.onHandleClick();
  }
};

export default SignIn;
