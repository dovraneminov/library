import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const personalAreaSlice = createSlice({
  name: 'cabinet',
  initialState: [],
  reducers: {
    setCabinet: (state, action) => action.payload,
    deleteCabinet: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});
export const { setCabinet, deleteCabinet } = personalAreaSlice.actions;

export const cabinetAction = () => (dispatch) => {
  axios('http://localhost:3001/cabinet').then((res) => dispatch(setCabinet(res.data)));
};

export const cabinetDelete = (id) => (dispatch) => {
  axios.delete(`http://localhost:3001/cabinet/delete/${id}`).then(() => dispatch(deleteCabinet(id)));
};

export default personalAreaSlice.reducer;
