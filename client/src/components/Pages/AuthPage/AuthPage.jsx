import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Col, Input, Label, Row, Modal,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthLogin } from '../../../redux/actions/userAction';

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModal, setModal] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setModal(true)}>Click Here</button>
      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button type="button">Cancel</button>}
        onClose={() => setModal(false)}
      />
      <Row>
        <Form onSubmit={(e) => {
          dispatch(AuthLogin(e));
          navigate('/');
        }}
        >
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
              <Label
                className="visually-hidden"
                for="exampleEmail2"
              >
                Name
              </Label>
              <Input
                id="exampleEmail2"
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
    </>
  );
}
