import React from 'react';
import './../css/home_admin.css';
import { Link } from 'react-router-dom';


class Home_admin extends React.Component {

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-between" id="HomeAmenus">
                        <div className="usuarios">
                            <Link className="btn btn-outline-primary" to="/users">Usuarios</Link>
                        </div>
                        <div className="productos">
                            <Link className="btn btn-outline-primary" to="/productos">Productos</Link>
                        </div>
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
            </>
        )
    }
}
export default Home_admin;