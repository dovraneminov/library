import { createSlice } from '@reduxjs/toolkit';

export const priceSlice = createSlice({
  name: 'price',
  initialState: 0,
  reducers: {
    plusOrder: (state, action) => state + action.payload,
    totalPrice: (state, action) => action.payload,
    nullMoney: (state, action) => null,
  },
});
export const { plusOrder, totalPrice,nullMoney } = priceSlice.actions;

export default priceSlice.reducer;
