import { DataTypes } from 'sequelize';


export default (sequelize) => {
  const Patient = sequelize.define('Patient', {
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

  Patient.associate = (models) => {
    Patient.belongsTo(models.City, { foreignKey: 'id_city', as: 'city' });
    Patient.belongsTo(models.Gender, { foreignKey: 'id_gender', as: 'gender' });
  };
  
  return Patient;
};