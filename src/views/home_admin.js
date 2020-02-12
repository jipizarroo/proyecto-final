import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';


const Home_admin = props => {
    const {store, actions} = useContext(Context);

    useEffect(() => {
            if (store.isAuthenticated === false)
            {props.history.push("/")
            }
            else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
            {props.history.push("/garzon_home")  
            }else{

            }
        });

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
                        <Link to="/admin_home/mesas"><button type="button" className="btn btn-outline-primary">
                            Mesas
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
export default Home_admin;