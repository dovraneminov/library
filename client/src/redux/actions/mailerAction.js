import axios from 'axios';
import { MAILER } from '../types';

const setMailer = () => (dispatch) => {
  axios('/mailer')
    .then(() => {
    //   navigate('/pay');
      dispatch({ type: MAILER });
    });
};

export default setMailer;
