import React from 'react';
import logo from '../public/stackline_logo.svg'; 

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#001f3f', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
      <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
    </header>
  );
};

export default Header;