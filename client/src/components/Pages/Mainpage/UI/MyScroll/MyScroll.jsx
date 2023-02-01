import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getPublisherChunks } from '../../../../../redux/publisherSlice';
import BooksMain from '../../../../UI/BooksMain/BooksMain';

export default function MyScroll() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPublisherChunks()); }, []);
  const publisher = useSelector((store) => store.publisher);
  return (
    <Carousel>
      {publisher?.map((el) => (
        <Carousel.Item>
          <div className="row mt-3 d-flex justify-content-around">
            {el.map((book) => (
              <BooksMain book={book} key={book.id} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
