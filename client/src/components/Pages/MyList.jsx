import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardText, CardTitle,
} from 'reactstrap';
import { setAuthor } from '../../redux/reducers/authorSlice';
import { favoriteAddAction } from '../../redux/reducers/favoriteSlice';
import { infoAction, setInfo } from '../../redux/reducers/infoSlice';
import { addOrder, nullOrder } from '../../redux/reducers/orderSlice';
import { nullMoney, plusOrder } from '../../redux/reducers/priceSlice';

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
    dispatch(nullOrder());
    dispatch(nullMoney());
    dispatch(plusOrder(order.price));
    dispatch(addOrder(order));
    navigate('/order');
  }

  function openFavorite(book) {
    dispatch(favoriteAddAction(book.id));
    // navigate('/favorite');
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
              <button onClick={() => openFavorite(book)} type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">В избранное</button>
              <button onClick={() => openAuthor(book)} type="button" className="btn btn-outline-warning mt-1">Подробнее об авторе</button>
              <button onClick={() => openOrder(book)} type="button" className="btn btn-outline-warning mt-1 mb-2">Арендовать</button>
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
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel fontsForText">Library</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body text-center fontsForText">
                      Вы добавили книгу в избранное!
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )
      ))}
      ;
    </div>
  );
}
