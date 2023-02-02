const express = require('express');
const { Book, Author, Genre } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allBooks = await Book.findAll({ include: [Author, Genre] });
  res.json(allBooks);
});

router.get('/info/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const oneBook = await Book.findOne({ where: { id }, include: [Author, Genre] });
    res.json(oneBook);
  } catch (e) {
    console.log(e);
  }
});

router.get('/author/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Book.findOne({ where: { id: authorId }, include: [Author, Genre] });
    res.json(author);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
