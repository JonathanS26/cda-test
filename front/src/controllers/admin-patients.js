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
        console.log(response)
        callback(response.data);
      })
      .catch((error) => {
        console.log("axios catch")
        console.log(error);
      });
  }

  run() {

    this.getAll((patients) => {
      const viewAdminPatients = new ViewAdminPatients();
      new ControllerPage(viewAdminPatients.render(patients));
    });
  }
};

export default AdminPatients;
