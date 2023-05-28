import ViewAdminPartners from '../views/admin-partners';
import ViewPage from '../views/page';

const AdminPartners = class AdminPartners {
  constructor() {
    this.dataMock = {
      partners: [{
        id: '1',
        firstName: 'Otto',
        lastName: 'Mark',
        cellPhone: '0606060606',
        email: 'mark@gmail.com',
        job: 'Avocat'
      }, {
        id: '2',
        firstName: 'Marie',
        lastName: 'Dupuis',
        cellPhone: '0620658547',
        email: 'marie@gmail.com',
        job: 'Avocat'
      }, {
        id: '3',
        firstName: 'David',
        lastName: 'Dubois',
        cellPhone: '0669542588',
        email: 'david@gmail.com',
        job: 'Médecin Assurance'
      }]
    };

    this.run();
  }

  run() {
    const viewPage = new ViewPage();
    const viewAdminPartners = new ViewAdminPartners();

    document.body.innerHTML = viewPage.render(viewAdminPartners.render(this.dataMock));
  }
};

export default AdminPartners;
