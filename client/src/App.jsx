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
import Books from './components/Pages/Books/Books';
import InfoCard from './components/UI/InfoCard/InfoCard';
import AuthorCard from './components/UI/AuthorCard/AuthorCard';
import Order from './components/Pages/Order/Order';
import Comics from './components/Pages/Comics/Comics';
import OnePopularBook from './components/Pages/Mainpage/UI/OnePopularBook/OnePopularBook';
import Entry from './components/Pages/Entry';
import Mainpage from './components/Pages/Mainpage/Mainpage';
import MyPaiment from './components/Pages/MyPaiment/MyPaiment';

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
        <Route path="/main" element={<Mainpage />} />
        <Route path="/paiment" element={<MyPaiment />} />
        <Route path="/onepopular/:id" element={<OnePopularBook />} />
        <Route path="/genre" element={<Genres />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/author" element={<Author />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/client" element={<ClientsPage />} />
        <Route path="/mybook" element={<Mybook />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/info/:id" element={<InfoCard />} />
        <Route path="/author/:id" element={<AuthorCard />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>

  );
}

export default App;
