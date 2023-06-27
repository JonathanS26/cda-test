import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Role = sequelize.define('Role', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: true
  }
  }, {
  tableName: 'roles',
  timestamps: false
  });

  Role.associate = (models) => {
    Role.hasMany(models.User, { foreignKey: 'id_role', as: 'users' });
  };  

  return Role;
};