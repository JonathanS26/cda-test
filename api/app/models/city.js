import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const City = sequelize.define('City', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'zipCode'
    }
  }, {
    tableName: 'cities',
    timestamps: false
  });

  City.associate = (models) => {
    City.hasMany(models.Patient, { foreignKey: 'id_city', as: 'patients' });
  };
  
  return City;
};
