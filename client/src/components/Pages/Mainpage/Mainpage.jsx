import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Mainpage.css';
import MyButton from './UI/MyButton/MyButton';
import MyPopular from './UI/MyPopular/MyPopular';
import MyPublisher from './UI/MyPublishers/MyPublisher';
import MySlide from './UI/MySlide/MySlide';
import { getPersonsAction } from '../../../redux/popularSlice';
import { getPublisherAction } from '../../../redux/publisherSlice';
import { getBooksAction } from '../../../redux/bookSlice';
import OneBook from '../../UI/OneBook/OneBook';

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
      <div className="body content">
        <div className="text_content">
          <h1>Dovacin</h1>
          <h3> Nice book</h3>
          <NavLink to="/mybook">
            <MyButton />
          </NavLink>
        </div>
      </div>
      <div>
        <MySlide />
      </div>
      <div className="border_s"> </div>
      <NavLink to="/popular">
        <h3>
          популярные:
        </h3>
      </NavLink>
      {popular?.map((el) => (
        <div className="genres">
          <MyPopular key={el.id} el={el} />
        </div>
      ))}
      <div className="border_s"> </div>
      <NavLink to="/books">
        <h3>
          книги:
        </h3>
      </NavLink>
      {myBooks?.slice(0, 4).map((el) => (
        <div className="">
          <OneBook book={el} key={el.id} />
        </div>
      ))}
      <div className="border_s"> </div>
      <NavLink to="/author">
        <h3>
          издатели:
        </h3>
      </NavLink>
      {publisher?.slice(0, 4).map((el) => (
        <div className="genres">
          <MyPublisher el={el} key={el.id} />
        </div>
      ))}
    </>
  );
}
