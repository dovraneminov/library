import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksesAction } from '../../../redux/reducers/booksesSlice'
import OneBook from '../../UI/OneBook/OneBook';

export default function Books() {
  const dispatch = useDispatch();
  const bookses = useSelector((store) => store.bookses);

  useEffect(() => {
    dispatch(booksesAction());
  }, []);
  console.log(bookses);
  return (
    <div>
      {bookses?.map((book) => (<OneBook book={book} key={book.id} />))}
    </div>
  );
}
