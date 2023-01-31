import { createSlice } from '@reduxjs/toolkit';

export const priceSlice = createSlice({
  name: 'price',
  initialState: 0,
  reducers: {
    plusOrder: (state, action) => state + action.payload,
    totalPrice: (state, action) => action.payload,
  },
});
export const { plusOrder, totalPrice } = priceSlice.actions;

export default priceSlice.reducer;
