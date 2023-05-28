import axios from 'axios';

import ControllerPage from './page';
import ViewDashboard from '../views/dashboard';

const Dashboard = class Dashboard {
  constructor() {
    this.run();
  }

  getStats(callback) {
    const host = 'http://localhost:3000/';
    axios.get(`${host}dashboard/stats`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  run() {
    const controllerPage = new ControllerPage();
    const viewDashboard = new ViewDashboard();

    this.getStats((stats) => {
      console.log(stats);
      controllerPage.run(viewDashboard.render(stats));
    });
  }
};

export default Dashboard;
