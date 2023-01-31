import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authorInfoAction } from '../../../../../redux/reducers/authorInfoSlice';

export default function MyPublisher({ el }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function openInfo() {
    dispatch(authorInfoAction(el.id));
    navigate(`/publisher/${el?.id}`);
  }

  return (
    <div className="card border border-0 mb-3" style={{ width: '18rem' }}>
      <img onClick={() => openInfo()} src={el.photo} className="card-img-top rounded" alt="..." style={{ boxShadow: '1px 0px 5px grey', height: '260px' }} />
      <div className="card-body p-0">
        <h5 className="card-title m-0 mt-1">{el.name}</h5>
      </div>
    </div>
  );
}
