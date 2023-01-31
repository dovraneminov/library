module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Populars', [{
      title: 'Как правильно гуглить',
      description: '«Как правильно гуглить - это книга о том, как правильно гуглить',
      photo: 'photo soon',
      rating: 10.0,
      authorId: 25,
      genreId: 12,
    },
    {
      title: 'Как за 3 месяца стать Fullstack разработчиком',
      description: 'Благодаря этой книге вы сможете понять, что Elbrus bootcamp вам необходим',
      photo: 'photo soon',
      rating: 10.0,
      authorId: 23,
      genreId: 12,
    },
    {
      title: 'Всегда улыбаться или как не убить Артёма, когда он подходит с 40 вопросом за час',
      description: 'Книга о том, как постоянно оставаться добрым и позитивным',
      photo: 'photo soon',
      rating: 10.0,
      authorId: 24,
      genreId: 12,
    },
    {
      title: 'Всё изи',
      description: 'Добавить нечего',
      photo: 'photo soon',
      rating: 10.0,
      authorId: 26,
      genreId: 12,
    },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Populars', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
