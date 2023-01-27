import React from 'react';
import { NavLink } from 'react-router-dom';
import './Mainpage.css';
import MyButton from './UI/MyButton/MyButton';
import MyGenres from './UI/MyGenres/MyGenres';
import MyPopular from './UI/MyPopular/MyPopular';
import MyPublisher from './UI/MyPublishers/MyPublisher';
import MySlide from './UI/MySlide/MySlide';

export default function Mainpage() {
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
          жанры:
        </h3>
      </NavLink>
      <div className="genres">
        <MyGenres />
      </div>
      <div className="border_s"> </div>
      <NavLink>
        <h3>
          популярные:
        </h3>
      </NavLink>
      <div className="genres">
        <MyPopular />
      </div>
      <div className="border_s"> </div>
      <NavLink>
        <h3>
          издатели:
        </h3>
      </NavLink>
      <div className="genres">
        <MyPublisher />
      </div>
    </>
  );
}
