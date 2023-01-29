import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthLogin } from '../../../redux/actions/userAction';

export default function Entry(args) {
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
          <Form onSubmit={() => {
            navigate('/signup');
          }}
          >
            <Col>
              <Button type="submit">
                Зарегистрироваться
              </Button>
            </Col>
          </Form>
          <Form onSubmit={() => {
            navigate('/login');
          }}
          >
            <Col>
              <Button type="submit">
                Войти
              </Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
