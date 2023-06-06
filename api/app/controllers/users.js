const Users = class Users {
  /**
   * @constructor
   * @param {Object} app
   * 
   */
  constructor (app) {
    this.app = app;

    this.run();
  }


  me () {
    this.app.get('/users/me', (req, res) => {
      try {
          res.status(200).json( {
            firstName: 'Jonathan',
            lastName: 'Senouf',
            role: 'guest',
            email: 'jonathan.senouf@gmail.com',
            avatarUrl: 'https://i.pravatar.cc/300'
          });
      }  catch (err) {
        console.error(`[ERROR] users/me -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run () {
    this.me();
  }
}

export default Users;
