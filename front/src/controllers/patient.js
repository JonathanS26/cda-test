import validator from 'validator';
import { displayErrorMessages } from '../helpers';
import ControllerPage from './page';
import ViewPatient from '../views/patient';

const Patient = class Patient {
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

    // Langue parlée
    if (validator.isEmpty(params.language)) {
      errors.push({ language: 'Veuillez indiquer la langue parlée' });
    }

    // Date de naissance
    if (validator.isEmpty(params.dob)) {
      errors.push({ dob: 'Veuillez entrer la date de naissance' });
    } else if (!validator.isDate(params.dob)) {
      errors.push({ dob: 'Veuillez entrer une date de naissance valide' });
    }

    // Genre
    if (validator.isEmpty(params.gender)) {
      errors.push({ gender: 'Veuillez sélectionner le genre' });
    } else if (!['Homme', 'Femme', 'Autre'].includes(params.gender)) {
      errors.push({ gender: 'Valeur de genre non valide' });
    }

    // NIR
    if (validator.isEmpty(params.nir)) {
      errors.push({ nir: 'Veuillez entrer le NIR' });
    } else if (!validator.isNumeric(params.nir) || params.nir.length !== 15) {
      errors.push({ nir: 'Le NIR doit contenir exactement 15 chiffres' });
    }

    // Régime d'assurance
    if (validator.isEmpty(params.insuranceRegime)) {
      errors.push({ insuranceRegime: 'Veuillez sélectionner le régime d\'assurance' });
    } else if (!['Régime général', 'Régime agricole', 'Ampi', 'Sncf', 'Mgen', 'Cmmns'].includes(params.insuranceRegime)) {
      errors.push({ insuranceRegime: 'Valeur de régime d\'assurance non valide' });
    }

    // Type d'accident
    if (validator.isEmpty(params.accidentType)) {
      errors.push({ accidentType: 'Veuillez sélectionner le type d\'accident' });
    } else if (!['Accident de la route', 'Accident piéton', 'Accident médical', 'Accident du travail', 'Accident du sport', 'Accident de la vie', 'Agression', 'Maltraitance'].includes(params.accidentType)) {
      errors.push({ accidentType: 'Valeur de type d\'accident non valide' });
    }

    callback(errors);
  }

  onHandleClick() {
    const elForm = document.querySelector('#form-patient');
    const elButton = document.querySelector('#form-patient button');

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
        language: formData[8][1],
        dob: formData[9][1],
        gender: formData[10][1],
        nir: formData[11][1],
        insuranceRegime: formData[12][1],
        accidentType: formData[13][1]

      };
      this.checkForm(params, (errors) => {
        displayErrorMessages('#form-patient', errors);
      });
    });
  }

  run() {
    const viewPatient = new ViewPatient();
    new ControllerPage(viewPatient.render());

    this.onHandleClick();
  }
};

export default Patient;
