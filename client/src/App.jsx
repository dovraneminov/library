import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Genres from './components/Pages/Genres/Genres';
import NavBar from './components/Pages/NavBar/NavBar';
import Popular from './components/Pages/Popular/Popular';
import Author from './components/Pages/Author/Author';
import Basket from './components/Pages/Basket/Basket';
import ClientsPage from './components/Pages/ClientsPage/ClientsPage';
import Mybook from './components/Pages/Mybook/Mybook';
import MainPage from './components/Pages/Mainpage/Mainpage';
import Comics from './components/Pages/Comics/Comics';

function App() {
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
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </>

  );
}

export default App;
