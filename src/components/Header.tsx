import React from 'react';
import '../styles.css';
import logo from '../assets/logo.jpg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de Imperio Quetzal" className="logo-img" />
      </div>
      <div className="hamburguer-menu">&#9776;</div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#acerca-de">Acerca de</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#articulos">Artículos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;