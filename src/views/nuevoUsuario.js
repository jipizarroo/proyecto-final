import React from 'react';
import './../css/nuevoUsuario.css'



export default class NuevoUsuario extends React.Component {

    render() {
        return (
            <div className="container miclase">
                <div className="row">
                    <div className="col-md-12">
                        <label for=""  >Registro de nuevo Usuario</label>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label for="" className="form-label">Nombre</label>
                                <input type="text" placeholder="ingrese su nombre" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                                <label for="" className="form-label">Apellido</label>
                                <input type="text" placeholder="ingrese su Apellido" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary">Limpiar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Eliga tipo de Usuario
                                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Garzon</button>
                                    <button className="dropdown-item" type="button">Jefe de Salon</button>
                                    <button className="dropdown-item" type="button">Administrador</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <label for="" className="form-label">Email</label>
                            <input type="text" placeholder="Enter you Email" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-md-1">
                            <button type="submit" className="btn btn-outline-secondary">Agregar</button>
                        </div>
                        <div className="col-md-1">
                            <button type="button" className="btn btn-outline-secondary">Cancelar</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}