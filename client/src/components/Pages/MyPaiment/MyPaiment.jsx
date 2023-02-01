import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AnimatedPage from '../../UI/AnimatedPage/AnimatedPage';
import setMailer from '../../../redux/actions/mailerAction';

export default function MyPaiment() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const clickHandler = () => {
    dispatch(setMailer(user));
    navigate('/pay');
  };

  return (
    <AnimatedPage>
      <div className="pocket-form">
        <div className="pocket-form__box">
          <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus} />
          <form
            className="pocket-form__form"
          >
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              className="pocket-form__input"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              className="pocket-form__input"
              required
            />
            <input
              type="tel"
              name="expiry"
              placeholder=" MMYY expire"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              className="pocket-form__input"
              required
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              className="pocket-form__input"
              required
            />
            {/* <Form
              className="pocket-form__btn"
              type="submit"
              onSubmit={() => {
                navigate('/pay');
              }}
            >
              Update

            </Form> */}
            <button
              onClick={clickHandler}
              className="pocket-form__btn"
              type="button"
            >
              Update

            </button>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
}
