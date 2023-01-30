import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import popularSlice from './popularSlice';
import publisherSlice from './publisherSlice';
import bookSlice from './bookSlice';
// import booksReducer from './reducers/booksReducer';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';
import orderReducer from './reducers/orderSlice';
import booksesReducer from './reducers/booksesSlice';
import priceReducer from './reducers/priceSlice';
import personalAreaReducer from './reducers/personalAreaSlice';

const store = configureStore({
  reducer: {

    user: userReducer,
    persons: popularSlice,
    publisher: publisherSlice,
    books: bookSlice,
    bookses: booksesReducer,
    info: infoReducer,
    author: authorReducer,
    order: orderReducer,
    price: priceReducer,
    cabinet: personalAreaReducer,
  },
});

export default store;
