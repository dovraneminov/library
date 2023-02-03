const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Popular extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Review, { foreignKey: 'popularId' });
      this.belongsTo(models.Author, { foreignKey: 'authorId' });
      this.belongsTo(models.Genre, { foreignKey: 'genreId' });
      this.hasMany(models.Order, { foreignKey: 'popularId' });
    }
  }
  Popular.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Popular',
  });
  return Popular;
};
