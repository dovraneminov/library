import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthor } from '../../../redux/reducers/authorSlice';
import { favoriteDeleteAction } from '../../../redux/reducers/favoriteSlice';
// import InfoCardHeader from '../InfoCardHeader/InfoCardHeader';
// import InfoCardText from '../InfoCardText/InfoCardText';

export default function OneFavorite({ fav }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleter() {
    dispatch(favoriteDeleteAction(fav.id));
  }

  return (
    <div className="card m-3  border border-0 mx-auto" style={{ maxWidth: '500px', marginTop: '20px', boxShadow: '1px 0px 5px grey' }}>
      <div className="row g-0 ">
        <div className="col-4  m-2" style={{ marginRight: '90px' }}>
          <img src={fav?.Book?.photo} className="img-fluid rounded-start" alt="..." style={{ width: '450px' }} />
        </div>
        <div
          className="col-4"
          style={{
            marginLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '15px',
          }}
        >
          <div className="card-body">
            <h5 className="card-title text-center fs-2 pb-4">{fav?.title}</h5>
            <p className="card-text fs-6">
              <span className="fw-bold fs-5"> Жанр: </span>
              {fav?.Book?.Genre?.genre}
            </p>
            <p className="card-text">
              <span className="fw-bold fs-5"> Рейтинг: </span>
              {' '}
              {fav?.Book?.rating}
              / 10

            </p>
            <p className="card-text fs-6">
              <span className="fw-bold fs-5">Aвтор: </span>
              {fav?.Book?.Author?.name}
            </p>
          </div>
          <div
            className="buttons"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              rowGap: '20px',
            }}
          >
            <button onClick={() => deleter()} type="button" className="btn btn-outline-warning">Убрать</button>
          </div>
        </div>
      </div>
    </div>
  );
}
