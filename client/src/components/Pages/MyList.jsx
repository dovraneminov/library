import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, CardBody, CardText, CardTitle,
} from 'reactstrap';

export default function MyList() {
//   const books = useSelector((store) => store.myBooks);
  const books = useSelector((store) => store.input);
  // console.log(books, 'vseeeeeeeeeeeeee');
  return books.map((book) => (
    book.title
      ? (
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
              {book.title}
            </CardTitle>
            <CardText>
              {book.description}
            </CardText>
          </CardBody>
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
        </Card>
      )
  ));
}
