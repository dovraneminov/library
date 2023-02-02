import React from 'react';
import style from './style.module.css';

function Loader() {
  return (
    <div className={style.wrapper}>
      <div className={style.loader} />
    </div>
  );
}

export default Loader;
