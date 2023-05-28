const Dashboard = class Dashboard {
  /**
   * @constructor
   * @param {Object} app
   * 
   */
  constructor (app) {
    this.app = app;

    this.run();
  }


  stats () {
    this.app.get('/dashboard/stats', (req, res) => {
      try {
          res.status(200).json([
            {
              title: 'nombre de patients',
              stats: 54555
            }, {
              title: 'nombre de partenaires',
              stats: 454
            }, {
              title: 'nombre de employés',
              stats: 88956
            }, {
              title: 'nombre de rapports',
              stats: 2285
            }
          ]);
        }  catch (err) {
        console.error(`[ERROR] dashboard/stats -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run () {
    this.stats();
  }
}

export default Dashboard;