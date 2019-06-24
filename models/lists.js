module.exports = (sequelize, DataTypes) => {
  return sequelize.define('lists', {
    listId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING(1000),
    },
  }, {
      timestamps: false,
    });
};