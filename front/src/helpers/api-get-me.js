import axios from 'axios';

const host = 'http://localhost:3000/';
export default (callback) => {
  axios.get(`${host}users/me`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
