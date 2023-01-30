const express = require('express');
const { Popular, Author, Book } = require('../db/models');

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
  const popular = await Book.findAll();
  console.log('helo');
  res.json(popular);
});
module.exports = router;
