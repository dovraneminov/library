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
import Attention from '../../UI/Attention/Attention';
import Head from '../../UI/Head/Head';
import Navigation from '../../UI/Navigation/Navigation';

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
                <>
                  <Link
                    to="/logout"
                    onClick={(e) => {
                      dispatch(logoutUser(e));
                      navigate('/');
                    }}
                  >
                    Выйти
                  </Link>
                  <Attention />
                  <Head />
                  <Navigation />
                </>
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
