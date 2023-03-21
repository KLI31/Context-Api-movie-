import React from 'react';
import './componentStyle.css';

const user = { name: 'Luis David' };

const Navbar = () => {
  return (
    <nav class="nav_style">
      <span class="navbar-brand">
        <h2>{user ? `Bienvenido ${user.name}` : `Bienvenid@`}</h2>
      </span>
      <div class="btn_nav">
        {user ? (
          <button class="btn_login">Cerrar Secion</button>
        ) : (
          <button class="btn_login">Iniciar Secion</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
