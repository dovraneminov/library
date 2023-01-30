import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cabinetAction } from '../../../redux/reducers/personalAreaSlice';
import OneOrder from '../../UI/OneOrder/OneOrder';

export default function PersonalArea() {
  const dispatch = useDispatch();
  const cabinet = useSelector((store) => store.cabinet);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(cabinetAction());
  }, []);

  console.log(cabinet);
  return (
    <>
      <div>
        {user?.name}
        {' '}
        ,это ваш личный кабинет
      </div>

      <div>
        <div>Ваши заказы:</div>
        {cabinet?.map((order) => <OneOrder order={order} key={order.id} />)}
      </div>
    </>
  );
}
