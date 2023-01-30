import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Mainpage.css';
import { MdArrowForwardIos } from 'react-icons/md';
import MyButton from './UI/MyButton/MyButton';
import MyPopular from './UI/MyPopular/MyPopular';
import MyPublisher from './UI/MyPublishers/MyPublisher';
import MySlide from './UI/MySlide/MySlide';
import { getPersonsAction } from '../../../redux/popularSlice';
import { getPublisherAction } from '../../../redux/publisherSlice';
import { getBooksAction } from '../../../redux/bookSlice';
// import MyCard from './UI/MyCard/MyCard';
import OneBook from '../../UI/OneBook/OneBook';
// import Footer from '../../UI/Footer/footer';

export default function Mainpage() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);
  useEffect(() => { dispatch(getPublisherAction()); }, []);
  useEffect(() => { dispatch(getBooksAction()); }, []);
  const popular = useSelector((store) => store.persons);
  const publisher = useSelector((store) => store.publisher);
  const myBooks = useSelector((store) => store.myBooks);
  console.log(myBooks);
  return (
    <>
      <MySlide />

      <Link to="/popular" className="forLink">

        Популярное
        <MdArrowForwardIos />
      </Link>

      <section className="waiting">
        <div className="container">

          <div className="waiting_wrapper">

            {popular?.map((el) => (
              <div className="genres">
                <MyPopular key={el.id} el={el} />
              </div>
            ))}

          </div>
        </div>
      </section>

      <Link to="/books" className="forLink">

        Книги
        <MdArrowForwardIos />
      </Link>
      <div className="row mt-3 d-flex justify-content-around">
        {myBooks?.slice(0, 4).map((el) => (
          <OneBook book={el} key={el.id} />
        ))}
      </div>
      <div className="border_s"> </div>
      <NavLink>
        <h3>
          издатели:
        </h3>
      </NavLink>
      {publisher?.slice(0, 4).map((el) => (
        <div key={el.id} className="genres">
          <MyPublisher />
        </div>

      ))}
      <div className="body content">
        <div className="text_content">
          <h1>Dovacin</h1>
          <h3> Nice book</h3>
          <NavLink to="/mybook">
            <MyButton />
          </NavLink>
        </div>
      </div>
      <div />

      {/* <Footer /> */}
    </>
  );
}
