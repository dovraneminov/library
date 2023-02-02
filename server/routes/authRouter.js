const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const mailer = require('../nodemailer');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    name, email, phone, password,
  } = req.body;
  if (!name || !email || !phone || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля' });
  const hash = await bcrypt.hash(password, 7);

  try {
    const [newUser, isExist] = await User.findOrCreate({
      where: { email },
      defaults: {
        name, email, phone, password: hash,
      },
    });
    if (!isExist) return res.status(401).json({ message: 'Пользователь уже существует' });
    const sessionUser = JSON.parse(JSON.stringify(newUser));
    delete sessionUser.password;
    const message = {
      from: 'Mailer test <test.tester.test@internet.ru>',
      to: req.body.email,
      subject: 'Message from Node js',
      text: 'Поздравляем! Вы зарегистрировались на сайте Library!',
    };
    mailer(message);

    req.session.user = sessionUser;
    return res.json(sessionUser);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля' });
  try {
    const userInDb = await User.findOne({ where: { email } });
    if (!userInDb) return res.status(400).json({ message: 'Такого пользователя не существует' });
    const compare = await bcrypt.compare(password, userInDb.password);
    if (compare) {
      const sessionUser = JSON.parse(JSON.stringify(userInDb));
      delete sessionUser.password;
      // const message = {
      //   from: 'Mailer test <test.tester.test@internet.ru>',
      //   to: req.body.email,
      //   subject: 'Message from Node js',
      //   text: 'You are authorizing.',
      // };
      // mailer(message);
      req.session.user = sessionUser;
      return res.json(sessionUser);
    }
    return res.status(400).json({ message: 'Неправильный пароль' });
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

module.exports = router;
