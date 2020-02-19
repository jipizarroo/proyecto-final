import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../store/appContext';
import '../css/navbar.css';

const Navbar = () => {
  const { store, actions } = useContext(Context);


  return (
    <>
      {
        store.isAuthenticated === false ? (

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link">Bienvenido a RestaurAPP</Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-between">
                  <li className="nav-item active">
                    <Link className="nav-link">RestaurAPP</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link">Usuario: {store.currentUser.user.name} {store.currentUser.user.last_name}</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={() => actions.logOut()}><i className="fas fa-sign-out-alt"></i></Link>
                  </li>
                </ul>
              </div>
            </nav>
          )
      }
    </>
  )
}

export default Navbar;