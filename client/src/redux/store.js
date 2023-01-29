import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import popularSlice from './popularSlice';
import publisherSlice from './publisherSlice';
import bookSlice from './bookSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    persons: popularSlice,
    publisher: publisherSlice,
    books: bookSlice,
  },
});

export default store;
