import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    setOrder: (state, action) => action.payload,
  },
});
export const { setOrder } = orderSlice.actions;

export const orderAction = (e) => (dispatch) => {
  axios.post('http://localhost:3001/order/add', Object.fromEntries(new FormData(e.target))).then((res) => dispatch(setOrder(res.data)));
};

export default orderSlice.reducer;
