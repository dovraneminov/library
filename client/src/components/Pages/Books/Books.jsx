import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksAction } from '../../../redux/reducers/booksReducer';
import OneBook from '../../UI/OneBook/OneBook';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(booksAction());
  }, []);
  console.log(books);
  return (
    <div>
      {books?.map((book) => (<OneBook book={book} key={book.id} />))}
    </div>
  );
}
