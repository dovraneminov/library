import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AuthorCard() {
  const navigate = useNavigate();
  const author = useSelector((store) => store.author);
  console.log(author);
  if (!author) return null;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={author.Author.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{author.Author.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Рейтинг:
          {' '}
          {author.Author.rating}
          /10
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {author.Author.description}
        </h6>
        <button onClick={() => navigate(-2)} type="button" className="card-link">Вернуться назад</button>
      </div>
    </div>
  );
}
