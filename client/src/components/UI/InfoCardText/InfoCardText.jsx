import React from 'react';
import { useSelector } from 'react-redux';
import './InfoCardText.css';

export default function InfoCardText() {
  const info = useSelector((store) => store.info);
  return (
    <div className="forInfoText">{info?.description}</div>
  );
}
