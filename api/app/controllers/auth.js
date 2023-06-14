// Import des modules nécessaires
import jwt from 'jsonwebtoken';
import { DataTypes } from 'sequelize';

// Déclaration de la classe Auth
const Auth = class Auth {

  constructor (app, authenticateToken, connect) {
    // Assigner les valeurs aux propriétés de l'instance
    this.connect = connect;
    this.app = app;
    this.authenticateToken = authenticateToken;

    // Définir le modèle User avec les attributs de la table correspondante
    this.User = connect.define('User', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_role: {
        type: DataTypes.INTEGER,
        validate: {
          isIn: [[1, 2]]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    // Appeler la méthode run pour démarrer l'exécution des fonctionnalités d'authentification
    this.run();
  }

  // Méthode pour vérifier le jeton d'authentification (checkToken)
  checkToken () {
    // Définition de la route pour la vérification du jeton d'authentification
    this.app.get('/auth', this.authenticateToken, (req, res) => {
      try { 
        // Renvoyer les informations de l'utilisateur contenues dans le jeton (req.user) en tant que réponse
        res.status(200).json(req.user);
      }  catch (err) {
        console.error(`[ERROR] auth -> ${err}`);

        // En cas d'erreur, renvoyer une réponse d'erreur avec le code 401 (non autorisé) et un message approprié
        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }
  

  // Méthode pour gérer la demande de connexion (signin)
  signin = () => {
    // Définition de la route pour la demande de connexion (signin)
    this.app.get('/auth/signin', async (req, res) => {
      try {
        // Récupérer l'email et le mot de passe depuis l'URL
        const { email, password } = req.query;
       
        // Rechercher l'utilisateur dans la base de données avec l'email et le mot de passe correspondants
        const user = await this.User.findAll({
          where: {email, password},
          raw: true // Récupérer les résultats sous forme d'objets JavaScript bruts
        });

        // Vérifier si aucun utilisateur correspondant n'a été trouvé
        if (!user.length) {
          res.status(401).json({
            code: 401,
            message: 'Email ou mot de passe inconnu'
          });
          return;
        }
        console.log("user :");
        console.log(user.length);

        // Récupérer le premier utilisateur trouvé
        const User  = user[0];

        // Créer le jeton JWT avec les données de l'utilisateur
        const token = jwt.sign({
          firstName:  User.firstName,
          lastName: User.lastName,
          email: User.email,
          role: User.role
        }, 'J0n@thAn1', { expiresIn: '24h' });

        // Envoyer le jeton JWT dans la réponse
        res.status(200).json({
          token
        });
      
      }  catch (err) {
        // En cas d'erreur, renvoyer une réponse d'erreur
        console.error(`[ERROR] auth/signin -> ${err}`);

        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }

  // Méthode pour exécuter les fonctionnalités d'authentification
  run () {
    this.checkToken();
    this.signin();
  }
}

export default Auth;
  