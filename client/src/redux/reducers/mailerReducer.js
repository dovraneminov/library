import { MAILER } from '../types';

export default function mailerReducer(state = null, action) {
  const { type } = action;
  switch (type) {
    case MAILER:
      return {};
    default:
      return state;
  }
}
