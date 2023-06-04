import Router from 'vanilla-router';

import SignInController from './controllers/singin';
import SingUpController from './controllers/singup';
import DashboardController from './controllers/dashboard';
import PatientController from './controllers/patient';
import EmployeeController from './controllers/employee';
import PartnerController from './controllers/partner';
import AdminPartnerController from './controllers/admin-partners';
import AdminEmployeeController from './controllers/admin-employees';
import AdminPatientsController from './controllers/admin-patients';
import Route from './route';

import './bootstrap-sb-admin.scss';
import './index.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    document.body.innerHTML = '<h1>404</h1>';
  }
});

new Route('/singin', SignInController, ['public', '*'], router);
new Route('/singup', SingUpController, ['public', '*'], router);
new Route('/dashboard', DashboardController, ['private', 'guest'], router);
new Route('/patient', PatientController, ['private', 'guest'], router);
new Route('/partner', PartnerController, ['private', 'guest'], router);
new Route('/employee', EmployeeController, ['private', 'admin'], router);
new Route('/admin-patients', AdminPatientsController, ['private', 'admin'], router);
new Route('/admin-employees', AdminEmployeeController, ['private', 'admin'], router);
new Route('/admin-partners', AdminPartnerController, ['private', 'admin'], router);

router.navigateTo(location.pathname);
