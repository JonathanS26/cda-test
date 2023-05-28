const Employees = class Employees {
  /**
   * @constructor
   * @param {Object} app
   * 
   */
  constructor (app) {
    this.app = app;

    this.run();
  }


  all () {
    this.app.get('/employees', (req, res) => {
      try {
        res.status(200).json([
          {
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
          }
      ]);
      }  catch (err) {
        console.error(`[ERROR] employees -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run () {
    this.all();
  }
}

export default Employees;
