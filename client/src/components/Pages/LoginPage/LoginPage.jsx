import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Col, Input, Label, Row,
} from 'reactstrap';
import { submitLogin } from '../../../redux/actions/userAction';

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Row>
      <Form onSubmit={(e) => {
        dispatch(submitLogin(e));
        navigate('/');
      }}
      >
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Label
              className="visually-hidden"
              for="exampleEmail2"
            >
              Email
            </Label>
            <Input
              id="exampleEmail2"
              name="email"
              placeholder="email"
              type="text"
            />
          </Col>
          <Col>
            <Label
              className="visually-hidden"
              for="examplePassword"
            >
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="123"
              type="text"
            />
          </Col>
          <Col>
            <Button type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}
