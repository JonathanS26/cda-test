import axios from 'axios';

import ControllerPage from './page';
import ViewAdminPartners from '../views/admin-partners';

const AdminPartners = class AdminPartners {
  constructor() {
    this.run();
  }

  getAll(callback) {
    const host = 'http://localhost:3000/';
    axios.get(`${host}partners`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  run() {
    this.getAll((partners) => {
      const viewAdminPartners = new ViewAdminPartners();
      new ControllerPage(viewAdminPartners.render(partners));
    });
  }
};

export default AdminPartners;
