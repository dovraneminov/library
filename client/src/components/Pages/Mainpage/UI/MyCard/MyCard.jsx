import React from 'react';
import {
  Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';

export default function MyCard() {
  return (
    <div>
      <Card
        style={{
          width: '18rem',
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            Card title
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
          <CardText>
            Some
          </CardText>
          <CardLink href="#">
            Card Link
          </CardLink>
          <CardLink href="#">
            Another Link
          </CardLink>
        </CardBody>
      </Card>

    </div>
  );
}
