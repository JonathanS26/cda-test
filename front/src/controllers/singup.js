import axios from 'axios'; // Pour faire des requêtes HTTP.
import CookieJS from 'js-cookie'; // Pour gérer les cookies.
import validator from 'validator';
import { displayErrorMessages } from '../helpers';
import ViewSingUp from '../views/singup';

const SingUp = class SingUp {
  constructor() {
    console.log('singup :constructor');
    this.run();
  }

  checkForm(params, callback) {
    console.log('checkForm', params, callback);
    const errors = [];
    if (validator.isEmpty(params.firstName)) {
      errors.push({ firstName: 'Veuillez entrer votre prénom' });
    }

    if (validator.isEmpty(params.lastName)) {
      errors.push({ lastName: 'Veuillez entrer votre nom' });
    }

    if (!validator.isEmail(params.email)) {
      errors.push({ email: 'Veuillez entrer une adresse e-mail valide' });
    }

    if (validator.isEmpty(params.password)) {
      errors.push({ password: 'Veuillez entrer un mot de passe' });
    }

    if (params.password !== params.repeatPassword) {
      errors.push({ repeatPassword: 'Les mots de passe ne correspondent pas' });
    }
    callback(errors);
  }

  onHandleClick() {
    const elForm = document.querySelector('#form-singup');
    const elButton = document.querySelector('#form-singup button');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const formData = Array.from(new FormData(elForm, elButton));
      const params = {
        firstName: formData[0][1],
        lastName: formData[1][1],
        email: formData[2][1],
        password: formData[3][1],
        repeatPassword: formData[4][1]
      };

      this.checkForm(params, (errors) => {
        if (errors.length > 0) {
          displayErrorMessages('#form-singup', errors);
        } else {
          axios.post('http://localhost:3000/auth/signup', {
            firstname: params.firstName,
            lastname: params.lastName,
            email: params.email,
            password: params.password
          })
            .then((response) => {
              CookieJS.set('jwtToken', response.data.token, { expires: 7 });
              this.router.navigateTo('/singin');
            })
            .catch((error) => {
              console.error('Une erreur est survenue lors de l\'inscription.', error);
            });
        }
      });
    });
  }

  run() {
    const viewSingUp = new ViewSingUp();
    document.body.innerHTML = viewSingUp.render();
    this.onHandleClick();
  }
};

export default SingUp;
