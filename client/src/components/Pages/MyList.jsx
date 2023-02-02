import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardText, CardTitle,
} from 'reactstrap';
import { setAuthor } from '../../redux/reducers/authorSlice';
import { infoAction, setInfo } from '../../redux/reducers/infoSlice';
import { addOrder } from '../../redux/reducers/orderSlice';
import { plusOrder } from '../../redux/reducers/priceSlice';

export default function MyList() {
  const books = useSelector((store) => store.input);
  console.log(books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const info = useSelector((store) => store.info);
  // const order = useSelector((store) => store.order);
  // console.log(info);
  useEffect(() => {
    dispatch(setInfo());
    dispatch(infoAction(id));
  }, []);

  function openAuthor(book) {
    dispatch(setAuthor(book));
    navigate(`/books/author/${book.Author.id}`);
  }

  function openOrder(order) {
    dispatch(plusOrder(order.price));
    dispatch(addOrder(order));
    navigate('/order');
  }

  return (
    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
      {books.map((book) => (
        book.title
          ? (
            <Card
              className="botder border-0"
              style={{
                width: '18rem',
                margin: '10px 10px',
                boxShadow: '1px 2px 2px grey',
              }}
            >
              <img
                alt="Sample"
                src={book.photo}
                className="pt-2"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {book.title}
                </CardTitle>
                <CardText>
                  {book.description}
                </CardText>
              </CardBody>
              <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-warning">В избранное</button>
              <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-warning mt-1">Вернуться назад</button>
              <button onClick={() => openAuthor(book)} type="button" className="btn btn-outline-warning mt-1">Подробнее об авторе</button>
              <button onClick={() => openOrder(book)} type="button" className="btn btn-outline-warning mt-1 mb-2">Подробнее об авторе</button>
            </Card>
          )
          : (
            <Card
              style={{
                width: '18rem',
              }}
            >
              <img
                alt="Sample"
                src={book.photo}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {book.name}
                </CardTitle>
                <CardText>
                  {book.description}
                </CardText>
              </CardBody>
              {/* <button onClick={() => navigate(-1)}
          type="button" className="btn btn-outline-warning">В избранное</button>
          <button onClick={() => navigate(-1)}
          type="button" className="btn btn-outline-warning">Вернуться назад</button>
          <button onClick={() => openAuthor()}
          type="button" className="btn btn-outline-warning">Подробнее об авторе</button>
          <button onClick={() => openOrder()}
          type="button" className="btn btn-outline-warning">Подробнее об авторе</button> */}
            </Card>
          )
      ))}
      ;
    </div>
  );
}
