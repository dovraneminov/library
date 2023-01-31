import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteAction } from '../../../redux/reducers/favoriteSlice';
import OneFavorite from '../../UI/OneFavorite/OneFavorite';

export default function Favorite() {
  const dispatch = useDispatch();
  const favorite = useSelector((store) => store.favorite);

  useEffect(() => {
    dispatch(favoriteAction());
  }, []);

  console.log(favorite);
  return (
    <div>
      {favorite?.map((fav) => <OneFavorite fav={fav} key={fav.id} />)}

    </div>
  );
}
