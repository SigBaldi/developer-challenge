import React from 'react';
import logo from './logo.svg';
import STYLES from './Header.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={getClassName('Header')}>
    <a href="/">
      <span className={getClassName('Header__hidden-text')}>Avant Arte</span>
      <img
        className={getClassName('Header__logo-image')}
        alt="AvantArte"
        src={logo}
      />
    </a>
  </header>
);

export default Header;
