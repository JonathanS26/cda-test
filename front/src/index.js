import axios from 'axios';
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

import './bootstrap-sb-admin.scss';
import './index.scss';

const router = new Router({
  mode: 'history',
  page404: () => {
    document.body.innerHTML = '<h1>404</h1>';
  }
});

router.add('/singin', () => {
  new SignInController();
});

router.add('/singup', () => {
  new SingUpController();
});

router.add('/dashboard', () => {
  new DashboardController();
});

router.add('/patient', () => {
  new PatientController();
});

router.add('/partner', () => {
  new PartnerController();
});

router.add('/employee', () => {
  new EmployeeController();
});

router.add('/admin-patients', () => {
  const host = 'http://localhost:3000/';
  axios.get(`${host}auth`)
    .then(() => {
      new AdminPatientsController();
    })
    .catch(() => {
      router.navigateTo('/singin');
    });
});

router.add('/admin-employees', () => {
  new AdminEmployeeController();
});

router.add('/admin-partners', () => {
  new AdminPartnerController();
});

router.navigateTo(location.pathname);
