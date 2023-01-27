import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Pages/NavBar';
import { checkAuth } from './redux/actions/userAction';
import AuthPage from './components/Pages/AuthPage';
import LoginPage from './components/Pages/LoginPage';
import Genres from './components/Pages/Genres/Genres';
import NavBar from './components/Pages/NavBar/NavBar';
import Popular from './components/Pages/Popular/Popular';
import Author from './components/Pages/Author/Author';
import Basket from './components/Pages/Basket/Basket';
import ClientsPage from './components/Pages/ClientsPage/ClientsPage';
import Mybook from './components/Pages/Mybook/Mybook';
import MainPage from './components/Pages/Mainpage/Mainpage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={(<Navigate to="/main" />)} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/genre" element={<Genres />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/author" element={<Author />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/client" element={<ClientsPage />} />
        <Route path="/mybook" element={<Mybook />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>

  );
}

export default App;
