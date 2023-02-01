import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    setFavorite: (state, action) => action.payload,
    deleteFavorite: (state, action) => state.filter((el) => el.id !== action.payload),
    addFavorite: (state, action) => {
      if (state.find((el) => el.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    },
  },
});
export const { setFavorite, deleteFavorite, addFavorite } = favoriteSlice.actions;

export const favoriteAction = () => (dispatch) => {
  axios('http://localhost:3001/favorite').then((res) => dispatch(setFavorite(res.data)));
};

export const favoriteDeleteAction = (id) => (dispatch) => {
  axios.delete(`http://localhost:3001/favorite/delete/${id}`).then(() => dispatch(deleteFavorite(id)));
};

export const favoriteAddAction = (id) => (dispatch) => {
  axios.post(`http://localhost:3001/favorite/add/${id}`).then((res) => dispatch(addFavorite(res.data)));
};

export default favoriteSlice.reducer;
