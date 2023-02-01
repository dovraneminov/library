import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonsAction } from '../../../redux/popularSlice';
import { getPublisherChunksAction } from '../../../redux/publisherSlice';
import OneAuthor from '../../UI/OneAuthor/OneAuthor';
import './author.css';

export default function Author() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);
  useEffect(() => { dispatch(getPublisherChunksAction()); }, []);

  const publisher = useSelector((store) => store.publisher);
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: 'rgb(238 236 245)',
    }}
    >
      {' '}
      {publisher?.map((authors) => (
        authors.map((element) => (
          <div
            className="row m-4 forAuthor"
          >
            <OneAuthor key={element.id} element={element} />
          </div>
        ))))}
    </div>
  );
}
