import React from 'react';
import './../css/home_admin.css';

const Home_admin = props => {
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-between">
                    <div className="usuarios">
                        <button type="button" className="btn btn-outline-primary">Usuarios</button>
                    </div>
                    <div className="productos">
                        <button type="button" className="btn btn-outline-primary">Productos</button>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="horarios">
                        <button type="button" className="btn btn-outline-primary">Horarios</button>
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