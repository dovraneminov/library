import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { personsAction } from '../../../redux/personsSlice';
import FirstPage from '../../UI/ComicsComponent/FirstPage/FirstPage';
import FourthPage from '../../UI/ComicsComponent/FourthPage/FourthPage';
import SecondPage from '../../UI/ComicsComponent/SecondPage/SecondPage';
import ThirdPage from '../../UI/ComicsComponent/ThirdPage/ThirdPage';
// Returns the SVG string for the character

export default function Comics() {
  const persons = useSelector((store) => store.persons);
  const dispatch = useDispatch();
  console.log(persons, '=====checkap====');
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
