import React from 'react';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';


class Home_admin extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-between" id="HomeAmenus">
                    <div className="usuarios">
                        <Link to="/admin_home/users"> <button type="button" className="btn btn-outline-primary">Usuarios
                    </button>
                        </Link>
                    </div>
                    <div className="productos">
                        <Link  to="/admin_home/productos"> <button type="button" className="btn btn-outline-primary">
                            Productos
                    </button>
                        </Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" id="HomeAmenus">
                    <div className="horarios">
                        <Link to=""><button type="button" className="btn btn-outline-primary">
                            EMPTY
                          </button>
                        </Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-between" id="HomeAmenus">
                    <div className="usuarios">
                        <Link to="/admin_home/users"> <button type="button" className="btn btn-outline-primary">Usuarios
                    </button>
                        </Link>
                    </div>
                    <div className="productos">
                        <Link  to="/admin_home/productos"> <button type="button" className="btn btn-outline-primary">
                            Productos
                    </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home_admin;