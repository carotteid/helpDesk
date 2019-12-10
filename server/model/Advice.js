module.exports = (sequelize, DataTypes) => {
    const Advice = sequelize.define(
      'Advice',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userTo: DataTypes.INTEGER,
        description: DataTypes.STRING
      }
    );
    Advice.associate = models => {
      models.Advice.belongsTo(models.User);
    };
    return Advice;
  };