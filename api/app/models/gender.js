import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

const Gender = sequelize.define('Gender', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'genders',
  timestamps: false
});

export default Gender;
