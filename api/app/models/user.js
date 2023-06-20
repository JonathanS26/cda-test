import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Role from './Role';

const User = sequelize.define('User', {
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
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_role: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

User.belongsTo(Role, { foreignKey: 'id_role' });

export default User;
