import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrder: (state, action) => action.payload,
    addOrder: (state, action) => [...state, action.payload],
    nullOrder: (state, action) => [],
  },
});
export const { setOrder, addOrder, nullOrder } = orderSlice.actions;

export const orderAction = (inputs) => (dispatch) => {
  axios.post('http://localhost:3001/order/add', inputs).then((res) => dispatch(setOrder(res.data)));
};

export default orderSlice.reducer;
