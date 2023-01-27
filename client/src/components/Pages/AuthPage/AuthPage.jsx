import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Col, Input, Label, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthLogin } from '../../../redux/actions/userAction';

export default function AuthPage(args) {
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
        <ModalHeader toggle={toggle}>Registration</ModalHeader>
        <ModalBody>
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
