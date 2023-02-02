import React from 'react';

export default function AuthorBooks({ element }) {
  return (
    <div className="d-flex " style={{ width: '330px' }}>
      <div className="card border border-0 rounded-0" style={{ width: '18rem', backgroundColor: 'rgb(238 236 245)' }}>
        <img src={element.photo} className="card-img-top rounded-0" alt="..." />
        <div className="card-body mb-5 rounded-0" style={{ height: '274px', backgroundColor: 'rgb(238 236 245)' }}>
          <h5 className="card-title text-center">{element.title}</h5>
        </div>
      </div>
    </div>
  );
}
