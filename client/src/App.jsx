import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Pages/NavBar';
import { checkAuth } from './redux/actions/userAction';
import AuthPage from './components/Pages/AuthPage';
import LoginPage from './components/Pages/LoginPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
