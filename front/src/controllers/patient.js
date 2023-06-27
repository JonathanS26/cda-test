import validator from 'validator';
import { displayErrorMessages, apiCreatePatient, apiUpdatePatient, apiDeletePatient } from '../helpers';
import ControllerPage from './page';
import ViewPatient from '../views/patient';

const Patient = class Patient {
  constructor() {
    console.log('constructPatient');
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

    callback(errors);
  }

  onHandleClick() {
    console.log('onHandle');
    const elForm = document.querySelector('#form-patient');
    console.log(document.querySelector('#form-patient'))
    const elButton = document.querySelector('#form-patient button');

    elButton.addEventListener('click', (e) => {
      e.preventDefault();

      const formData = Array.from(new FormData(elForm, elButton));
      const params = {
        lastName: formData[0][1],
        firstName: formData[1][1],
        email: formData[2][1],
        cellphone: formData[3][1],
        address: formData[4][1],
        city: formData[5][1],
        zip: formData[6][1],
        dob: formData[7][1],
        gender: formData[8][1]
      };
      console.log(formData);
      this.checkForm(params, (errors) => {
        if (errors.length === 0) {
          apiCreatePatient(params, (responce) => {
            if (responce.success) {
              // redirigez vers la page de la liste des patients ou affichez un message de réussite
              window.location.href = '/patient';
            } else {
              console.error(response.message); 
              // Pour afficher l'erreur dans l'interface utilisateur, vous pouvez par exemple modifier le contenu d'un élément HTML :
              document.getElementById('errorMessage').textContent = response.message;

            }
          });
        } else {
          displayErrorMessages('#form-patient', errors);
        }
      });
    });
  }

  onUpdateClick(id) {
    const elForm = document.querySelector('#form-patient');
    const elButton = document.querySelector(`#update-patient-${id}`);
  
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
  
      const formData = Array.from(new FormData(elForm));
      const params = {
        // Collectez les données du formulaire ici, comme vous le faites dans onHandleClick
      };
  
      this.checkForm(params, (errors) => {
        if (errors.length === 0) {
          apiUpdatePatient(id, params, (response) => {
            if (response.success) {
              // redirigez vers la page de la liste des patients ou affichez un message de réussite
              window.location.href = '/patient';
            } else {
              // affichez les erreurs renvoyées par l'API
            }
          });
        } else {
          displayErrorMessages(`#form-patient-${id}`, errors);
        }
      });
    });
  }
  
  onDeleteClick(id) {
    const elButton = document.querySelector(`#delete-patient-${id}`);
  
    elButton.addEventListener('click', (e) => {
      e.preventDefault();
  
      // Confirmez que l'utilisateur veut vraiment supprimer le patient...
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce patient ?");
      if (confirmDelete) {
        apiDeletePatient(id, (response) => {
          if (response.success) {
            // redirigez vers la page de la liste des patients ou affichez un message de réussite
            window.location.href = '/patient';
          } else {
            // affichez les erreurs renvoyées par l'API
          }
        });
      }
    });
  }

  run() {
    const viewPatient = new ViewPatient();
    new ControllerPage(viewPatient.render());
    this.onHandleClick();
  }
};

export default Patient;
