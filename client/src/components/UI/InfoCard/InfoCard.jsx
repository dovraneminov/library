import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthor } from '../../../redux/reducers/authorSlice';

export default function InfoCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useSelector((store) => store.info);

  function openAuthor() {
    dispatch(setAuthor(info));
    navigate(`/books/author/${info?.id}`);
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={info?.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info?.title}</h5>
        <h5>
          Жанр:
          {' '}
          {info?.Genre?.genre}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Рейтинг:
          {' '}
          {info?.rating}
          /10
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {info?.description}
        </h6>
        <h3>
          Автор:
          {' '}
          {info?.Author?.name}
        </h3>
        <button onClick={() => navigate(-1)} type="button" className="card-link">Вернуться назад</button>
        <button onClick={() => openAuthor()} type="button" className="card-link">Подробнее об авторе</button>

      </div>
    </div>
  );
}
