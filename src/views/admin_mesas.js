import React from 'react';
import { Link } from  'react-router-dom';

class Admin_mesas extends React.Component {

    render(){
        return(
            <div className="container mt-5">
                <h1>Opciones de Mesas</h1>
                <div className="row d-flex justify-content-between">
                    <Link className="btn btn-outline-primary" to="/admin_home/mesas/settings">Configuracion Mesas </ Link>
                    <Link className="btn btn-outline-primary" to="/admin_dashboard">Live Mesas </ Link>
                </div>
            </div>
        )
    }
}
export default Admin_mesas