const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');
const apiRouter = require('./routes/apiRouter');
const mainRouter = require('./routes/mainRouter');
const allBooksRouter = require('./routes/allBooksRouter');
const authorsRouter = require('./routes/authorsRouter');
const orderRouter = require('./routes/orderRouter');
const personalAreaRouter = require('./routes/personalAreaRouter');
const mailerRouter = require('./routes/mailerRouter');
const favoriteRouter = require('./routes/favoriteRouter');

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3001;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(session(sessionConfig));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/main', mainRouter);
app.use('/books', allBooksRouter);
app.use('/publisher', authorsRouter);
app.use('/order', orderRouter);
app.use('/cabinet', personalAreaRouter);
app.use('/mailer', mailerRouter);
app.use('/favorite', favoriteRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
