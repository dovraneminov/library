const express = require('express');
const { Book, Author, Genre } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Book.findOne({ where: { id:authorId }, include: [Author, Genre] });
  res.json(author);
});

module.exports = router;
