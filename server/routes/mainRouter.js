const express = require('express');
const {
  Popular, Author, Book, Genre,
} = require('../db/models');

const router = express.Router();

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
