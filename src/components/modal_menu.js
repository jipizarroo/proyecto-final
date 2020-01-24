import React from 'react';

const Modal_menu = props => {
    return (

        <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
            <form>
                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <nav className="navbar navbar-light bg-light mt-3">
                                    <span className="navbar-text">
                                        Producto: xxxxxxxxx
                                    </span>
                                </nav>
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <label for="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputState">Cantidad</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2 pt-4 pl-5">
                                        <i className="fa fa-trash fa-2x"></i>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-8">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary ml-5">Detalles</button>
                                            <button type="button" className="btn btn-secondary ml-5 mr-5">Agregar</button>
                                            <button type="button" className="btn btn-secondary">Msg</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <label for="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputState">Cantidad</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2 pt-4 pl-5">
                                        <i className="fa fa-trash fa-2x"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col md 8">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary ml-5">Detalles</button>
                                            <button type="button" className="btn btn-secondary ml-5 mr-5">Agregar</button>
                                            <button type="button" className="btn btn-secondary">Msg</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group float-right pb-3" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">Cancelar</button>
                                    <button type="button" className="btn btn-secondary">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal_menu;