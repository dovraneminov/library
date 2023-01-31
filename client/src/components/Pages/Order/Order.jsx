import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderAction } from '../../../redux/reducers/orderSlice';
// import { totalPrice } from '../../../redux/reducers/priceSlice';
import Footer from '../../UI/Footer/Footer';

export default function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((store) => store.order);
  const prices = useSelector((store) => store.price);
  const user = useSelector((store) => store.user);

  const [inputs, setInputs] = useState({
    bookId: order[0]?.id, adress: '', date: '', time: '', price: '', days: '',
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // const obj = { ...inputs, price };
  // dispatch(setOrder(obj));
  const money = ((prices * 2 + Number(inputs.days * 40)) / 2);

  useEffect(() => {
    setInputs((prev) => ({ ...prev, price: money }));
  }, [money]);

  const submit = () => {
    dispatch(orderAction(inputs));
    navigate('/paiment');
  };

  console.log(inputs);
  return (
    <>
      <div className="mt-9 d-flex align-items-center" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/002/381/365/original/yellow-wave-background-free-vector.jpg)', backgroundSize: '100%', minHeight: '1000px' }}>
        <form
          className="d-flex justify-content flex-column mx-auto mt-10 border border-warning mt-4 pb-4 rounded align-items-center"
          style={{
            width: '600px', marginTop: '140px', backgroundColor: 'white', boxShadow: '1px 1px 5px orange',
          }}
        >
          <h3 className="text-center pt-3">
            {user?.name}
            , Отличная книга!

          </h3>
          <h4 className="text-center">
            {' '}
            В вашем заказе:
            {' '}
            {order[0]?.title}

          </h4>
          <div className="mx-auto mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label" style={{ width: '300px' }}>
              Ваш Адресс
              <input
                name="adress"
                type="address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="Enter address here"
                onChange={(e) => changeHandler(e)}
                value={inputs.adress}
              />
            </label>
          </div>
          <div className="mx-auto mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ width: '300px' }}>
              Дата доставки
              <input
                name="date"
                type="date"
                aria-label="Enter date here"
                className="form-control"
                id="exampleInputPassword1"
                value={inputs.date}
                onChange={(e) => changeHandler(e)}
              />
            </label>
          </div>
          <div className="mx-auto mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ width: '300px' }}>
              Укажите время
              <input
                name="time"
                type="time"
                aria-label="Enter date here"
                className="form-control"
                id="exampleInputPassword1"
                value={inputs.time}
                onChange={(e) => changeHandler(e)}
              />
            </label>
          </div>
          <h4 className="text-center">Выберите количество дней</h4>
          <select value={inputs.days} name="days" onChange={(e) => changeHandler(e)} className="form-select mx-auto" aria-label="Default select example" style={{ width: '300px' }}>
            <option selected value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="14">14</option>
          </select>

          <div className="text-center" value={inputs.price} onChange={(e) => changeHandler(e)}>
            К оплате:
            {' '}
            <span className="fs-4   mt-2 mb-2" style={{ backgroundColor: 'yellow' }}>{money}</span>
            {' '}
            руб
          </div>
          <button onClick={() => submit()} type="button" className="btn btn-outline-dark mx-auto" style={{ width: '300px' }}>Оплата</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
