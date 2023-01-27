import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <ul className="nav nav-tabs d-flex justify-content-around border-end border-secondary border-opacity-25" id="navStyle">
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/genre">Жанры</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/popular">Популярное</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/author">Авторы</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/mybook">Моя Книга</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/basket">Корзина</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/client">Личный кабинет</Link>
      </li>
    </ul>
  );
}
