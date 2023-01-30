import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const personsSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    getPersons: (state, action) => action.payload,
  },
});

export const { getPersons } = personsSlice.actions;

export const personsAction = () => (dispatch) => {
  axios('/api/comics')
    .then((res) => dispatch(getPersons(res.data)))
    .catch(() => dispatch(getPersons({})));
};

export default personsSlice.reducer;
