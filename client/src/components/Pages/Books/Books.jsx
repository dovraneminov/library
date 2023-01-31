import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksesAction } from '../../../redux/reducers/booksesSlice';
import OneBook from '../../UI/OneBook/OneBook';

export default function Books() {
  const dispatch = useDispatch();
  const bookses = useSelector((store) => store.bookses);

  useEffect(() => {
    dispatch(booksesAction());
  }, []);

  return (
    <div className="row d-flex justify-content-evenly" style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}>
      {bookses?.map((book) => (<OneBook book={book} key={book.id} />))}
    </div>
  );
}
