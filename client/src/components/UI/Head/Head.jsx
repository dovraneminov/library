import React from 'react';
import { Link } from 'react-router-dom';
import './head.css';

export default function Head() {
  return (
    <nav className="navbar bg-light border border-secondary mb-1 border-opacity-25" id="font-link" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg)', backgroundSize: '100%' }}>
      <div className="container-fluid">
        <Link to="/main" className="navbar-brand">Library</Link>
        <form className="d-flex" role="search">
          <input className="form-control me-2 border border-2  border-dark" type="search" placeholder="Книга, автор, жанр, популярное" aria-label="Search" style={{ width: '600px' }} />
          <button className="btn btn-outline-success border border-2  border-dark text-dark" type="submit">Search</button>
        </form>
        <button className="btn btn-outline-success text-dark border border-0" type="button">
          Войти
        </button>
      </div>
    </nav>
  );
}
