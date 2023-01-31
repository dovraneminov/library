import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const publisherSlice = createSlice({
  name: 'publisher',
  initialState: [],
  reducers: {
    getPublisher: (state, action) => (action.payload),
  },
});

export const { getPublisher } = publisherSlice.actions;

export const getPublisherAction = () => (dispatch) => {
  axios.get('http://localhost:3001/publisher')
    .then((res) => {
      dispatch(getPublisher(res.data));
    });
};

export default publisherSlice.reducer;
