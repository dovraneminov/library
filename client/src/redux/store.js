import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import popularSlice from './popularSlice';
import publisherSlice from './publisherSlice';
import bookSlice from './bookSlice';
import booksesReducer from './reducers/booksesSlice';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';
import orderReducer from './reducers/orderSlice';
// import booksesReducer from './reducers/booksesSlice';
import priceReducer from './reducers/priceSlice';
import personalAreaReducer from './reducers/personalAreaSlice';
// import onePopularSlice from './onePopularSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    persons: popularSlice,
    // popular: onePopularSlice,
    publisher: publisherSlice,
    myBooks: bookSlice,
    bookses: booksesReducer,
    books: bookSlice,
    info: infoReducer,
    author: authorReducer,
    order: orderReducer,
    price: priceReducer,
    cabinet: personalAreaReducer,
  },
});

export default store;
