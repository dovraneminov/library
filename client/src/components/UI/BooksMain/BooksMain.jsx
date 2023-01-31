import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInfo } from '../../../redux/reducers/infoSlice';

export default function BooksMain({ book }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openInfo() {
    dispatch(setInfo(book));
    console.log(book);
    navigate(`/books/info/${book?.id}`);
  }
  return (

    <div className="card border border-0 mb-3" style={{ width: '18rem' }}>
      <img onClick={() => openInfo()} src={book.photo} className="card-img-top rounded" alt="..." style={{ boxShadow: '1px 0px 5px grey' }} />
      <div className="card-body p-0">
        <h5 className="card-title m-0">{book.title}</h5>
        <p className="card-text m-0" style={{ fontSize: '14px' }}>{book?.Author?.name}</p>
      </div>
    </div>
  );
}
