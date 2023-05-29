import axios from 'axios';

import ControllerPage from './page';
import ViewAdminEmployees from '../views/admin-employees';

const AdminEmployees = class AdminEmployees {
  constructor() {
    this.run();
  }

  getAll(callback) {
    const host = 'http://localhost:3000/';
    axios.get(`${host}employees`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  run() {
    this.getAll((employees) => {
      const viewAdminEmployees = new ViewAdminEmployees();
      new ControllerPage(viewAdminEmployees.render(employees));
    });
  }
};

export default AdminEmployees;
