import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link  className="navbar-brand" to="/admin_home">LOGO</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/#">Bienvenido: xxxxxxxxxx</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/config">Configuracion</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/log_out">Salir</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;