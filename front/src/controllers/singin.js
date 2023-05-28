import validator from 'validator';
import { displayErrorMessages } from '../helpers';
import ViewSignIn from '../views/singin';

const SignIn = class SignIn {
  constructor() {
    this.run();
  }

  checkForm(params, callback) {
    const errors = [];

    if (!validator.isEmail(params.email)) {
      errors.push({ email: 'Email invalid' });
    }

    if (params.password === '') {
      errors.push({ password: 'Empty password' });
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
        email: formData[0][1],
        password: formData[1][1]
      };

      this.checkForm(params, (errors) => {
        displayErrorMessages('#form-singin', errors);
      });
    });
  }

  run() {
    const viewSignIn = new ViewSignIn();
    document.body.innerHTML = viewSignIn.render();
    this.onHandleClick();
  }
};

export default SignIn;
