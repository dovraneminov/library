const express = require('express');
const {
  Book, Author, Genre, Favorite,
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allFavorite = await Favorite.findAll({ where: { userId: req.session.user.id } });
  res.json(allFavorite);
});

router.post('/add', async (req, res) => {
  const { bookId } = req.body;
  const newFavorite = await Favorite.create({ userId: req.session.user.id, bookId });
  res.json(newFavorite);
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Favorite.destroy({ where: { id, userId: req.session.user.id } });
  res.sendStatus(200);
});

module.exports = router;
