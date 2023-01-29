import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Order() {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);

  return (
    <>
      <div>Дарова, абобус (username тут)</div>
      <div className="input-group mb-3">
        <input name="adress" type="text" className="form-control" aria-label="Enter address here" aria-describedby="inputGroup-sizing-default" />
      </div>
      <div className="input-group mb-3">
        <input name="date" type="date" className="form-control" aria-label="Enter date here" aria-describedby="inputGroup-sizing-default" />
      </div>
      <div className="input-group mb-3">
        <input name="time" type="time" className="form-control" aria-label="Enter time here" aria-describedby="inputGroup-sizing-default" />
      </div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Выберите количество дней</option>
        <option value="1">1</option>
        <option value="2">3</option>
        <option value="3">5</option>
        <option value="4">7</option>
      </select>
      <div>Ваша сумма</div>
      <button type="button" className="btn btn-outline-dark">Перейти к оплате</button>
    </>
  );
}
