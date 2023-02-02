import React from 'react';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';

export default function NewPopularCard({ el }) {
  console.log(el, '+++++++');
  return (
    <Card
      className="border border-0 pt-2"
      style={{
        width: '18rem',
        backgroundColor: 'rgb(238 236 245)',
      }}
    >
      <img
        className="rounded"
        alt="Sample"
        src={el.photo}
      />
      <CardBody>
        <CardTitle tag="h5">
          {el.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {el?.Author?.name}
        </CardSubtitle>

      </CardBody>
    </Card>
  );
}
