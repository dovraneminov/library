import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Mainpage.css';
import { MdArrowForwardIos } from 'react-icons/md';
// import MyPopular from './UI/MyPopular/MyPopular';
import { Carousel } from 'react-bootstrap';
import MyPublisher from './UI/MyPublishers/MyPublisher';
import MySlide from './UI/MySlide/MySlide';
import { getPersonsAction } from '../../../redux/popularSlice';
import { getPublisherChunksAction, getPublisherAction } from '../../../redux/publisherSlice';
import Footer from '../../UI/Footer/Footer';
import BooksMain from '../../UI/BooksMain/BooksMain';
import HeaderMyBook from '../../UI/HeaderMyBook/HeaderMyBook';
import NewPopularCard from '../../UI/NewPopularCard/NewPopularCard';
import { getBooksChunksAction, getBooksAction } from '../../../redux/bookSlice';
import OneBook from '../../UI/OneBook/OneBook';
import MyList from '../MyList';

export default function Mainpage() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);
  useEffect(() => { dispatch(getPublisherChunksAction()); }, []);
  useEffect(() => { dispatch(getBooksChunksAction()); }, []);
  const popular = useSelector((store) => store.persons);
  const publisher = useSelector((store) => store.publisher);
  const books = useSelector((store) => store.myBooks);
  console.log(publisher);
  return (
    <>
      <MyList />
      <HeaderMyBook />
      <MySlide />

      <Link to="/popular" className="forLink">

        Популярное
        <MdArrowForwardIos />
      </Link>

      <div className="row mt-3 d-flex justify-content-around ">
        {popular?.map((el) => (
          <NewPopularCard key={el.id} el={el} />
        ))}
      </div>

      <Link to="/books" className="forLink">
        Книги
        <MdArrowForwardIos />
      </Link>
      <Carousel>
        {books?.map((el) => (
          <Carousel.Item>
            <div className="row mt-3 d-flex justify-content-around">
              {el?.map((bookses) => (
                <BooksMain book={bookses} key={bookses.id} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <NavLink className="forLink">
        Авторы
        <MdArrowForwardIos />
      </NavLink>
      <Carousel>
        {publisher?.map((el) => (
          <Carousel.Item>
            <div className="row mt-3 d-flex justify-content-around">
              {el?.map((publishers) => (
                <MyPublisher publishers={publishers} key={publishers.id} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Footer />

    </>
  );
}
