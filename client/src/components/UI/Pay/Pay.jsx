import React from 'react';

export default function Pay() {
  return (
    <div
      style={{
        backgroundImage: 'url(/photo/books2.jpg)', backgroundSize: 'cover', height: '1000px', width: '100%', backgroundPosition: 'right', backgroundAttachment: 'scroll', backgroundPositionX: '50%',
      }}
    >
      <div style={{
        width: '100%', height: '100%', display: 'flex', justifyContent: 'center',
      }}
      >
        <h1 style={{ textAlign: 'center', color: 'white', marginTop: '20vh' }}>Вы успешно оплатили заказ!</h1>

      </div>
    </div>
  );
}
