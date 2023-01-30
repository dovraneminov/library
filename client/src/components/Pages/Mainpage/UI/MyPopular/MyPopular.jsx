import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MyPopular({ el }) {
  console.log('ELpachoElpachoEl', el);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <NavLink><img src="..." className="card-img-top" alt="..." /></NavLink>
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <p className="card-text">Some prepod</p>
      </div>
    </div>
  );
}
