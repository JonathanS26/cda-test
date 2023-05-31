// Importation des dépendances nécessaires.
import CookieJS from 'js-cookie'; // Pour gérer les cookies.

// Déclaration d'une classe JavaScript nommée Route.
class Route {
  // Le constructeur est appelé lorsqu'un nouvel objet de cette classe est créé.
  // Il prend quatre paramètres :
  // le chemin de la route,
  // le contrôleur correspondant à cette route,
  // le statut de la route et
  // le routeur qui gère l'ensemble des routes.
  constructor(path, Controller, status, router) {
    // Les quatre paramètres passés au constructeur sont enregistrés dans l'instance de cette classe.
    this.path = path;
    this.Controller = Controller;
    this.status = status;
    this.router = router;
    // Exécute la méthode 'run' après que l'objet ait été créé.
    this.run();
  }

 // La méthode 'checkAuthentication' vérifie si l'utilisateur est autorisé à accéder à une route spécifique basée sur son statut d'autentification.
 checkAuthentication() {
  // Vérifier si l'utilisateur a un JWT dans ses cookie.
  const token = CookieJS.get('jwtToken');

  // Si la route est privée et que l'utilisateur n'est pas connecté, redirigez le vers la page de connexion.
  if (this.status === 'private' &&!token) {
    this.router.navigateTo('/login');
    return false;
  }

  // Si la route est publique et que l'utilisateur est connecté, redirigez le vers le tableau de bord.
  if (this.status === 'public' && token) {
    this.router.navigateTo('/dashboard');
    return false;
  }
  
  // Si aucune des conditions ci-dessus n'est remplie, l'utilisateur est autorisé à accéder à la route
  return true;

 }

  // La méthode 'run' ajoute la route et son contrôleur associé au routeur.
  run() {
    // La méthode 'add' du routeur est appelée, qui prend le chemin de la route et une fonction comme paramètres.
    // Cette fonction crée une nouvelle instance du contrôleur associé à la route lorsque la route est atteinte.
    this.router.add(this.path, () => {
      // Défini l'adresse de base pour toutes les requêtes réseau.
      const host = 'http://localhost:3000/';
      // Envoie une requête GET à l'endpoint '/auth' de notre serveur.
      axios.get(`${host}auth`)
        .then(() => {
          // Si la requête est réussie (c'est-à-dire que le serveur répond avec un statut 200), cela signifie que l'utilisateur est authentifié.
          // Création d'une nouvelle instance du contrôleur. 
          new this.Controller();
        })
        .catch(()=>{
          // Si la requête n'est pas réussie (c'est-à-dire que le serveur répond avec un statut 401), cela signifie que l'utilisateur n'est pas authentifié.
          
        });     
    });
  }
}

// La classe Route est ensuite exportée pour être utilisée dans d'autres parties de l'application.
export default Route;
