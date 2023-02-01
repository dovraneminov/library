import React from 'react';
import { useDispatch } from 'react-redux';
import { cabinetDelete } from '../../../redux/reducers/personalAreaSlice';
import './oneOrder.css';

export default function OneOrder({ order }) {
  const dispatch = useDispatch();

  const deleter = () => {
    dispatch(cabinetDelete(order.id));
  };

  return (
    <div className="card m-2 border border-0" style={{ width: '18rem', boxShadow: '1px 1px 5px grey' }}>
      <div className="card-body">
        <h5 className="card-title text-center">
          Заказ №
          {' '}
          {order.id}
        </h5>
        <p className="card-text">
          {' '}
          <span className="fs-5 forOrder">Книга: </span>
          {' '}
          <br />
          <span className="forDesc">{order?.Book?.title}</span>
        </p>
        <p className="card-text">
          <span className="fs-5 forOrder">Адрес: </span>
          <br />
          <span className="forDesc">{order.adress}</span>
        </p>
        <p className="card-text forOrder">
          <span className="fs-5">Дата получения: </span>
          <br />
          <span className="forDesc">{order.date.toString().slice(0, -14)}</span>
        </p>
        <p className="card-text forOrder">
          <span className="fs-5">Время получения: </span>
          <br />
          <span className="forDesc">{order.time}</span>
        </p>
        <p className="card-text forOrder">
          <span className="fs-5">Сумма заказа: </span>
          <br />
          {' '}
          <span className="forDesc">{order.price}</span>
          {' '}
          руб
        </p>

      </div>
      <button onClick={() => deleter()} type="button" className="btn btn-danger m-2  text-center">Отмена</button>
    </div>
  );
}
