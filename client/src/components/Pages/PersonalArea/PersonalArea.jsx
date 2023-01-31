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
    <div className="" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASDgsM0jPuHIQFJ8hjbo8N9TrYqKQ1SGpeQ&usqp=CAU)', backgroundSize: '100%' }}>
      <h2 className="mt-3 text-center text-white fw-bold">
        {user?.name}
        {' '}
        , Привет!
      </h2>
      <p className="text-center fst-italic fw-semibold " style={{ paddingLeft: '20px' }}>Это ваш личный кабинет</p>

      <h4 className="mb-4 text-white fw-bold">Ваши заказы:</h4>
      <div className=" container row d-flex">
        {cabinet?.map((order) => <OneOrder order={order} key={order.id} />)}
      </div>
    </div>
  );
}
