import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonsAction } from '../../../redux/popularSlice';
import MyPopular from '../Mainpage/UI/MyPopular/MyPopular';

export default function Popular() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);

  const popular = useSelector((store) => store.persons);
  return (
    <div>
      {' '}
      {popular?.map((el) => (
        <div className="d-flex justify-content-evenly">
          <MyPopular key={el.id} el={el} />
        </div>
      ))}
    </div>
  );
}
