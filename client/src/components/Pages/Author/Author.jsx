import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonsAction } from '../../../redux/popularSlice';
import MyPublisher from '../Mainpage/UI/MyPublishers/MyPublisher';

export default function Author() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);

  const publisher = useSelector((store) => store.publisher);
  return (
    <div>
      {' '}
      {publisher?.map((el) => (
        <div className="genres">
          <MyPublisher key={el.id} el={el} />
        </div>
      ))}
    </div>
  );
}
