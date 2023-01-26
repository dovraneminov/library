import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className="nav nav-tabs d-flex justify-content-around border-end border-secondary border-opacity-25">
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
        <Link className="nav-link text-dark" to="/basket">Корзина</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/client">Личный кабинет</Link>
      </li>
    </ul>
  );
}
