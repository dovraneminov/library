import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const bookSlice = createSlice({
  name: 'myBooks',
  initialState: [],
  reducers: {
    getBooks: (state, action) => (action.payload),
    getChunks: (state, action) => {
      const chunkArray = [];
      for (let i = 0; i < action.payload.length; i += 4) {
        const chunk = action.payload.slice(i, i + 4);
        chunkArray.push(chunk);
      }
      return chunkArray;
    },
  },
});

export const { getBooks } = bookSlice.actions;
export const { getChunks } = bookSlice.actions;

export const getBooksAction = () => (dispatch) => {
  axios.get('http://localhost:3001/main/getbooks')
    .then((res) => {
      dispatch(getBooks(res.data));
    });
};
export const getBooksChunksAction = () => (dispatch) => {
  axios.get('http://localhost:3001/main/getbooks')
    .then((res) => {
      dispatch(getChunks(res.data));
    });
};

export default bookSlice.reducer;
