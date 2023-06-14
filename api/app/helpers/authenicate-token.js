import jwt from 'jsonwebtoken';

export default (req, res, next) => {

    // Récupérer le jeton d'authentification depuis les en-têtes de la requête
    const token = req.headers['authorization'];

    // Vérifier si le jeton existe
    if (!token) return res.sendStatus(403);

    // Vérifier et décoder le jeton d'authentification
    jwt.verify(token, 'J0n@thAn1', (err, user) => {
        // En cas d'erreur lors de la vérification ou du décodage du jeton
        if (err) return res.sendStatus(401);

        // Stocker les informations de l'utilisateur dans la requête pour une utilisation ultérieure
        req.user = user;
    });

    // Passer au middleware suivant
    next();
};
