// Dependencies
import express from 'express';
import Sequelize from 'sequelize';

// Dependencies middleware
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

// Core
import config from './config.js';
import routes from './controllers/routes.js';
import authenicateToken from './helpers/authenicate-token.js';

const Server = class Server {
  constructor () {
    this.app = express();
    this.config = config[process.argv[2]] || config.development;
  }

  dbConnect() {
    return new Sequelize('cda', 'user', 'password', {
      host: '172.20.10.5',
      dialect: 'mysql',
      port: 3306
    });
  }

  middleware () {
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ 'extended': true }));
    this.app.use(bodyParser.json());
  }

  routes () {
    new routes.Auth(this.app, authenicateToken, this.connect);
    new routes.Users(this.app);
    new routes.Dashboard(this.app);
    new routes.Employees(this.app);
    new routes.Partners(this.app);
    new routes.Patients(this.app, this.connect);

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not Found'
      });
    });
  }

  security () {
    this.app.use(helmet());
    this.app.disable('x-powered-by');
  }

  run () {
    try {
      this.connect = this.dbConnect();
      this.security();
      this.middleware();
      this.routes();
      this.app.listen(this.config.port);
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`);
    }
  }
}

export default Server;
