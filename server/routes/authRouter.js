const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body, '=======++++++++++==================');
  if (!name || !email || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля' });
  const hash = await bcrypt.hash(password, 7);

  try {
    const [newUser, isExist] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, password: hash },
    });
    if (!isExist) return res.status(401).json({ message: 'Пользователь уже существует' });
    const sessionUser = JSON.parse(JSON.stringify(newUser));
    delete sessionUser.password;
    req.session.user = sessionUser;
    res.json(sessionUser);
  } catch (err) {
    console.log(err);
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
      req.session.user = sessionUser;
      return res.json(sessionUser);
    }
    res.status(400).json({ message: 'Неправильный пароль' });
  } catch (err) {
    console.log(err);
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
