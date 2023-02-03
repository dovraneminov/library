import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { personsAction } from '../../../redux/personsSlice';
import FirstPage from '../../UI/ComicsComponent/FirstPage/FirstPage';
import FourthPage from '../../UI/ComicsComponent/FourthPage/FourthPage';
import SecondPage from '../../UI/ComicsComponent/SecondPage/SecondPage';
import ThirdPage from '../../UI/ComicsComponent/ThirdPage/ThirdPage';
// Returns the SVG string for the character

export default function Comics() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(personsAction());
  }, []);

  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </>
  );
}
