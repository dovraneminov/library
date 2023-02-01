import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonsAction } from '../../../redux/popularSlice';
import { getPublisherChunksAction } from '../../../redux/publisherSlice';
import OneAuthor from '../../UI/OneAuthor/OneAuthor';

export default function Author() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);
  useEffect(() => { dispatch(getPublisherChunksAction()); }, []);

  const publisher = useSelector((store) => store.publisher);
  return (
    <div>
      {' '}
      {publisher?.map((authors) => (
        authors.map((element) => (
          <div className="genres">
            <OneAuthor key={element.id} element={element} />
          </div>
        ))))}
    </div>
  );
}
