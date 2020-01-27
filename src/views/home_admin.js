import React from 'react';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';

const Home_admin = props => {


   
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-between">
                    <div className="usuarios">
                    <Link  className="navbar-brand" to="/admi_Usuario"> <button type="button" className="btn btn-outline-primary">Usuarios
                    </button>
                    </Link>
                    </div>
                    <div className="productos">
                    <Link  className="navbar-brand" to="/menu"> <button type="button" className="btn btn-outline-primary">
                        Productos
                    </button>
                    </Link>
                    </div>

                </div>

                <div className="row d-flex justify-content-center">
                    <div className="horarios">
                      <Link className="navbar-brand" to="/horario"><button type="button" className="btn btn-outline-primary">
                          Horarios
                          </button>
                          </Link>
                          
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="inventarios">
                        <button type="button" className="btn btn-outline-primary">Inventarios</button>
                    </div>
                    <div className="estadisticas">
                        <button type="button" className="btn btn-outline-primary">Estadisticas</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home_admin;