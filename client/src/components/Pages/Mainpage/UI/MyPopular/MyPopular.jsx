import React from 'react';
import { Link } from 'react-router-dom';
import './mypopular.css';

export default function MyPopular({ el }) {
  return (
    <div className="waiting_item">
      <Link to="/main"><img src="img/waiting/1.png" alt="1" className="waiting_img" /></Link>
      <div className="waiting_descr">
        {el.title}
        {' '}
      </div>
    </div>
  );
}
