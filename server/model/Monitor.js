module.exports = (sequelize, DataTypes) => {
    const Monitor = sequelize.define(
      'Monitor',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        description: DataTypes.STRING
      }
    );
    Monitor.associate = models => {
      models.Monitor.belongsTo(models.Ticket);
    };
    return Monitor;
  };