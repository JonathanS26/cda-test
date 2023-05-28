import ViewAdminPatients from '../views/admin-patients';

import ViewPage from '../views/page';

const AdminPatients = class AdminPatients {
  constructor() {
    this.dataMock = {
      patients: [{
        id: '1',
        firstName: 'Otto',
        lastName: 'Mark',
        cellPhone: '0606060606',
        email: 'mark@gmail.com',
        accidentType: 'voiture'
      }, {
        id: '2',
        firstName: 'Marie',
        lastName: 'Dupuis',
        cellPhone: '0620658547',
        email: 'marie@gmail.com',
        accidentType: 'voiture'
      }, {
        id: '3',
        firstName: 'David',
        lastName: 'Dubois',
        cellPhone: '0669542588',
        email: 'david@gmail.com',
        accidentType: 'voiture'
      }]
    };

    this.run();
  }

  run() {
    const viewPage = new ViewPage();
    const viewAdminPatients = new ViewAdminPatients();

    document.body.innerHTML = viewPage.render(viewAdminPatients.render(this.dataMock));
  }
};

export default AdminPatients;
