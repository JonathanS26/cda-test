import CookieJS from 'js-cookie';
import axios from 'axios';

class Route {
  constructor(path, Controller, perm, router) {
    this.path = path;
    this.Controller = Controller;
    const [status, role] = perm;
    this.status = status;
    this.role = role;
    this.router = router;
    this.host = 'http://localhost:3000/';

    this.run();
  }

  checkAuthentication() {
    if (this.status === 'private') {
      this.router.add(this.path, () => {
        const token = CookieJS.get('jwtToken');
        axios.get(`${this.host}auth`, {
          headers: {
            authorization: token
          }
        })
          .then((response) => {
            const { role } = response.data;

            if (this.role === 'guest') {
              if (role === 'guest' || role === 'admin') {
                new this.Controller(this.router);

                return;
              }
            }

            if (this.role === 'admin' && role === 'admin') {
              new this.Controller(this.router);

              return;
            }
            this.router.navigateTo('/dashboard');
          })
          .catch((error) => {
            console.error('Erreur lors de la vérification de l\'authentification', error);
            // this.router.navigateTo('/singin');
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
