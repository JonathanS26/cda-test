// Import des modules nécessaires
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Déclaration de la classe Auth
const Auth = class Auth {

  constructor (app, authenticateToken, connect) {
    // Assigner les valeurs aux propriétés de l'instance
    this.app = app;
    this.authenticateToken = authenticateToken;
    this.User = connect.models.User;
    this.Role = connect.models.Role;
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
  

  signin = () => {
    this.app.post('/auth/signin', async (req, res) => {
      try {
        // Récupérer l'email et le mot de passe depuis le corps de la requête
        const { email, password } = req.body;
  
        // Rechercher l'utilisateur dans la base de données avec l'email correspondant
        const user = await this.User.findOne({
          attributes: ['firstname', 'lastname', 'email', 'password', 'id_role'],
          include: [{
            model: this.Role,
            as: 'role',
            attributes: ['name'],
          }],
          where: { email },
          raw : true
        });
  
        // Si aucun utilisateur correspondant n'a été trouvé, renvoyer une erreur
        if (!user) {
          return res.status(401).json({
            code: 401,
            message: 'Email ou mot de passe inconnu'
          });
        }
  
        // Comparer le mot de passe haché avec le mot de passe en clair en utilisant bcrypt
        const match = await bcrypt.compare(password, user.password);
  
        // Si les mots de passe ne correspondent pas, renvoyer une erreur
        if (!match) {
          return res.status(401).json({
            code: 401,
            message: 'Email ou mot de passe inconnu'
          });
        }
  
        // Si tout est en ordre, créer le jeton JWT avec les données de l'utilisateur
        const token = jwt.sign({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user['role.name']
        }, 'J0n@thAn1', { expiresIn: '24h' });
  
        // Envoyer le jeton JWT dans la réponse
        res.status(200).json({ token });
      } catch (err) {
        console.error(`[ERROR] auth/signin -> ${err}`);
        res.status(401).json({ code: 401, message: 'Unauthorized' });
      }
    });
  }
  

signup = () => {
  this.app.post('/auth/signup', async (req, res) => {
    try {
      let { firstname, lastname, email, password } = req.body;
      email = email.toLowerCase();  // Force l'email en minuscules
      console.log(firstname + ' ' + lastname + ' ' + email + ' ' + password);

      // Vérifiez d'abord si un utilisateur avec cet e-mail existe déjà
      const existingUser = await this.User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({
          code: 409,
          message: 'Email already in use'
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const newUser = await this.User.create({  // Pas besoin du déconstructeur []
        firstname,
        lastname,
        email,
        password: hashedPassword,
        id_role: 2
      }, {raw: true});

      console.log(newUser);

      // Créer un token pour le nouvel utilisateur
      const token = jwt.sign({
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        role: newUser.id_role
      }, 'J0n@thAn1', { expiresIn: '24h' });

      res.status(201).json({
        message: 'User added successfully',
        token: token
      });
    }  catch (err) {
      console.error(`[ERROR] auth/signup -> ${err}`);
      console.error(err.errors);

      res.status(400).json({
        code: 400,
        message: 'Bad request'
      });
    }
  })
}



  // Méthode pour exécuter les fonctionnalités d'authentification
  run () {
    this.checkToken();
    this.signin();
    this.signup();
  }
}

export default Auth;
  