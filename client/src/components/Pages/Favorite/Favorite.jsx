import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteAction } from '../../../redux/reducers/favoriteSlice';
import OneFavorite from '../../UI/OneFavorite/OneFavorite';
import './favorite.css';

export default function Favorite() {
  const dispatch = useDispatch();
  const favorite = useSelector((store) => store.favorite);

  useEffect(() => {
    dispatch(favoriteAction());
  }, []);

  return (
    <div className="row d-flex justify-content" style={{ backgroundColor: 'rgb(238 236 245)' }}>
      {favorite?.map((fav) => <OneFavorite fav={fav} key={fav.id} />)}

    </div>
  );
}
