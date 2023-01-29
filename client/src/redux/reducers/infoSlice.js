import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const infoSlice = createSlice({
  name: 'info',
  initialState: [],
  reducers: {
    setInfo: (state, action) => action.payload,
  },
});
export const { setInfo } = infoSlice.actions;

export const infoAction = (id) => (dispatch) => {
  axios(`http://localhost:3001/books/info/${id}`).then((res) => dispatch(setInfo(res.data)));
};

export default infoSlice.reducer;
