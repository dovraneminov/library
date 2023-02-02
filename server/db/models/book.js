const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Review, { foreignKey: 'bookId' });
      this.belongsTo(models.Author, { foreignKey: 'authorId' });
      this.belongsTo(models.Genre, { foreignKey: 'genreId' });
      this.hasMany(models.Order, { foreignKey: 'bookId' });
      this.hasMany(models.Favorite, { foreignKey: 'bookId' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    photo: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
