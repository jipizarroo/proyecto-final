import React from 'react';

class Modal_ingredientes extends React.Component {
    render() {
        return (
            <div className="container">
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
                            <div className="btn-group float-right pb-3" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary">Cancelar</button>
                                <button type="button" className="btn btn-secondary">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal_ingredientes;