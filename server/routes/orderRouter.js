const express = require('express');
const { Order } = require('../db/models');

const router = express.Router();

router.post('/add', async (req, res) => {
  const {
    adress, date, time, price, days,
  } = req.body;
  const newOrder = Order.create({
    userId: req.session.user.id, adress, date, time, price, days,
  });
  res.json(newOrder);
});

module.exports = router;
