import validator from 'validator';
import { displayErrorMessages } from '../helpers';
import ControllerPage from './page';
import ViewEmployee from '../views/employee';

const Employee = class Employee {
  constructor() {
    this.run();
  }

  checkForm(params, callback) {
    const errors = [];

    // Nom
    if (validator.isEmpty(params.lastName)) {
      errors.push({ lastName: 'Veuillez entrer le nom' });
    } else if (!validator.isAlpha(params.lastName, 'fr-FR')) {
      errors.push({ lastName: 'Le nom ne doit contenir que des lettres' });
    }

    // Prénom
    if (validator.isEmpty(params.firstName)) {
      errors.push({ firstName: 'Veuillez entrer le prénom' });
    } else if (!validator.isAlpha(params.firstName, 'fr-FR')) {
      errors.push({ firstName: 'Le prénom ne doit contenir que des lettres' });
    }

    // Email
    if (validator.isEmpty(params.email)) {
      errors.push({ email: 'Veuillez entrer le NIR' });
    } else if (!validator.isEmail(params.email)) {
      errors.push({ email: 'Veuillez entrer un email valide' });
    }

    // Téléphone fixe
    if (validator.isEmpty(params.phone)) {
      errors.push({ phone: 'Veuillez entrer le numéro de téléphone fixe' });
    } else if (!validator.isMobilePhone(params.phone, ['fr-FR'])) {
      errors.push({ phone: 'Veuillez entrer un numéro de téléphone fixe valide' });
    } else if (params.phone.length !== 10) {
      errors.push({ phone: 'Veuillez entrer un numéro de téléphone fixe valide' });
    }

    // Téléphone portable
    if (validator.isEmpty(params.cellphone)) {
      errors.push({ cellphone: 'Veuillez entrer le numéro de téléphone portable' });
    } else if (!validator.isMobilePhone(params.cellphone, ['fr-FR'])) {
      errors.push({ cellphone: 'Veuillez entrer un numéro de téléphone portable valide' });
    }

    // Adresse
    if (validator.isEmpty(params.address)) {
      errors.push({ address: 'Veuillez entrer l\'adresse' });
    }

    // Ville
    if (validator.isEmpty(params.city)) {
      errors.push({ city: 'Veuillez entrer la ville' });
    } else if (!validator.isAlpha(params.city, 'fr-FR')) {
      errors.push({ city: 'La ville ne doit contenir que des lettres' });
    }

    // Code postal
    if (validator.isEmpty(params.zip)) {
      errors.push({ zip: 'Veuillez entrer le code postal' });
    } else if (!validator.isPostalCode(params.zip, 'FR')) {
      errors.push({ zip: 'Veuillez entrer un code postal valide' });
    }

    // Rôle
    if (validator.isEmpty(params.role)) {
      errors.push({ role: 'Veuillez sélectionner un rôle' });
    } else if (!['1', '0'].includes(params.role)) {
      errors.push({ role: 'Valeur de rôle non valide' });
    }

    // Niveau
    if (validator.isEmpty(params.level)) {
      errors.push({ level: 'Veuillez sélectionner un niveau' });
    } else if (!['Acquisition', 'Conversion', 'Retention'].includes(params.level)) {
      errors.push({ level: 'Valeur de niveau non valide' });
    }
    callback(errors);
  }

  onHandleClick() {
    const elForm = document.querySelector('#form-employee');
    const elButton = document.querySelector('#form-employee button');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const formData = Array.from(new FormData(elForm, elButton));
      const params = {
        lastName: formData[0][1],
        firstName: formData[1][1],
        email: formData[2][1],
        phone: formData[3][1],
        cellphone: formData[4][1],
        address: formData[5][1],
        city: formData[6][1],
        zip: formData[7][1],
        role: formData[8][1],
        level: formData[9][1]
      };

      this.checkForm(params, (errors) => {
        displayErrorMessages('#form-employee', errors);
      });
    });
  }

  run() {
    const viewEmployee = new ViewEmployee();
    new ControllerPage(viewEmployee.render());

    this.onHandleClick();
  }
};

export default Employee;
