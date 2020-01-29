import React from 'react';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';


class Home_admin extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-between" id="HomeAmenus">
                    <div className="usuarios">
                        <Link className="navbar-brand" to="/admi_Usuario" className="btn btn-outline-primary">Usuarios</Link>
                    </div>
                    <div className="productos">
                        <Link className="btn btn-outline-primary" to="/productos">Productos</Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" id="HomeAmenus">
                    <div className="horarios">
                        <Link className="btn btn-outline-primary" to="/horario">Horarios</Link>
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