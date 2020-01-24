import React from 'react';
import './../css/ventas_garzon.css';

const Ventas_garzon = props => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th className= "columna1" scope="col">Total Ventas</th>
                                <th className= "columna2" scope="col">Propinas</th>
                                <th className= "columna3" scope="col">Metodo de Pago</th>
                                <th className= "columna4" scope="col">No. de Cuenta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Ventas_garzon;