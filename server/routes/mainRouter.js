const express = require('express');
const { Op } = require('sequelize');
const {
  Popular, Author, Book, Genre, Sequelize,
} = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { input } = req.body;
  const foundBook = await Book.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Sequelize.Op.iLike]: `%${input}%`,
          },
        },
        {
          description: {
            [Sequelize.Op.iLike]: `%${input}%`,
          },
        }],
    },
  });
  const foundAuthor = await Author.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Sequelize.Op.iLike]: `%${input}%`,
          },
        },
        {
          description: {
            [Sequelize.Op.iLike]: `%${input}%`,
          },
        }],
    },
  });

  const foundPopular = await Popular.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Sequelize.Op.iLike]: `%${input}%`,
          },
        },
        {
          description: {
            [Sequelize.Op.iLike]: `%${input}%`,
          },
        }],
    },
  });

  const foundGenre = await Genre.findAll({
    where: {
      genre: {
        [Sequelize.Op.iLike]: `%${input}%`,
      },
    },
  });

  const found = [...foundBook, ...foundAuthor, ...foundPopular, ...foundGenre];
  console.log(found, input);
  res.json(found);
});

router.get('/getpopular', async (req, res) => {
  const popular = await Popular.findAll();
  res.json(popular);
});

router.get('/getbooks', async (req, res) => {
  const books = await Book.findAll({ include: [Author, Genre] });
  res.json(books);
});

router.get('/onepopular/:id', async (req, res) => {
  const { id } = req.params;
  const popular = await Popular.findAll({ where: { id } });
  res.json(popular);
});
module.exports = router;
