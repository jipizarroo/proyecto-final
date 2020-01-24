import React from 'react';
import './../css/menu.css'



export default class Menu extends React.Component {

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row withScroll">
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered">
                                    <tr>
                                        <td>Unidades</td>
                                        <td>Descripcion Producto</td>
                                        <td>Precio</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Cebolla</td>
                                        <td>$60.00</td>
                                    </tr>
                                </table>
                                <div className="total-cuenta">
                                    <label>Total Venta</label>
                                    <input type="text" placeholder="monto final" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="sumbit" className="btn btn-primary">Go Back</button>
                    </div>
                </div>

            </div>
        )
    }
}