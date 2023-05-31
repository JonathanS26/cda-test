// Importation des modules nécessaires pour l'application.
import Router from 'vanilla-router'; // Une bibliothèque pour gérer le routage.
import Route from './route'; // La classe Route précédemment crée.

// Importation des différents contrôleurs pour chaque route.
import SignInController from './controllers/singin';
// import SingUpController from './controllers/singup';
// import DashboardController from './controllers/dashboard';
// import PatientController from './controllers/patient';
// import EmployeeController from './controllers/employee';
// import PartnerController from './controllers/partner';
// import AdminPartnerController from './controllers/admin-partners';
// import AdminEmployeeController from './controllers/admin-employees';
import AdminPatientsController from './controllers/admin-patients';


// Importation des styles SCSS pour l'application.
import './bootstrap-sb-admin.scss';
import './index.scss';

// Création d'une nouvelle instance de Router. L'option 'mode' est définie sur 'history', ce qui signifie que l'application utilisera l'API History du navigateur pour la gestion des routes. L'option 'page404' définit ce qui sera affiché lorsqu'une route inconnue est atteinte.
const router = new Router({
  mode: 'history',
  page404: () => {
    document.body.innerHTML = '<h1>404</h1>';
  }
});

// Création de nouvelles instances de Route pour '/signin' et '/admin-patients' avec leurs contrôleurs respectifs et ajout de ces routes au routeur.
new Route('/singin', SignInController, 'public', router);
new Route('/admin-patients', AdminPatientsController, 'private', router);

// Cette ligne de code indique au routeur de naviguer vers le chemin actuel lors du chargement de l'application.
router.navigateTo(location.pathname);

// router.add('/singin', () => {
//   new SignInController(router);
// });

// router.add('/singup', () => {
//   new SingUpController();
// });

// router.add('/dashboard', () => {
//   const dashboard = new DashboardController();
//   privateRout(dashboard);
// });

// router.add('/patient', () => {
//   const patient = new PatientController();
//   privateRout(patient);
// });

// router.add('/partner', () => {
//   const partner = new PartnerController();
//   privateRout(partner);
// });

// router.add('/employee', () => {
//   const employee = new EmployeeController();
//   privateRout(employee);
// });

// router.add('/admin-patients', () => {
//   const adminPatients = new AdminPatientsController();
//   privateRout(adminPatients);
// });

// router.add('/admin-employees', () => {
//   const adminEmployees = new AdminEmployeeController();
//   privateRout(adminEmployees);
// });

// router.add('/admin-partners', () => {
//   const adminPartners = new AdminPartnerController();
//   privateRout(adminPartners);
// });

// router.navigateTo(location.pathname);
