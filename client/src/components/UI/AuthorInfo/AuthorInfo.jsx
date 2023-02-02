import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authorInfoAction } from '../../../redux/reducers/authorInfoSlice';
import AuthorBooks from '../AuthorBooks/AuthorBooks';
import Footer from '../Footer/Footer';

export default function AuthorInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const authorInfo = useSelector((store) => store.authorInfo);

  console.log('info', authorInfo[0]);

  useEffect(() => {
    dispatch(authorInfoAction(id));
  }, []);

  return (
    <>
      <h1 className="text-center">{authorInfo[0]?.name}</h1>
      <div
        className="d-flex mb-6 pt-3 pb-3"
        style={{
          justifyContent: 'center',
          borderRight: '1px',
          boxShadow: '1px 3px 3px grey',
          height: '900px',
          backgroundColor: 'rgb(238 236 245)',
        }}
      >
        <div className="card rounded-0 rounded-start border border-0 border-end " style={{ width: '18rem' }}>
          <img src={authorInfo[0]?.photo} className="card-img-top rounded-0" alt="..." />
          <div className="card-body rounded-0" style={{ minHeight: '400px' }}>
            <p className="card-text">{authorInfo[0]?.description}</p>
            <p className="card-text">
              Рейтинг автора:
              {' '}
              {authorInfo[0]?.rating}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-center border border-1 p-0 mb-0 rounded-0 pb-3">Книги Автора</h3>
          <div
            className="row"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'initial',
            }}
          >
            {authorInfo[0]?.Books?.map((element) => (
              <AuthorBooks
                element={element}
                key={element.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
