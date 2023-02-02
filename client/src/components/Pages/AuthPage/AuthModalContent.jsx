import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Col, Input, Label, ModalHeader, ModalBody,
} from 'reactstrap';
import { submitLogin } from '../../../redux/actions/userAction';
import './authPage.css';

export default function AuthModalContent({ toggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <ModalHeader className="text-center authBorder" toggle={toggle}>Authorization</ModalHeader>
      <ModalBody className="authBack">
        <Form
          onSubmit={(e) => {
            dispatch(submitLogin(e));
            navigate('/');
          }}

        >
          <Col>
            <Label
              className="visually-hidden"
              for="exampleEmail2"
              style={{ width: '90px', marginBottom: '20px' }}
            >
              Email
            </Label>
            <Input
              name="email"
              placeholder="email"
              type="text"
              className="forInputs"
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
              className="forInputs"
              name="password"
              placeholder="password"
              type="password"
            />
          </Col>
          <Col>
            <Button onClick={toggle} type="submit">
              Войти
            </Button>
          </Col>
        </Form>
      </ModalBody>
    </>
  );
}
