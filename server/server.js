const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const authRouter = require('./routes/authRouter');
const mainRouter = require('./routes/mainRouter');
const allBooksRouter = require('./routes/allBooksRouter');
const authorRouter = require('./routes/authorRouter')

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

app.use('/auth', authRouter);
app.use('/main', mainRouter);
app.use('/books', allBooksRouter);
app.use('/author',authorRouter)

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
