import React from 'react';

export default function AuthorBooks({ element }) {
  return (
    <div className="d-flex">
      <div className="card border border-0 rounded-0" style={{ width: '18rem' }}>
        <img src={element.photo} className="card-img-top rounded-0" alt="..." />
        <div className="card-body mb-5 rounded-0" style={{ height: '274px' }}>
          <h5 className="card-title">{element.title}</h5>
        </div>
      </div>
    </div>
  );
}
