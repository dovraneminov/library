import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthor } from '../../../redux/reducers/authorSlice';
import { setInfo } from '../../../redux/reducers/infoSlice';
import { addOrder } from '../../../redux/reducers/orderSlice';
import { plusOrder } from '../../../redux/reducers/priceSlice';
import Footer from '../Footer/Footer';
import InfoCardHeader from '../InfoCardHeader/InfoCardHeader';
import InfoCardText from '../InfoCardText/InfoCardText';

export default function InfoCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useSelector((store) => store.info);

  useEffect(() => {
    dispatch(setInfo());
  }, []);

  function openAuthor() {
    dispatch(setAuthor(info));
    navigate(`/books/author/${info?.id}`);
  }

  function openOrder() {
    dispatch(plusOrder(info.price));
    dispatch(addOrder(info));
    navigate('/order');
  }
  console.log('8888forcheck8888', info);

  return (
    <>
      <div className="d-flex justify-content-evenly" style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}>
        <div className="card mb-3  border border-0" style={{ maxWidth: '900px', marginTop: '20px', boxShadow: '1px 0px 5px grey' }}>
          <div className="row g-0 ">
            <div className="col-7  m-2" style={{ marginRight: '90px' }}>
              <img src={info?.photo} className="img-fluid rounded-start" alt="..." style={{ width: '450px' }} />
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
                <h5 className="card-title text-center fs-2 pb-4">{info?.title}</h5>
                <p className="card-text fs-6">
                  <span className="fw-bold fs-5"> Жанр: </span>
                  {info?.Genre?.genre}
                </p>
                <p className="card-text">
                  <span className="fw-bold fs-5"> Рейтинг: </span>
                  {' '}
                  {info?.rating}
                  / 10

                </p>
                <p className="card-text fs-6">
                  <span className="fw-bold fs-5">Aвтор: </span>
                  {info?.Author?.name}
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
                <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-warning">В избранное</button>
                <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-warning">Вернуться назад</button>
                <button onClick={() => openAuthor()} type="button" className="btn btn-outline-warning">Подробнее об авторе</button>
                <button onClick={() => openOrder()} type="button" className="btn btn-outline-warning">Подробнее об авторе</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoCardHeader />
      <InfoCardText />
      <Footer />
    </>
  );
}
