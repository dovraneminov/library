const express = require('express');
const mailer = require('../nodemailer');

const router = express.Router();

router.get('/', (req, res) => {
  const message = {
    from: 'Library server <test.tester.test@internet.ru>',
    to: req.session.user.email,
    subject: 'Успешная оплата',
    text: 'Поздравляем! Оплата прошла успешно!',
  };
  mailer(message);
  return res.sendStatus(200);
});

module.exports = router;
