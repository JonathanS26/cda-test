const Patients = class Patients {
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
    this.app.get('/patients', (req, res) => {
    try {
        res.status(200).json([
        {
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
        }
    ]);
    }  catch (err) {
        console.error(`[ERROR] patients -> ${err}`);

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

export default Patients;
