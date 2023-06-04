import axios from 'axios';

import ControllerPage from './page';
import ViewDashboard from '../views/dashboard';

const Dashboard = class Dashboard {
  constructor(router) {
    this.router = router;
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
    this.getStats((stats) => {
      const viewDashboard = new ViewDashboard();
      new ControllerPage(viewDashboard.render(stats), this.router);
    });
  }
};

export default Dashboard;
