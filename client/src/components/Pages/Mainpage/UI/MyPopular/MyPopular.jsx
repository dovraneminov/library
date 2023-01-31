import React from 'react';
import { NavLink } from 'react-router-dom';
import './Popular.css';

export default function MyPopular({ el }) {
  console.log('ELpachoElpachoEl', el);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <NavLink><img src={el.photo} className="card-img-top" alt="adam" /></NavLink>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{el.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
