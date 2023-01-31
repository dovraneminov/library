import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const onePopularSlice = createSlice({
  name: 'popular',
  initialState: [],
  reducers: {
    getPopular: (state, action) => (action.payload),
  },
});

export const { getPopular } = onePopularSlice.actions;

export const getPopularAction = () => (dispatch) => {
  axios.get('http://localhost:3001/main/onepopular/:id')
    .then((res) => {
      console.log('tut');
      dispatch(getPopular(res.data));
    });
};

export default onePopularSlice.reducer;
