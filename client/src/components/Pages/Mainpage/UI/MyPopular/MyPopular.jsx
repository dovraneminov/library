import React from 'react';
import { NavLink } from 'react-router-dom';
import './Popular.css';

export default function MyPopular({ el }) {
  return (
    <div className="card m-3 border border-0" style={{ width: '18rem', boxShadow: '1px 2px 2px grey' }}>
      <img src={el.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <p className="card-text fst-italic">Скоро будет в продаже</p>
      </div>
    </div>
  );
}
