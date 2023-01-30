import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const booksesSlice = createSlice({
  name: 'bookses',
  initialState: [],
  reducers: {
    setBookses: (state, action) => action.payload,
  },
});
export const { setBookses } = booksesSlice.actions;

export const booksesAction = () => (dispatch) => {
  axios('http://localhost:3001/books').then((res) => dispatch(setBookses(res.data)));
};

export default booksesSlice.reducer;
