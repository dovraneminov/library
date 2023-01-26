// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = { isLoading: true };

// export const userSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     setUsers: (state, action) => action.payload,
//     logoutUser: () => {},
//   },
// });

// export const { setUsers, logoutUser } = userSlice.actions;

// export const signupAction = (e) => (dispatch) => {
//   e.preventDefault();
//   axios.post('/auth/signup', Object.fromEntries(new FormData(e.target))).then((resp) => {
//     dispatch(setUsers({ ...resp.data, isLoading: false }));
//   });
// };

// export const handleLoginAction = (e) => (dispatch) => {
//   e.preventDefault();
//   axios.post('/auth/login', Object.fromEntries(new FormData(e.target))).then((res) =>
// dispatch(setUsers({ ...res.data, isLoading: false }))).catch(() =>
// dispatch(setUsers({ isLoading: false })));
// };

// export const userCheckAction = () => (dispatch) => {
//   axios.post('/auth/check').then((res) =>
// dispatch(setUsers({ ...res.data, isLoading: false }))).catch(() =>
// dispatch(setUsers({ isLoading: false })));
// };

// export const userLogoutAction = () => (dispatch) => {
//   axios.get('/auth/logout').then(() =>
// dispatch(logoutUser({ isLoading: false }))).catch(() =>
// dispatch(setUsers({ isLoading: false })));
// };

// export default userSlice.reducer;
