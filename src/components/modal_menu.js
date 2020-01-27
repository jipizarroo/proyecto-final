import React from 'react';
import Modal_ingredientes from './modal_ingredientes'



class Modal_menu extends React.Component {


    render() {
        return (
            <div className="container">
                <div id="modalReserva" className="modal fade bd-example-modal-lg"
                    tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <form>
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
                                                <button type="button" className="btn btn-secondary ml-5 mr-5" data-toggle="collapse" data-target="#collapseIngrediente1">Agregar</button>
                                                <button type="button" className="btn btn-secondary">Msg</button>
                                            </div>



                                            <div class="collapse" id="collapseIngrediente1">
                                                <div class="card card-body">
                                                    <Modal_ingredientes />
                                                </div>
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
                                                <button type="button" className="btn btn-secondary ml-5 mr-5" data-toggle="collapse" data-target="#collapseIngrediente2">Agregar</button>
                                                <button type="button" className="btn btn-secondary">Msg</button>
                                            </div>




                                            <div class="collapse" id="collapseIngrediente2">
                                                <div class="card card-body">
                                                    <Modal_ingredientes />
                                                </div>
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
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal_menu;