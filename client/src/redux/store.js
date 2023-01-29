import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import booksReducer from './reducers/booksReducer';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    info: infoReducer,
    author: authorReducer,
  },
});

export default store;
