import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks: (state, action) => action.payload,
  },
});
export const { setBooks } = booksSlice.actions;

export const booksAction = () => (dispatch) => {
  axios('http://localhost:3001/books').then((res) => dispatch(setBooks(res.data)));
};

export default booksSlice.reducer;
