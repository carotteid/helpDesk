module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define(
      'Company',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        web: DataTypes.STRING
      }
    );
    Company.associate = models => {
      models.Company.hasMany(models.User);
    };
    return Company;
  };