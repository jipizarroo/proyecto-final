import React from 'react';

const Modal_add_items = props => {
    return (

        <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Large modal</button>
            <form>
                <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="container modal-content">
                                <nav className="navbar navbar-light bg-light mt-3">
                                    <span className="navbar-text">
                                        Agregando productos a Mesa: XX
                                    </span>
                                </nav>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="inputState">Nombre</label>
                                        <input type="text" className="form-control d-block" placeholder="xxxxxxxxxxx" />
                                        <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle d-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                        </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="formGroupExampleInput">Precio</label>
                                        <input type="text" class="form-control" placeholder="xxxxxxxxxxxxx" />
                                    </div>
                                    <div className="button col-md-3">
                                        <button type="button" className="btn btn-secondary">Limpiar</button>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-md-2">
                                        <label for="formGroupExampleInput">Descripcion</label>
                                        <textarea rows="4" cols="20">
                                            xxxxxxxxxxx
                                        </textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal_add_items;