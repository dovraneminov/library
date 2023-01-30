import React, { useState } from 'react';
import {
  Button,
  Modal, ModalFooter,
} from 'reactstrap';
import AuthModalContent from './AuthModalContent';
import RegModalContent from './RegModalContent';

export default function AuthPage({
  toggle, modal, setModal, ...args
}) {
  const [isAuth, setIsAuth] = useState(true);
  // const toggle = () => setModal(!modal);
  // useEffect(() => {
  //   setModal(!modal);
  // }, []);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        {isAuth ? <AuthModalContent toggle={toggle} /> : <RegModalContent toggle={toggle} />}
        <ModalFooter>
          <Button onClick={() => setIsAuth((prev) => !prev)}>{isAuth ? 'Registration' : 'Authorization'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
