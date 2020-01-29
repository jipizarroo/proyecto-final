import React from 'react';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';
import { Link } from 'react-router-dom';


class Home_admin extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-between" id="HomeAmenus">
                    <div className="usuarios">
                        <Link className="navbar-brand" to="/admi_Usuario"> <button type="button" className="btn btn-outline-primary">Usuarios
                    </button>
                        </Link>
                    </div>
                    <div className="productos">
                        <Link className="navbar-brand" to="/menu"> <button type="button" className="btn btn-outline-primary">
                            Productos
                    </button>
                        </Link>
                    </div>

                </div>

                <div className="row d-flex justify-content-center" id="HomeAmenus">
                    <div className="horarios">
                        <Link className="navbar-brand" to="/horario"><button type="button" className="btn btn-outline-primary">
                            Horarios
                          </button>
                        </Link>

                    </div>

                    <div className="row d-flex justify-content-center" id="HomeAmenus">
                        <div className="horarios">
                            <Link className="btn btn-outline-primary" to="/horario">Horarios</Link>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between" id="HomeAmenus">
                        <div className="inventarios">
                            <button type="button" className="btn btn-outline-primary">Inventarios</button>
                        </div>
                        <div className="estadisticas">
                            <button type="button" className="btn btn-outline-primary">Estadisticas</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home_admin;