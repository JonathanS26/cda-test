import jwt from 'jsonwebtoken';

const Auth = class Auth {
  constructor (app, authenicateToken) {
    this.app = app;
    this.authenicateToken = authenicateToken;

    this.run();
  }

  checkToken () {
    this.app.get('/auth', this.authenicateToken, (req, res) => {
      try { 
        res.status(200).json(req.user);
      }  catch (err) {
        console.error(`[ERROR] auth -> ${err}`);

        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }

  signin () {
    this.app.get('/auth/signin', (req, res) => {
      try {
        const { email, password } = req.query;
        const userMock = {
          firstName: 'Jonathan',
          lastName: 'Senouf',
          status: 'admin',
          email: 'jonathan.senouf@gmail.com',
          password: '12345'
        };

        if (email === userMock.email && password === userMock.password) {
          const token = jwt.sign({
            firstName:  userMock.firstName,
            lastName: userMock.lastName,
            email: userMock.email,
            status: userMock.status
          }, 'J0n@thAn1', { expiresIn: '24h' });

          res.status(200).json({
            token
          });
        }
      }  catch (err) {
        console.error(`[ERROR] auth/signin -> ${err}`);

        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }

  run () {
    this.checkToken();
    this.signin();
  }
}
  
export default Auth;
  