import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authorInfoAction } from '../../../redux/reducers/authorInfoSlice';
import AuthorBooks from '../AuthorBooks/AuthorBooks';

export default function AuthorInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const authorInfo = useSelector((store) => store.authorInfo);

  console.log('info', authorInfo[0]);

  useEffect(() => {
    dispatch(authorInfoAction(id));
  }, []);

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={authorInfo[0]?.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{authorInfo[0]?.name}</h5>
          <p className="card-text">{authorInfo[0]?.description}</p>
          <p className="card-text">
            Рейтинг автора:
            {' '}
            {authorInfo[0]?.rating}
          </p>
        </div>
      </div>
      <div>Книги автора:</div>
      <div>
        {authorInfo[0]?.Books?.map((element) => <AuthorBooks element={element} key={element.id} />)}

      </div>
    </div>
  );
}
