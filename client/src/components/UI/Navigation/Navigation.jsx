import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user?.id
        ? (
          <ul className="nav nav-tabs d-flex justify-content-around border-end border-secondary border-opacity-25" id="navStyle">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/books">Книги</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/popular">Популярное</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/publisher">Авторы</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/mybook">Моя Книга</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/basket">Корзина</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/cabinet">Личный кабинет</Link>
            </li>
          </ul>
        )
        : (
          <ul className="nav nav-tabs d-flex justify-content-around border-end border-secondary border-opacity-25" id="navStyle">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/books">Книги</Link>
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
          </ul>
        )}
    </div>
  );
}
