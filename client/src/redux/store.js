import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import popularSlice from './popularSlice';
import publisherSlice from './publisherSlice';
import bookSlice from './bookSlice';
import booksesReducer from './reducers/booksReducer';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';

const store = configureStore({
  reducer: {

    user: userReducer,
    persons: popularSlice,
    publisher: publisherSlice,

    myBooks: bookSlice,
    bookses: booksesReducer,
    books: bookSlice,
    info: infoReducer,
    author: authorReducer,
  },
});

export default store;
