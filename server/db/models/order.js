const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Book, { foreignKey: 'bookId' });
      this.belongsTo(models.Popular, { foreignKey: 'popularId' });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    popularId: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    price: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
