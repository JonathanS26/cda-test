import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: 'id_role', as: 'role' });
  };
  

  return User;
}