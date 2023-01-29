import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const popularSlice = createSlice({
  name: 'persons',
  initialState: [],
  reducers: {
    getPersons: (state, action) => (action.payload),
  },
});

export const { getPersons } = popularSlice.actions;

export const getPersonsAction = () => (dispatch) => {
  axios.get('http://localhost:3001/main/getpopular')
    .then((res) => {
      dispatch(getPersons(res.data));
    });
};

export default popularSlice.reducer;
