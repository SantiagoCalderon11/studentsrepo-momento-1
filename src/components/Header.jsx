import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">StudentsRepo</h1>
      <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#">Proyectos</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;