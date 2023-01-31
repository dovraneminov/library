import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <div className="info_links">
          <a href="/" className="underlined">Служба поддержки</a>
          |
          <a href="/" className="underlined">Политика конфиденциальности</a>
        </div>
        {' '}
        Связаться с
        <a href="tel:+88005550121" style={{ marginTop: '18px' }}> Library</a>
      </div>
    </footer>
  );
}
