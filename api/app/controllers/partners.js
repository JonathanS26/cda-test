const Partners = class Partners {
  /**
   * @constructor
   * @param {Object} app
   * 
   */
  constructor (app) {
    this.app = app;

    this.run();
  }
c
  all () {
    this.app.get('/partners', (req, res) => {
      try {
        res.status(200).json([
          {
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
          }
      ]);
      }  catch (err) {
        console.error(`[ERROR] partners -> ${err}`);

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

export default Partners;
