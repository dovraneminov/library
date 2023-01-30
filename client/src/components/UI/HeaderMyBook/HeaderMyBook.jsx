import React from 'react';
import './headerMyBook.css';
import { FaArrowCircleDown } from 'react-icons/fa';

export default function HeaderMyBook() {
  return (
    <section className="promo">
      <div className="container">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/852/937/small/book-read-library-study-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="logo" className="logoImg" />
          <div className="logoText">Library</div>
        </div>

        <h1 className="title">My Book</h1>
        <div className="simple">
          <h2 className="titleBig">это просто!</h2>
          <div className="line" />
        </div>
        <h2 className="title">Персональные книги с увлекательными историями</h2>

        <div className="promoText">
          Ежедневно в России появляется более  100 новых сайтов.
          <br />
          И только единицы из
          них становятся популярными
          и приносят ощутимое удовольствие от личной книги. В чем секрет? Просто попробуйте
          {' '}
          <span>СОЗДАТЬ</span>
          {' '}
          свою книгу!
        </div>

        <button type="button" className="promoBtn">Моя личная Книга</button>

        <div className="more">
          <div className="moreText">узнать больше об личной книге</div>
          <FaArrowCircleDown className="moreImg" style={{ height: '40px', width: '50px', color: 'white' }} />
        </div>
      </div>
    </section>
  );
}
