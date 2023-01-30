import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setInfo } from '../../../redux/reducers/infoSlice';
import { addOrder } from '../../../redux/reducers/orderSlice';
import { plusOrder } from '../../../redux/reducers/priceSlice';

export default function OneBook({ book }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openInfo() {
    dispatch(setInfo(book));
    console.log(book);
    navigate(`/books/info/${book?.id}`);
  }

  function openOrder() {
    dispatch(plusOrder(book.price));
    dispatch(addOrder(book));
    navigate('/order');
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img onClick={openInfo} src={book.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.Author.name}</p>
        <p className="card-text">{book.Genre.genre}</p>
        <p className="card-text">
          Цена:
          {' '}
          {book.price}
          р./cутки
        </p>
        <button onClick={() => openInfo()} type="button" className="btn btn-primary">Узнать подробнее</button>
        <button onClick={() => openOrder()} type="button" className="btn btn-primary">Взять в аренду</button>
      </div>
    </div>
  );
}
