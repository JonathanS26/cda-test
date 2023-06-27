const Patients = class Patients {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} connect - La connexion à la base de données
   */
  constructor (app, connect) {
      this.app = app;
      this.Patient = connect.models.Patient;
      this.City = connect.models.City;
      this.Gender = connect.models.Gender;
      this.run();
  }

  // Méthode pour récupérer tous les patients
  getPatients = () => {
    this.app.get('/patients', async (req, res) => {
      try {
        const patients = await this.Patient.findAll({
          attributes: ['id','firstname', 'lastname', 'email', 'address', 'dateofbirth', 'cellphone'],
          include: [{
            model: this.City,
            as: 'city',
            attributes: ['name', 'zip_code']
          }, {
            model: this.Gender,
            as: 'gender',
            attributes: ['name']
          }],
          raw: true
        });
      
        // Remodeler les données retournées pour renommer "City.name" en "city", "City.zip_code" en "zip_code", "Gender.name" en "gender" et "Language.name" en "language".
        const remodeledPatients = patients.map(patient => ({
          id: patient.id,
          firstname: patient.firstname,
          lastname: patient.lastname,
          email: patient.email,
          address: patient.address,
          dateofbirth: patient.dateofbirth,
          cellphone: patient.cellphone,
          city: patient['city.name'],
          zip_code: patient['city.zip_code'],
          gender: patient['gender.name']
        }));


        if (!remodeledPatients.length) {
          res.status(404).json({
            code: 404,
            message: 'Aucun patient n\'a été trouvé.'
          });
          return;
        }


        res.status(200).json(remodeledPatients);
      } catch (err) {
        console.error(`[ERROR] /patients -> ${err}`);
  
        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }
  
// Méthode pour récupérer un seul patient
getOnePatient = () => {
  this.app.get('/patients/:id', async (req, res) => {
    try {
      const { id } = req.params;

      const patient = await this.Patient.findOne({
        where: { id },
        attributes: ['id','firstname', 'lastname', 'email', 'address', 'dateofbirth', 'cellphone'],
        include: [{
          model: this.City,
          as: 'city',
          attributes: ['name', 'zip_code']
        }, {
          model: this.Gender,
          as: 'gender',
          attributes: ['name']
        }],
        raw: true
      });

      if (!patient) {
        res.status(404).json({
          code: 404,
          message: 'Ce patient n\'existe pas.'
        });
        return;
      }

      // Remodeler les données retournées pour renommer "City.name" en "city", "City.zip_code" en "zip_code", "Gender.name" en "gender".
      const remodeledPatient = {
        id: patient.id,
        firstname: patient.firstname,
        lastname: patient.lastname,
        email: patient.email,
        address: patient.address,
        dateofbirth: patient.dateofbirth,
        cellphone: patient.cellphone,
        city: patient['city.name'],
        zip_code: patient['city.zip_code'],
        gender: patient['gender.name'],
      };

      res.status(200).json(remodeledPatient);
    } catch (err) {
      console.error(`[ERROR] /patient/${id} -> ${err}`);

      res.status(401).json({
        code: 401,
        message: 'Unauthorized'
      });
    }
  });
}

  addPatient = () => {
    this.app.post('/patient/add', async (req, res) => {
      try {
        // Récupération des données du patient depuis le corps de la requête (req.body)
        const { firstname, lastname, email, address, dateofbirth, cellphone, id_city, id_gender } = req.body;
        // Création du nouveau patient dans la base de données
        const newPatient = await this.Patient.create({
          firstname,
          lastname,
          email,
          address,
          dateofbirth,
          cellphone,
          id_city,
          id_gender
        }, {raw: true});

        // Envoie d'une réponse avec le patient créé
        res.status(201).json({
          success: true,
          message: 'Patient added successfully'
        });
  
      } catch (err) {
        console.error(`[ERROR] patient/add -> ${err}`);

        res.status(400).json({
          success: false,
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  updatePatient =  () => {
    this.app.put('/patient/update/:id', async (req, res) => {
      let id;
      try {
          id = Number(req.params.id);
          const { firstname, lastname, email, address, dateofbirth, cellphone, id_city, id_gender } = req.body;

          const [updated] = await this.Patient.update({
              firstname, 
              lastname, 
              email, 
              address, 
              dateofbirth,
              cellphone,
              id_city, 
              id_gender
          }, {
              where: { id }
          });

          if (!updated) {
            res.status(404).json({
              code: 404,
              message: 'Vous n\'avez modifié aucune donnée.'
            });
            return;
          }

          const updatedPatient = await this.Patient.findOne({ where: { id } });

          res.status(200).json({ patient: updatedPatient });
          
      } catch (err) {
          console.error(`[ERROR] patient/update/${id} -> ${err}`);

          res.status(400).json({
              code: 400,
              message: 'Bad request'
          });
      }
    });
  }

  deletePtient = () => {
    this.app.delete('/patient/delete/:id', async (req, res) => {
      try {
        const { id } = req.params; // Récupère l'ID depuis les paramètres de l'URL
  
        const deletedPatient = await this.Patient.destroy({
          where: { id }
        });
  
        // Si aucun patient avec cet ID n'a été trouvé et supprimé
        if (!deletedPatient) {
          res.status(404).json({
            code: 404,
            message: 'No patient found with this id'
          });
          return;
        }
  
        res.status(200).json({
          message: 'Patient deleted successfully'
        });
      } catch (err) {
        console.error(`[ERROR] patient/delete/${id} -> ${err}`);
  
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run () {
    this.getPatients();
    this.getOnePatient();
    this.addPatient();
    this.updatePatient();
    this.deletePtient();
  }
}

export default Patients;
