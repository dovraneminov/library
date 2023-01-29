import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Col, Input, Label, ModalHeader, ModalBody,
} from 'reactstrap';
import { submitLogin } from '../../../redux/actions/userAction';

export default function AuthModalContent({ toggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <ModalHeader toggle={toggle}>Authorization</ModalHeader>
      <ModalBody>
        <Form onSubmit={(e) => {
          dispatch(submitLogin(e));
          navigate('/');
        }}
        >
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
              placeholder="password"
              type="password"
            />
          </Col>
          <Col>
            <Button onClick={toggle} type="submit">
              Submit
            </Button>
          </Col>
        </Form>
      </ModalBody>
    </>
  );
}
