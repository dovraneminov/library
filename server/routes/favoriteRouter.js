const express = require('express');
const {
  Favorite, User, Book, Author, Genre,
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allFavorite = await Favorite.findAll({
    where: { userId: req.session.user.id },
    include: [{ model: Book, include: [Author, Genre] }, User],
  });
  res.json(allFavorite);
});

router.post('/add/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const newFavorite = await Favorite.create({ userId: req.session.user.id, bookId: id });
    res.json(newFavorite);
  } catch (e) {
    console.log(e);
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Favorite.destroy({ where: { id, userId: req.session.user.id } });
  res.sendStatus(200);
});

module.exports = router;
