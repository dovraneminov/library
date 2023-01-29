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

export default function Mainpage() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPersonsAction()); }, []);
  useEffect(() => { dispatch(getPublisherAction()); }, []);
  useEffect(() => { dispatch(getBooksAction()); }, []);
  const popular = useSelector((store) => store.persons);
  const publisher = useSelector((store) => store.publisher);
  const books = useSelector((store) => store.books);
  return (
    <>
      <div className="body content">
        <div className="text_content">
          <h1>Dovacin</h1>
          <h3> Nice book</h3>
          <MyButton />
        </div>
      </div>
      <div>
        <MySlide />
      </div>
      <div className="border_s"> </div>
      <NavLink>
        <h3>
          популярные:
        </h3>
      </NavLink>
      {popular?.map((el) => (
        <div key={el.id} className="genres">
          <MyPopular />
        </div>
      ))}
      <div className="border_s"> </div>
      <NavLink>
        <h3>
          книги:
        </h3>
      </NavLink>
      {books?.slice(0, 4).map((el) => (
        <div key={el.id} className="">
          <MyPopular />
        </div>
      ))}
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
    </>
  );
}
