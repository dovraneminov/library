import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authorInfoSlice = createSlice({
  name: 'authorInfo',
  initialState: [],
  reducers: {
    setAuthorInfo: (state, action) => action.payload,
  },
});
export const { setAuthorInfo } = authorInfoSlice.actions;

export const authorInfoAction = (id) => (dispatch) => {
  axios(`http://localhost:3001/publisher/${id}`).then((res) => dispatch(setAuthorInfo(res.data)));
};

export default authorInfoSlice.reducer;
