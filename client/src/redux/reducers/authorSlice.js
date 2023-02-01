import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authorSlice = createSlice({
  name: 'author',
  initialState: [],
  reducers: {
    setAuthor: (state, action) => action.payload,
    setAuthorBooks: (state, action) => action.payload,
  },
});
export const { setAuthor, setAuthorBooks } = authorSlice.actions;

export const authorAction = (id) => (dispatch) => {
  axios(`http://localhost:3001/books/author/${id}`).then((res) => dispatch(setAuthor(res.data)));
};

export const authorBooksAction = (id) => (dispatch) => {
  axios(`http://localhost:3001/publisher/${id}`).then((res) => dispatch(setAuthorBooks(res.data)));
};

export default authorSlice.reducer;
