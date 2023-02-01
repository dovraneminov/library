import React from 'react';

export default function MyPublisher({ publishers }) {
  return (
    <div className="card border border-0 mb-3" style={{ width: '18rem' }}>
      <img src={publishers.photo} className="card-img-top rounded" alt="..." style={{ boxShadow: '1px 0px 5px grey', height: '260px' }} />
      <div className="card-body p-0">
        <h5 className="card-title m-0 mt-1">{publishers.name}</h5>
      </div>
    </div>
  );
}
