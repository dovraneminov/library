import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInfo } from '../../../redux/reducers/infoSlice';

export default function OneBook({ book }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openInfo() {
    dispatch(setInfo(book));
    navigate(`/books/info/${book.id}`);
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={book.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.Author.name}</p>
        <p className="card-text">{book.Genre.genre}</p>
        <p className="card-text">
          Цена:
          {' '}
          {book.price}
          /cутки
        </p>
        <button onClick={() => openInfo()} type="button" className="btn btn-primary">Узнать подробнее</button>
      </div>
    </div>
  );
}
