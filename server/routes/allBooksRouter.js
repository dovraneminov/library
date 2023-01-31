const express = require('express');
const { Book, Author, Genre } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allBooks = await Book.findAll({ include: [Author, Genre] });
  res.json(allBooks);
});

router.get('/info/:id', async (req, res) => {
  const { id } = req.params;
  const oneBook = await Book.findOne({ where: { id }, include: [Author, Genre] });
  res.json(oneBook);
});

module.exports = router;
