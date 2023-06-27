import axios from 'axios';

import ControllerPage from './page';
import ViewAdminPatients from '../views/admin-patients';

const AdminPatients = class AdminPatients {
  constructor() {
    console.log('admin-patients');
    this.run();
  }

  getAll(callback) {
    const host = 'http://localhost:3000/';
    axios.get(`${host}patients`)
      .then((response) => {
        const patients = response.data.map((patient) => ({
          firstname: patient.firstname,
          lastname: patient.lastname,
          email: patient.email,
          cellphone: patient.cellphone,
          address: patient.address
        }));
        callback(patients);
      })
      .catch((error) => {
        console.log('axios catch');
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
