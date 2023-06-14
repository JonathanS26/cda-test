import { DataTypes } from 'sequelize';



const Patients = class Patients {
  /**
   * @constructor
   * @param {Object} app
   * 
   */
  constructor (app, connect) {
      this.app = app;
      this.connect = connect;
      
      this.Patient = connect.define('Patient',{
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        dateofbirth: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        id_city: {
          type: DataTypes.INTEGER,
          validate: {
            isIn: [[1]]
          }
        },
        id_gender: {
          type: DataTypes.INTEGER,
          validate: {
            isIn: [[1,2]]
          }
        },
        id_language: {
          type: DataTypes.INTEGER,
          validate: {
            isIn: [[1]]
          }
        }
      }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

      this.run();
  }

  // Méthode pour récupérer tous les patients
  getPatients = () => {
    this.app.get('/patients', async (req, res) => {
      try {
        const patients = await this.Patient.findAll({raw: true});

        if (!patients.length) {
          res.status(401).json({
            code: 401,
            message: 'Aucun patient n\'a été trouvé.'
          });
          return;
        }
        const Patients = patients[0];

        console.log(Patients);
        res.status(200).json(patients);
      } catch (err) {
        console.error(`[ERROR] /patients -> ${err}`);

        res.status(401).json({
          code: 401,
          message: 'Unauthorized'
        });
      }
    });
  }
  // Méthode pour récupérer tous les patients
  getOnePatient = () => {
    this.app.get('/patient/:id', async (req, res) => {
      try {
        const { id } = req.params;

        const patient = await this.Patient.findAll({
          where: {id},
          raw: true
        });

        if (!patient.length) {
          res.status(401).json({
            code: 401,
            message: 'Ce patient n\'existe pas.'
          });
          return;
        }
        const Patient = patient[0];

        console.log(Patient);
        res.status(200).json(patient);
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
        const { firstName, lastName, email, address, dateofbirth, id_city, id_gender, id_language } = req.body;
        // Création du nouveau patient dans la base de données
        const newPatient = await this.Patient.create({
          firstName,
          lastName,
          email,
          address,
          dateofbirth,
          id_city,
          id_gender,
          id_language
        }, {raw: true});

        // Envoie d'une réponse avec le patient créé
        res.status(201).json(newPatient);
  
      } catch (err) {
          console.error(`[ERROR] patient/add -> ${err}`);
  
          res.status(400).json({
          code: 400,
          message: 'Bad request'
          });
      }
    });
  }

  updatePatient =  () => {
    this.app.put('/patient/update/:id', async (req, res) => {
      try {
          const { id } = req.params;
          const { firstName, lastName, email, address, dateofbirth, id_city, id_gender, id_language } = req.body;

          const [updated] = await this.Patient.update({
              firstName, 
              lastName, 
              email, 
              address, 
              dateofbirth, 
              id_city, 
              id_gender, 
              id_language
          }, {
              where: { id },
              raw: true
          });

          if (!updated) {
              throw new Error('Unable to find the patient to update');
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
