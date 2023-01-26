import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/actions/userAction';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: 18,
};

export default function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{
      flexGrow: 1,
    }}
    >
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          background: 'linear-gradient(0deg, rgba(89,89,89,1) 0%, rgba(0,0,0,1) 100%)',
        }}
      >
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={linkStyle}>Главная страница</NavLink>
          </Typography>
          {user?.id
            ? (
              <>
                <Typography variant="h6" component="div" mr={5}>
                  <NavLink to="/profile" style={linkStyle}>Личный кабинет</NavLink>
                </Typography>
                <Typography variant="h6" component="div">
                  <NavLink
                    to="/logout"
                    onClick={(e) => {
                      dispatch(logoutUser(e));
                      navigate('/');
                    }}
                    style={linkStyle}
                  >
                    Выйти

                  </NavLink>
                </Typography>
              </>
            )
            : (
              <>
                <Typography variant="h6" component="div" mr={5}>
                  <NavLink to="/signup" style={linkStyle}>Регистрация</NavLink>
                </Typography>
                <Typography variant="h6" component="div">
                  <NavLink to="/login" style={linkStyle}>Авторизация</NavLink>
                </Typography>
              </>
            )}

        </Toolbar>
      </AppBar>
    </Box>

  );
}
