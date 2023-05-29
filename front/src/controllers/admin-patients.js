import axios from 'axios';

import ControllerPage from './page';
import ViewAdminPatients from '../views/admin-patients';

const AdminPatients = class AdminPatients {
  constructor() {
    this.run();
  }

  getAll(callback) {
    const host = 'http://localhost:3000/';
    axios.get(`${host}patients`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  run() {
    this.getAll((employees) => {
      const viewAdminPatients = new ViewAdminPatients();
      new ControllerPage(viewAdminPatients.render(employees));
    });
  }
};

export default AdminPatients;
