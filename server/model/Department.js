module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define(
      'Department',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        priority: DataTypes.INTEGER
      }
    );
    Department.associate = models => {
      models.Department.hasMany(models.User);
      models.Department.hasMany(models.Ticket);
    };
    return Department;
  };
  