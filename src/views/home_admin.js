import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';


const Home_admin = props => {
    const { store } = useContext(Context);

    useEffect(() => {
        if (store.isAuthenticated === false) {
            props.history.push("/")
        }
        else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false)) {
            props.history.push("/garzon_home")
        } else {

        }
    });

    return (
        <>
        <div className="container" id="admin-home-container">
            <div className="row d-flex justify-content-center" id="HomeAmenus">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="botones_admin">
                        <Link to="/admin_home/users" type="button" className="btn btn-dark btn-lg btn-block rounded-pill border-light" id="botones">Usuarios
                        </Link>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5" id="HomeAmenus">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="botones_admin">
                        <Link to="/admin_home/productos" type="button" className="btn btn-dark btn-lg btn-block rounded-pill border-light" id="botones">
                            Productos
                        </Link>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5" id="HomeAmenus">
                <div className="col-2">

                </div>
                <div className="col-8">
                    <div className="botones_admin">
                        <Link to="/admin_home/mesas" type="button" className="btn btn-dark btn-lg btn-block rounded-pill border-light">
                            Mesas
                        </Link>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
        </>
    )
}
export default Home_admin;