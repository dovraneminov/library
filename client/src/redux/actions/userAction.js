import axios from 'axios';
import { LOGOUT, SET_EMPTY_USER, SET_USER } from '../types';

export const setUser = (payload) => ({ type: SET_USER, payload });

export const AuthLogin = (e) => (dispatch) => {
  e.preventDefault();
  axios.post('/auth/signup', Object.fromEntries(new FormData(e.target)))
    .then((res) => dispatch(setUser(res.data)))
    .catch(() => dispatch({ type: 'SIGNUP_FAILED' }));
};

export const submitLogin = (e) => (dispatch) => {
  e.preventDefault();
  axios.post('/auth/login', Object.fromEntries(new FormData(e.target)))
    .then((res) => dispatch(setUser(res.data)))
    .catch(() => dispatch({ type: 'LOGIN_FAILED' }));
};

export const logoutUser = (e) => (dispatch) => {
  e.preventDefault();
  axios.get('/auth/logout')
    .then(() => dispatch({ type: LOGOUT }));
};

export const checkAuth = () => (dispatch) => {
  axios.post('/auth/check')
    .then((res) => dispatch(setUser(res.data)))
    .catch(() => dispatch({ type: SET_EMPTY_USER }));
};
