import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Col, Input, Label, ModalHeader, ModalBody,
} from 'reactstrap';
import { AuthLogin } from '../../../redux/actions/userAction';
import './authPage.css';

export default function RegModalContent({ toggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <ModalHeader className="authBorder" toggle={toggle}>Registration</ModalHeader>
      <ModalBody className="authBack">
        <Form onSubmit={(e) => {
          dispatch(AuthLogin(e));
          navigate('/');
        }}
        >
          <Col>
            <Label
              className="visually-hidden"
              for="exampleEmail3"
            >
              Name
            </Label>
            <Input
              id="exampleEmail3"
              name="name"
              placeholder="username"
              type="text"
              className="forInputs"
            />
          </Col>
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
              className="forInputs"
            />
          </Col>
          <Col>
            <Label
              className="visually-hidden"
              for="exampleEmail4"
            >
              Phone
            </Label>
            <Input
              id="examplePhone4"
              name="phone"
              placeholder="phone"
              type="text"
              className="forInputs"
            />
          </Col>
          <Col>
            <Label
              className="visually-hidden"
              for="examplePassword5"
            >
              Password
            </Label>
            <Input
              id="examplePassword5"
              name="password"
              placeholder="password"
              type="password"
              className="forInputs"
            />
          </Col>
          <Col>
            <Button onClick={toggle} type="submit">
              Создать
            </Button>
          </Col>
        </Form>
      </ModalBody>
    </>
  );
}
