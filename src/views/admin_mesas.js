import React from 'react';
import { Context } from './../store/appContext';
import { Link, Redirect } from 'react-router-dom';
import './../css/container_admin_mesas.css'

class Admin_mesas extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        if (store.isAuthenticated === false) {
                            return <Redirect to="/" />
                        } else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                            return <Redirect to="/garzon_home" />
                        return (
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <h1>Opciones de Mesas</h1>
                                    </div>
                                </div>
                                <div className="row align-items-center" id="row_admin_mesas">
                                    <div className="col-5">
                                        <Link className="btn btn-dark btn-block rounded-pill" to="/admin_home/mesas/settings">Configuracion Mesas </ Link>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-5">
                                        <Link className="btn btn-dark btn-block rounded-pill" to="/garzon_home">Live Mesas</ Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}
export default Admin_mesas