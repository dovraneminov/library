const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Book, { foreignKey: 'authorId' });
      this.hasMany(models.Popular, { foreignKey: 'authorId' });
      this.hasMany(models.MyBook, { foreignKey: 'authorId' });
    }
  }
  Author.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};
