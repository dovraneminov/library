import { LOGOUT, SET_EMPTY_USER, SET_USER } from '../types';

export default function userReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;
    case SET_EMPTY_USER:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
