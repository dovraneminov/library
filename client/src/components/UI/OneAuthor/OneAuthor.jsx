import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authorInfoAction } from '../../../redux/reducers/authorInfoSlice';

export default function OneAuthor({ element }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function openInfo() {
    dispatch(authorInfoAction(element.id));
    navigate(`/publisher/${element?.id}`);
  }
  return (
    <div className="card border border-0 mb-3" style={{ width: '18rem', backgroundColor: 'rgb(238 236 245)' }}>
      <img onClick={() => openInfo()} src={element.photo} className="card-img-top rounded" alt="..." style={{ boxShadow: '1px 0px 5px grey', height: '260px' }} />
      <div className="card-body p-0">
        <h5 className="card-title m-0 mt-1 text-center">{element.name}</h5>
      </div>
    </div>
  );
}
