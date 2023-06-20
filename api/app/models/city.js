import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'cities',
  timestamps: false
});

export default City;
