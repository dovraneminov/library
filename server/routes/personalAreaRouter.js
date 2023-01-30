const express = require('express');
const { Order, User, Book } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allOrders = await Order.findAll(
    { where: { userId: req.session.user.id }, include: [User, Book] },
  );
  res.json(allOrders);
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Order.destroy({ where: { id, userId: req.session.user.id } });
  res.sendStatus(200);
});

module.exports = router;
