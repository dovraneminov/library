import React from 'react';
import {
  Card, CardBody, CardLink, CardSubtitle, CardTitle,
} from 'reactstrap';

export default function MyPopular({ el }) {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
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
      </CardBody>
      <img
        alt="Card cap"
        src="https://picsum.photos/318/180"
        width="100%"
      />
      <CardBody>
        <CardLink href="#">
          Card Link
        </CardLink>
      </CardBody>
    </Card>
  );
}
