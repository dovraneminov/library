import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Container,
} from 'reactstrap';
import {
  Link, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/actions/userAction';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Navbar>
        <Link to="/">Books</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}>
          <Container>
            {user?.id
              ? (
                <Link
                  to="/logout"
                  onClick={(e) => {
                    dispatch(logoutUser(e));
                    navigate('/');
                  }}
                >
                  Выйти
                </Link>
              )
              : (
                <>
                  <Link to="/signup">Регистрация</Link>
                  <Link to="/login">Авторизация</Link>
                </>
              )}
          </Container>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
