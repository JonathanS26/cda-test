import mongoose from 'mongoose';
import PatientSchema from '../models/patient.js';

const Patient = mongoose.model('Patient', PatientSchema);


const Patients = class Patients {
  /**
   * @constructor
   * @param {Object} app
   * 
   */
  constructor (app) {
      this.app = app;

      this.run();
  }

//   all () {
//     this.app.get('/patients', (req, res) => {
//     try {
//         res.status(200).json([
//         {
//             id: '1',
//             firstName: 'Otto',
//             lastName: 'Mark',
//             cellPhone: '0606060606',
//             email: 'mark@gmail.com',
//             accidentType: 'voiture'
//         }, {
//             id: '2',
//             firstName: 'Marie',
//             lastName: 'Dupuis',
//             cellPhone: '0620658547',
//             email: 'marie@gmail.com',
//             accidentType: 'voiture'
//         }, {
//             id: '3',
//             firstName: 'David',
//             lastName: 'Dubois',
//             cellPhone: '0669542588',
//             email: 'david@gmail.com',
//             accidentType: 'voiture'
//         }
//     ]);
//     }  catch (err) {
//         console.error(`[ERROR] patients -> ${err}`);

//         res.status(400).json({
//         code: 400,
//         message: 'Bad request'
//         });
//     }
//     });
//   }

  all () {
    this.app.get('/patients', async (req, res) => {
      try {
          const patients = await Patient.find({});
          res.status(200).json(patients);
      } catch (err) {
          console.error(`[ERROR] patients -> ${err}`);

          res.status(400).json({
          code: 400,
          message: 'Bad request'
          });
      }
    });
  }

  add () {
    this.app.post('/patients', async (req, res) => {
      try {
          const patient = new Patient(req.body);
          await patient.save();

          res.status(201).json(patient);
      } catch (err) {
          console.error(`[ERROR] patients -> ${err}`);

          res.status(400).json({
          code: 400,
          message: 'Bad request'
          });
      }
    });
  }

  update () {
    this.app.put('/patients/:id', async (req, res) => {
      try {
          const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
          
          if (!patient) {
            return res.status(404).json({
              message: "No patient found with this id"
            });
          }

          res.status(200).json(patient);
      } catch (err) {
          console.error(`[ERROR] patients -> ${err}`);

          res.status(400).json({
          code: 400,
          message: 'Bad request'
          });
      }
    });
  }

  delete () {
    this.app.delete('/patients/:id', async (req, res) => {
      try {
          const patient = await Patient.findByIdAndDelete(req.params.id);

          if (!patient) {
            return res.status(404).json({
              message: "No patient found with this id"
            });
          }

          res.status(200).json({ message: 'Patient deleted successfully' });
      } catch (err) {
          console.error(`[ERROR] patients -> ${err}`);

          res.status(400).json({
          code: 400,
          message: 'Bad request'
          });
      }
    });
  }


  run () {
    this.all();
    this.add();
    this.update();
    this.delete();
  }
}

export default Patients;
