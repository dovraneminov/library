import React from 'react';
import {
  Card, CardBody, CardLink, CardTitle,
} from 'reactstrap';

export default function MyPublisher({ el }) {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <CardBody>
        <CardTitle tag="h5">
          {el.name}
        </CardTitle>
      </CardBody>
      <img
        alt="Card cap"
        src={el.photo}
        width="100%"
      />
      <CardBody>
        <CardLink href="#">
          Another Link
        </CardLink>
      </CardBody>
    </Card>
  );
}
