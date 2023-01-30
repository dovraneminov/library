import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Genres from './components/Pages/Genres/Genres';
import NavBar from './components/Pages/NavBar/NavBar';
import Popular from './components/Pages/Popular/Popular';
import Author from './components/Pages/Author/Author';
import Basket from './components/Pages/Basket/Basket';
import ClientsPage from './components/Pages/ClientsPage/ClientsPage';
import Mybook from './components/Pages/Mybook/Mybook';
import Books from './components/Pages/Books/Books';
import InfoCard from './components/UI/InfoCard/InfoCard';
import AuthorCard from './components/UI/AuthorCard/AuthorCard';
import MainPage from './components/Pages/Mainpage/Mainpage';
import OnePopularBook from './components/Pages/Mainpage/UI/OnePopularBook/OnePopularBook';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={(<Navigate to="/main" />)} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/onepopular/:id" element={<OnePopularBook />} />
        <Route path="/genre" element={<Genres />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/author" element={<Author />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/client" element={<ClientsPage />} />
        <Route path="/mybook" element={<Mybook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/info/:id" element={<InfoCard />} />
        <Route path="/author/:id" element={<AuthorCard />} />
      </Routes>
    </>

  );
}

export default App;
