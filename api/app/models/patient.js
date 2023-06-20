import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import City from './City';
import Gender from './Gender';

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dateofbirth: {
    type: DataTypes.DATE,
    allowNull: true
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_city: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_gender: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'patients',
  timestamps: false
});

Patient.belongsTo(City, { foreignKey: 'id_city' });
Patient.belongsTo(Gender, { foreignKey: 'id_gender' });

export default Patient;
