import React from 'react';
import { useDispatch } from 'react-redux';
import { cabinetDelete } from '../../../redux/reducers/personalAreaSlice';

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
          <span className="fs-5">Книга: </span>
          {' '}
          {order?.Book?.title}
        </p>
        <p className="card-text">
          <span className="fs-5">Адрес: </span>
          <br />
          {order.adress}
        </p>
        <p className="card-text">
          <span className="fs-5">Дата получения: </span>
          <br />
          {order.date.toString().slice(0, -14)}
        </p>
        <p className="card-text">
          <span className="fs-5">Время получения: </span>
          <br />
          {order.time.toString().slice(0, -3)}
        </p>
        <p className="card-text">
          <span className="fs-5">Сумма заказа: </span>
          <br />
          {' '}
          {order.price}
          {' '}
          руб
        </p>
        <p className="card-text">
          Аренда на
          {' '}
          {order.days}
          {' '}
          дней
        </p>
      </div>
      <button onClick={() => deleter()} type="button" className="btn btn-danger m-2  text-center">Отмена</button>
    </div>
  );
}
