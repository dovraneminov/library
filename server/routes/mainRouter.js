const express = require('express');
const {
  Popular, Author, Book, Genre,
} = require('../db/models');

const router = express.Router();

router.get('/getpopular', async (req, res) => {
  const popular = await Popular.findAll();
  res.json(popular);
});

router.get('/publisher', async (req, res) => {
  const popular = await Author.findAll();
  res.json(popular);
});

router.get('/getbooks', async (req, res) => {
  const books = await Book.findAll({ include: [Author, Genre] });
  res.json(books);
});
module.exports = router;
