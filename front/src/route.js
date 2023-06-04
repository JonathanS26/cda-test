import CookieJS from 'js-cookie';
import axios from 'axios';

class Route {
  constructor(path, Controller, perm, router) {
    this.path = path; // /dashboard
    this.Controller = Controller; // DashboardController
    const [status, role] = perm; // private, guest
    this.status = status; // private
    this.role = role; // guest
    this.router = router; // router
    this.host = 'http://localhost:3000/';

    this.run();
  }

  checkAuthentication() {
    if (this.status === 'private') { // private OK
      const token = CookieJS.get('jwtToken'); // cree token OK

      this.router.add(this.path, () => { // cree route /dashboard OK
        axios.get(`${this.host}auth`, { // cree route
          headers: {
            authorization: token
          }
        })
          .then((response) => {
            const { status } = response.data;

            if (status === this.role) {
              new this.Controller(this.router);

              return;
            }

            this.router.navigateTo('/dashboard');
          })
          .catch(() => {
            this.router.navigateTo('/singin');
          });
      });

      return;
    }

    this.router.add(this.path, () => {
      new this.Controller(this.router);
    });
  }

  run() {
    this.checkAuthentication();
  }
}

export default Route;
