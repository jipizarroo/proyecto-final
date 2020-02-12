import React from 'react';
import { Context } from './../store/appContext';
import { Link, Redirect } from 'react-router-dom';

class Admin_mesas extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        if(store.isAuthenticated === false){
                            return <Redirect to="/" />
                        }else if((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                        return <Redirect to="/garzon_home" />
                        return (
                            <div className="container mt-5">
                                <h1>Opciones de Mesas</h1>
                                <div className="row d-flex justify-content-between">
                                    <Link className="btn btn-outline-primary" to="/admin_home/mesas/settings">Configuracion Mesas </ Link>
                                    <Link className="btn btn-outline-primary" to="/garzon_home/:id/menu">Live Mesas </ Link>
                                    <Link className="btn btn-outline-primary" to="/garzon_home">Testing live-garzones </ Link>
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