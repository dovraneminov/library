import React from 'react';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';

export default function NewPopularCard({ el }) {
  console.log(el);
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img
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
          Card subtitle
        </CardSubtitle>
        <CardText>
          {el.name}
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
  );
}
