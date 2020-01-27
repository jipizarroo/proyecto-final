import React from 'react';
import './../css/horario.css';



export default class Horario extends React.Component {

    render() {
        return (
            <div className="container horario">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Fecha Horario
                                        </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">Garzon</button>
                                        <button className="dropdown-item" type="button">Jefe de Salon</button>
                                        <button className="dropdown-item" type="button">Administrador</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="title">Creando mi Horario</h4>
                                <button type="submit" class="btn btn-primary float-right">Limpiar</button>
                            </div>
                            <table className="table table-bordered">
                                <tr>
                                    <td>Lunes</td>
                                    <td>Martes</td>
                                    <td>Miercoles</td>
                                    <td>Jueves</td>
                                    <td>Viernes</td>
                                    <td>Sabado</td>
                                    <td>Domingo</td>
                                </tr>
                                <tr>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                </tr>

                                <tr>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                </tr>

                                <tr>

                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                </tr>

                                <tr>

                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                    <td>AM</td>
                                </tr>

                                <tr>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                </tr>

                                <tr>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                </tr>

                                <tr>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                </tr>

                                <tr>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                    <td>PM</td>
                                </tr>
                            </table>

                        </div>

                        
                        <button type="submit" class="btn btn-primary float-left">Go Back</button>
                        <button type="submit" class="btn btn-primary float-right">Aceptar</button>
                       

                    </div>
                </div>

            </div>



        )
    }
}