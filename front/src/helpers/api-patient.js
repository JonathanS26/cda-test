import axios from 'axios';

const host = 'http://localhost:3000/';

// Fonction pour créer un nouveau patient
export const apiCreatePatient = (params, callback) => {
  axios.post(`${host}patients`, params)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Fonction pour mettre à jour un patient existant
export const apiUpdatePatient = (id, params, callback) => {
  axios.put(`${host}patients/${id}`, params)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Fonction pour supprimer un patient
export const apiDeletePatient = (id, callback) => {
  axios.delete(`${host}patients/${id}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
