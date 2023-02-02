import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const publisherSlice = createSlice({
  name: 'publisher',
  initialState: [],
  reducers: {
    getPublisher: (state, action) => (action.payload),
    getPublisherChunks: (state, action) => {
      const chunkArray = [];
      for (let i = 0; i < action.payload.length; i += 4) {
        const chunk = action.payload.slice(i, i + 4);
        chunkArray.push(chunk);
      }
      return chunkArray;
    },
  },
});

export const { getPublisher } = publisherSlice.actions;
export const { getPublisherChunks } = publisherSlice.actions;

export const getPublisherAction = () => (dispatch) => {
  axios.get('http://localhost:3001/publisher')
    .then((res) => {
      dispatch(getPublisher(res.data));
    });
};

export const getPublisherChunksAction = () => (dispatch) => {
  axios.get('http://localhost:3001/main/publisher')
    .then((res) => {
      dispatch(getPublisherChunks(res.data));
    });
};

export default publisherSlice.reducer;
