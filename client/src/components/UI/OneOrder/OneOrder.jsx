import React from 'react';
import { useDispatch } from 'react-redux';
import { cabinetDelete } from '../../../redux/reducers/personalAreaSlice';

export default function OneOrder({ order }) {
  const dispatch = useDispatch();

  const deleter = () => {
    dispatch(cabinetDelete(order.id));
  };


  

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          Заказ №
          {' '}
          {order.id}
        </h5>
        <p className="card-text">
          {' '}
          Книга:
          {' '}
          {order?.Book?.title}
        </p>
        <p className="card-text">
          Адрес:
          {order.adress}
        </p>
        <p className="card-text">
          Дата получения:
          {order.date.toString().slice(0, -14)}
        </p>
        <p className="card-text">
          Время получения:
          {order.time}
        </p>
        <p className="card-text">
          Сумма заказа:
          {' '}
          {order.price}
        </p>
        <p className="card-text">
          Аренда на
          {' '}
          {order.days}
          {' '}
          дней
        </p>
        <button onClick={() => deleter()} type="button" className="card-link">Delete order</button>
      </div>
    </div>
  );
}
