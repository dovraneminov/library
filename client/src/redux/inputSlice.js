import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const inputSlice = createSlice({
  name: 'input',
  initialState: [],
  reducers: {
    getInput: (state, action) => action.payload,
  },
});

export const { getInput } = inputSlice.actions;

export const fetchInput = (input) => (dispatch) => {
  axios.post('/main', { input }).then((res) => {
    // console.log(res.data, 'данные с бека');
    dispatch(getInput(res.data));
  });
};

export default inputSlice.reducer;
