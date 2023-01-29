import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import booksReducer from './reducers/booksReducer';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';
import orderReducer from './reducers/orderSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    books: booksReducer,
    info: infoReducer,
    author: authorReducer,
    order: orderReducer,
  },
});

export default store;
