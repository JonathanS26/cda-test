import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Gender = sequelize.define('Gender', {
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
        tableName: 'genders',
        timestamps: false
      });
    
      Gender.associate = (models) => {
        Gender.hasMany(models.Patient, { foreignKey: 'id_gender', as: 'patients' });
      };
      

  return Gender;
};
