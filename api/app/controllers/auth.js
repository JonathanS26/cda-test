// Impore du package 'jsonwebtoken', communément appelé jwt, qui fournit des méthodes utilisées pour travailler avec JSON Web Token (JWT)
import jwt from 'jsonwebtoken';

// Definition de la classe Auth
const Auth = class Auth {
  // Le constructeur est appelé lorsqu'un nouvel objet de cette classe est créé.
  // Il prend deux paramètres : une instance d'application express et une fonction authenicateToken.
  constructor (app, authenicateToken) {
    // Les deux paramètres passés au constructeur sont enregistrés dans l'instance de cette classe.
    this.app = app;
    this.authenicateToken = authenicateToken;

    // Exécute la méthode 'run' après que l'objet ait été créé.
    this.run();
  }

  // Méthode pour vérifier le token. Elle associe une fonction à la route '/auth' en méthode GET.
  checkToken () {
    // .get est une méthode d'express qui prend une route et une fonction comme paramètres. La fonction est appelée lorsque la route est atteinte en méthode GET.
    // this.authenicateToken est une fonction qui sera utilisée comme middleware pour authentifier les requêtes entrantes en utilisant un token JWT.
    this.app.get('/auth', this.authenicateToken, (req, res) => {
      try { 
        // Si l'authentification réussit, elle renvoie les informations de l'utilisateur.
        res.status(200).json(req.user);
      }  catch (err) {
        // Si une erreur se produit, elle est affichée dans la console et un message d'erreur est renvoyé au client.
        console.error(`[ERROR] auth -> ${err}`);

        // Envoie une réponse avec un statut 401 (non autorisé) au client.
        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }

  // Méthode pour se connecter à l'application. Elle associe une fonction à la route '/auth/signin' en méthode GET.
  signin () {
    this.app.get('/auth/signin', (req, res) => {
      try {
        // Récupère les paramètres email et password de la requête.
        const { email, password } = req.query;

        // Crée un utilisateur fictif pour simuler une authentification.
        const userMock = {
          firstName: 'Jonathan',
          lastName: 'Senouf',
          status: 'admin', //guest
          email: 'jonathan.senouf@gmail.com',
          password: '12345'
        };

        // Si l'email et le mot de passe fournis correspondent à ceux de l'utilisateur fictif, un token JWT est créé et renvoyé.
        if (email === userMock.email && password === userMock.password) {
          // Création du token avec la méthode jwt.sign, qui prend un objet avec les informations à inclure dans le token, une clé secrète et une option avec la durée de validité du token.
          const token = jwt.sign({
            firstName:  userMock.firstName,
            lastName: userMock.lastName,
            email: userMock.email,
            status: userMock.status
          }, 'J0n@thAn1', { expiresIn: '24h' });

          // Envoie une réponse avec un statut 200 (OK) au client, contenant le token.
          res.status(200).json({
            token
          });
        }
      }  catch (err) {
        console.error(`[ERROR] auth/signin -> ${err}`);

        // Si une erreur se produit pendant le processus, elle est affichée dans la console et un message d'erreur est renvoyé au client.
        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }

  // La méthode 'run' appelle simplement les méthodes 'checkToken' et 'signin', ce qui associe les routes '/auth' et '/auth/signin' à leurs fonctions correspondantes lors de la création d'une nouvelle instance de la classe Auth.
  run () {
    this.checkToken();
    this.signin();
  }
}

// La classe Auth est ensuite exportée pour être utilisée dans d'autres parties de l'application.
export default Auth;
  