const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MyBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, { foreignKey: 'authorId' });
      this.belongsTo(models.Genre, { foreignKey: 'genreId' });
    }
  }
  MyBook.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    photo: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MyBook',
  });
  return MyBook;
};
