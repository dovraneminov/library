import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Mainpage.css';
import { MdArrowForwardIos } from 'react-icons/md';
import MyPopular from './UI/MyPopular/MyPopular';
import MyPublisher from './UI/MyPublishers/MyPublisher';
import MySlide from './UI/MySlide/MySlide';
import { getPersonsAction } from '../../../redux/popularSlice';
import { getPublisherAction } from '../../../redux/publisherSlice';
import { getBooksAction } from '../../../redux/bookSlice';
// import OneBook from '../../UI/OneBook/OneBook';
import Footer from '../../UI/Footer/Footer';
import BooksMain from '../../UI/BooksMain/BooksMain';
import HeaderMyBook from '../../UI/HeaderMyBook/HeaderMyBook';
// import Footer from '../../UI/Footer/footer';

export default function Mainpage() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);
  useEffect(() => { dispatch(getPublisherAction()); }, []);
  useEffect(() => { dispatch(getBooksAction()); }, []);
  const popular = useSelector((store) => store.persons);
  const publisher = useSelector((store) => store.publisher);
  const myBooks = useSelector((store) => store.myBooks);

  return (
    <>
      <HeaderMyBook />
      <MySlide />

      <Link to="/popular" className="forLink">

        Популярное
        <MdArrowForwardIos />
      </Link>

      <div className="row mt-3 d-flex justify-content-around ">
        {popular?.map((el) => (
          <MyPopular key={el.id} el={el} />
        ))}
      </div>

      <Link to="/books" className="forLink">
        Книги
        <MdArrowForwardIos />
      </Link>
      <div className="row mt-3 d-flex justify-content-around">
        {myBooks?.slice(0, 4).map((el) => (
          <BooksMain book={el} key={el.id} />
        ))}
      </div>

      <NavLink className="forLink">

        Авторы
        <MdArrowForwardIos />
      </NavLink>
      <div className="row mt-3 d-flex justify-content-around">
        {publisher?.slice(0, 4).map((el) => (
          <MyPublisher key={el.id} el={el} />
        ))}
      </div>

      <Footer />

    </>
  );
}
