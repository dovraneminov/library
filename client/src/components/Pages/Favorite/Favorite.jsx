import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteAction } from '../../../redux/reducers/favoriteSlice';
import Footer from '../../UI/Footer/Footer';
import OneFavorite from '../../UI/OneFavorite/OneFavorite';
import './favorite.css';

export default function Favorite() {
  const dispatch = useDispatch();
  const favorite = useSelector((store) => store.favorite);

  useEffect(() => {
    dispatch(favoriteAction());
  }, []);

  return (
    <>
      <div style={{ height: '1000px', backgroundColor: 'rgb(238 236 245)' }}>
        <h2 className="text-center pt-4 forFavHeader">Ваши избранные книги</h2>
        <div className="row d-flex justify-content">
          {favorite?.map((fav) => <OneFavorite fav={fav} key={fav.id} />)}

        </div>
      </div>
      <Footer />
    </>
  );
}
