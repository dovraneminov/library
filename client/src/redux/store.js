import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import popularSlice from './popularSlice';
import publisherSlice from './publisherSlice';
import bookSlice from './bookSlice';
import booksReducer from './reducers/booksReducer';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';
import inputSlice from './inputSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    persons: popularSlice,
    publisher: publisherSlice,
    myBooks: bookSlice,
    books: booksReducer,
    // bookses: booksesReducer,
    info: infoReducer,
    author: authorReducer,
    input: inputSlice,
  },
});

export default store;
