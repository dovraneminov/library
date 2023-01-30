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
        Позвоните нам
        {' '}
        <a href="tel:+88005550121">8-800-555-01-21</a>
      </div>
    </footer>
  );
}
