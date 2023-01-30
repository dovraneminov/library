import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderAction } from '../../../redux/reducers/orderSlice';
import { totalPrice } from '../../../redux/reducers/priceSlice';

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
    navigate('/');
  };

  console.log(inputs);
  return (
    <>
      <div>{user?.name}, отличные книги! Введите свои данные для продолжения</div>
      <div>
        В вашем заказе:
        {' '}
        {order[0]?.title}
      </div>
      <div className="input-group mb-3">
        <input value={inputs.adress} name="adress" type="text" className="form-control" aria-label="Enter address here" aria-describedby="inputGroup-sizing-default" onChange={(e) => changeHandler(e)} />
      </div>
      <div className="input-group mb-3">
        <input value={inputs.date} name="date" type="date" className="form-control" aria-label="Enter date here" aria-describedby="inputGroup-sizing-default" onChange={(e) => changeHandler(e)} />
      </div>
      <div className="input-group mb-3">
        <input value={inputs.time} name="time" type="time" className="form-control" aria-label="Enter time here" aria-describedby="inputGroup-sizing-default" onChange={(e) => changeHandler(e)} />
      </div>
      <div>Выберите количество дней</div>
      <select value={inputs.days} name="days" onChange={(e) => changeHandler(e)} className="form-select" aria-label="Default select example">
        <option selected value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="14">14</option>
      </select>
      <div value={inputs.price} onChange={(e) => changeHandler(e)}>
        {money}
      </div>
      <button onClick={() => submit()} type="button" className="btn btn-outline-dark">Перейти к оплате</button>
    </>
  );
}
