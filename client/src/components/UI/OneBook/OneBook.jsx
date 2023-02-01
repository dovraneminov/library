import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInfo } from '../../../redux/reducers/infoSlice';
import { addOrder } from '../../../redux/reducers/orderSlice';
import { plusOrder } from '../../../redux/reducers/priceSlice';

export default function OneBook({ book }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openInfo() {
    dispatch(setInfo(book));
    navigate(`/books/info/${book?.id}`);
  }

  function openOrder() {
    dispatch(plusOrder(book.price));
    dispatch(addOrder(book));
    navigate('/order');
  }

  return (
    <div className="card m-2 p-0 border border-0" style={{ width: '18rem', boxShadow: '1px 0px 5px grey' }}>
      <img onClick={() => openInfo()} src={book.photo} className="card-img-top" alt="..." />
      <div className="card-body p-1">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text mb-0">
          <span className="fw-bold">Aвтор:</span>
          {' '}
          {book?.Author?.name}
        </p>
        <p className="card-text">
          {' '}
          <span className="fw-bold">Жанр:</span>
          {' '}
          {book?.Genre?.genre}
        </p>
        <div className=" d-flex justify-content-evenly">
          <p className="card-text p-1 mb-1" style={{ fontSize: '15px', paddingRight: '8px' }}>
            <span className="fw-bold">Цена:</span>
            {' '}
            <span className="fw-bold">
              {book.price}
              {' '}
            </span>
            р./cутки
          </p>
          <button onClick={() => openOrder()} type="button" className="btn btn-outline-warning" style={{ fontSize: '13px' }}>Взять в аренду</button>
        </div>
      </div>
    </div>
  );
}
