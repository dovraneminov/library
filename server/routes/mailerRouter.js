const express = require('express');
const mailer = require('../nodemailer');

const router = express.Router();

router.get('/', (req, res) => {
  const message = {
    from: 'Mailer test <test.tester.test@internet.ru>',
    to: req.session.user.email,
    subject: 'Message from Node js',
    text: 'You payed',
  };
  mailer(message);
  return res.sendStatus(200);
});

module.exports = router;
