module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'Category',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING
      }
    );
    Category.associate = models => {
      models.Category.hasMany(models.Ticket);
    };
    return Category;
  };