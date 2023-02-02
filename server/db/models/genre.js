const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Book, { foreignKey: 'genreId' });
      this.hasMany(models.Popular, { foreignKey: 'genreId' });
      this.hasMany(models.MyBook, { foreignKey: 'genreId' });
    }
  }
  Genre.init({
    genre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};
