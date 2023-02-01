const express = require('express');
const { Book, Author, Genre } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const popular = await Author.findAll();
  res.json(popular);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Author.findAll({ where: { id }, include: [Book] });
    res.json(books);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
