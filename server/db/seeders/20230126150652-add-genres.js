module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [{
      genre: 'Фантастика',
    },
    {
      genre: 'Фэнтези',
    },
    {
      genre: 'Приключения',
    },
    {
      genre: 'Детектив',
    },
    {
      genre: 'Ужасы',
    },
    {
      genre: 'Роман',
    },
    {
      genre: 'Юмор',
    },
    {
      genre: 'Поэзия',
    },
    {
      genre: 'Драматургия',
    },
    {
      genre: 'Фольклор',
    },
    {
      genre: 'Сказка',
    },
    {
      genre: 'Научная литература',
    },
    {
      genre: 'Биография',
    },
    {
      genre: 'Медицина',
    },
    {
      genre: 'Бизнес',
    },
    {
      genre: 'Фанфик',
    },
    {
      genre: 'Проза',
    },
    {
      genre: 'Справочная литература',
    },
    {
      genre: 'Исторические',
    },
    {
      genre: 'Комиксы',
    },
    {
      genre: 'Художественная литература',
    },
    {
      genre: 'Манга',
    },

    ]);
  },

  async down(queryInterface, Sequelize) {

  },
};
