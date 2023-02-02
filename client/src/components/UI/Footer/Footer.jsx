import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <div className="info_links">
          <a href="https://github.com/gid2" className="underlined">Служба поддержки</a>
          |
          <a href="https://github.com/Shiny469" className="underlined">Политика конфиденциальности</a>
          |
          <a href="https://github.com/OlgaPorunova" className="underlined">Реклама</a>
        </div>
        {' '}
        Связаться с
        <a href="https://github.com/dovraneminov" style={{ marginTop: '18px' }}> Library</a>
      </div>
    </footer>
  );
}
