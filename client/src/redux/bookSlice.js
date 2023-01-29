import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks: (state, action) => (action.payload),
  },
});

export const { getBooks } = bookSlice.actions;

export const getBooksAction = () => (dispatch) => {
  axios.get('http://localhost:3001/main/getbooks')
    .then((res) => {
      dispatch(getBooks(res.data));
    });
};

export default bookSlice.reducer;
