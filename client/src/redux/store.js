import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import personsReducer from './personsSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    persons: personsReducer,

  },
});

export default store;
