import validator from 'validator';
import { displayErrorMessages } from '../helpers';
import ViewSingUp from '../views/singup';

const SingUp = class SingUp {
  constructor() {
    this.run();
  }

  checkForm(params, callback) {
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
    const elForm = document.querySelector('form');
    const elButton = document.querySelector('button');

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
        displayErrorMessages('#form-singup', errors);
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
