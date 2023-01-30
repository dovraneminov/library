import React from 'react';
import { useSelector } from 'react-redux';

export default function OnePopularBook() {
  const popular = useSelector((store) => store.popular);
  console.log(popular);
  return (
    <div>OnePopularBook</div>
  );
}
