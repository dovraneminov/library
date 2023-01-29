import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/Pages/NavBar';
import { checkAuth } from './redux/actions/userAction';
import AuthPage from './components/Pages/AuthPage';
import LoginPage from './components/Pages/LoginPage';
import Genres from './components/Pages/Genres/Genres';
import Popular from './components/Pages/Popular/Popular';
import Author from './components/Pages/Author/Author';
import Basket from './components/Pages/Basket/Basket';
import ClientsPage from './components/Pages/ClientsPage/ClientsPage';
import Mybook from './components/Pages/Mybook/Mybook';
import MainPage from './components/Pages/Mainpage/Mainpage';
import Entry from './components/Pages/Entry';

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
        <Route path="/entry" element={<Entry />} />
      </Routes>
    </>

  );
}

export default App;
