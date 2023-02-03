import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Col, Input, Label, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import { submitLogin } from '../../../redux/actions/userAction';

export default function LoginPage(args) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    setModal(!modal);
  }, []);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
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
              <Button type="submit">
                Submit
              </Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
