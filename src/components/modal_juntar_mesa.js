import React from 'react';
import './../css/add_item.css';


const Juntar_mesa = () => {
    return (
        <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
        </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div className="container mt-3">
                            <nav className="navbar navbar-expand-lg navbar-light bg-secondary d-flex justify-content-center">
                                <span className="navbar-brand">Juntar Mesas</span>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="col-md-8 d-inline-block">
                                                <span>Estas mesas se moveran a:</span>
                                            </div>
                                            <div className="col-md-4 d-inline-block">
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Plaza
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="col-md-8 d-inline-block">
                                                <span>Mesas que recibiran item</span>
                                            </div>
                                            <div className="col-md-4 d-inline-block">
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Plaza
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <div className="col-md-6 d-inline-block">
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Mesa
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="col-md-6 d-inline-block">
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Mesa
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <span>A01 - A05</span>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="col-md-7 d-inline-block">
                                                <span>A07</span>
                                            </div>
                                            <div className="col-md-5 d-inline-block">
                                                <button type="button" className="btn btn-success">Success</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Juntar_mesa;