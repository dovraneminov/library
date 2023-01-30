const express = require('express');
const { Order } = require('../db/models');

const router = express.Router();

router.post('/add', async (req, res) => {
  const {
    bookId, popularId, adress, date, time, price, days,
  } = req.body;
  console.log(req.body);
  const newOrder = await Order.create({
    userId: req.session?.user?.id, bookId, popularId, adress, date, time, price, days: Number(days),
  });
  res.json(newOrder);
});

module.exports = router;
