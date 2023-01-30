/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      bookId: {
        references: {
          model: {
            tableName: 'Books',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      popularId: {
        references: {
          model: {
            tableName: 'Populars',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      adress: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      time: {
        type: Sequelize.TIME,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      days: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
