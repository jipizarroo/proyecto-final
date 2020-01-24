import React from 'react';

const Productos = props => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col md-3"></div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info">Agregar Sub_Categ</button>
                    </div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info  ml-4">Agregar Item</button>
                    </div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info">Agregar Item</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row mt-2">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th className="columna1" scope="col">ID</th>
                                <th className="columna2" scope="col">Nombre</th>
                                <th className="columna3" scope="col">Sub_Categoria</th>
                                <th className="columna4" scope="col">Precio</th>
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Productos;