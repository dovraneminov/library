module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Populars', [{
      title: 'Как правильно гуглить',
      description: '«Как правильно гуглить - это книга о том, как правильно гуглить',
      photo: 'https://sun9-20.userapi.com/impg/3VRza0dNhKvPXqkDqL4IykVPzfMQbKzroEyPKA/cwu-dr3pCaU.jpg?size=1620x2160&quality=96&sign=0f8cb15596acf08954a270d9c947c176&type=album',
      rating: 10.0,
      authorId: 25,
      genreId: 12,
    },
    {
      title: 'Как за 3 месяца стать Fullstack разработчиком',
      description: 'Благодаря этой книге вы сможете понять, что Elbrus bootcamp вам необходим',
      photo: 'https://sun9-2.userapi.com/impg/iNORci45DSneTami1NA0kjIRa4kPrDQ9TSvjbA/LE7xRWzzPmw.jpg?size=1620x2160&quality=96&sign=e974644b027fda24538d8b71110c6f49&type=album',
      rating: 10.0,
      authorId: 23,
      genreId: 12,
    },
    {
      title: 'Всегда улыбаться или как не убить Артёма, когда он подходит с 40 вопросом за час',
      description: 'Книга о том, как постоянно оставаться добрым и позитивным',
      photo: 'https://sun9-49.userapi.com/impg/amw5F0oWFyYklaGkwIosjdnS3dtFuUoy6EpeGQ/Q6rAFaxOq1Q.jpg?size=1620x2160&quality=96&sign=842e60b57543242d07a419c82935bc1e&type=album',
      rating: 10.0,
      authorId: 24,
      genreId: 12,
    },
    {
      title: 'Всё изи',
      description: 'Добавить нечего',
      photo: 'https://sun9-60.userapi.com/impg/oJ5xkNI1i66cSLHf4rZg0WBPrBbZqlSysAUXdQ/yNnjQ6-9QkE.jpg?size=1620x2160&quality=96&sign=1c89f93034b8565235e9230692478975&type=album',
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
