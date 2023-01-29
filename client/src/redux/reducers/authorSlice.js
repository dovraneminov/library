import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authorSlice = createSlice({
  name: 'author',
  initialState: [],
  reducers: {
    setAuthor: (state, action) => action.payload,
  },
});
export const { setAuthor } = authorSlice.actions;

export const authorAction = (id) => (dispatch) => {
  axios(`http://localhost:3001/author/${id}`).then((res) => dispatch(setAuthor(res.data)));
};

export default authorSlice.reducer;
