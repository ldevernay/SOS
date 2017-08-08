import React from 'react';
import logo from '../assets/logosimplon2.png';

const Header = () =>
  (<nav className='header'>
    <a className='header-brand' href='https://simplon.co/'>
      <img alt='Simplon logo' src={logo} />
    </a>
  </nav>);

export default Header;
