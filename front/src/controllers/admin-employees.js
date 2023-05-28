import ViewAdminEmployees from '../views/admin-employees';
import ViewPage from '../views/page';

const AdminEmployees = class AdminEmployees {
  constructor() {
    this.dataMock = {
      employees: [{
        id: '1',
        firstName: 'Otto',
        lastName: 'Mark',
        cellPhone: '0606060606',
        email: 'mark@gmail.com',
        level: 'Acquisition'
      }, {
        id: '2',
        firstName: 'Marie',
        lastName: 'Dupuis',
        cellPhone: '0620658547',
        email: 'marie@gmail.com',
        level: 'Rétention'
      }, {
        id: '3',
        firstName: 'David',
        lastName: 'Dubois',
        cellPhone: '0669542588',
        email: 'david@gmail.com',
        level: 'Rétention'
      }]
    };

    this.run();
  }

  run() {
    const viewPage = new ViewPage();
    const viewAdminEmployees = new ViewAdminEmployees();

    document.body.innerHTML = viewPage.render(viewAdminEmployees.render(this.dataMock));
  }
};

export default AdminEmployees;
