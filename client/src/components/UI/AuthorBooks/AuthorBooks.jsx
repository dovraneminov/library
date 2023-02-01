import React from 'react';

export default function AuthorBooks({ element }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={element.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
      </div>
    </div>
  );
}
