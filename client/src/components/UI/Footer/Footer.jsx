import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <div className="info_links">
          <a href="https://github.com/gid2" className="underlined" style={{ textDecoration: 'none', paddingRight: '2px' }}>Служба поддержки</a> 
          |
          <a href="https://github.com/Shiny469" className="underlined" style={{ textDecoration: 'none', paddingRight: '2px', paddingLeft: '2px' }}>Политика конфиденциальности</a>
          |
          <a href="https://github.com/OlgaPorunova" className="underlined" style={{ textDecoration: 'none', paddingLeft: '2px' }}>Cвязь</a>
        </div>
        Напишите нам 
        {' '}
        <a href="https://github.com/dovraneminov">Library</a> 
      </div>
    </footer>
  );
}
