module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {type: DataTypes.STRING},
        phone: DataTypes.STRING,
        userName: {type: DataTypes.STRING},
        password: DataTypes.STRING,
        admin: DataTypes.STRING
      }
    );
    User.associate = models => {
      models.User.hasMany(models.Ticket);
      models.User.belongsTo(models.Company);
      models.User.belongsTo(models.Department);
      models.User.hasMany(models.Advice);
    };
    return User;
  };