import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

import './../css/add_item.css';
import { arrowFunctionExpression } from '@babel/types';



const Add_item = (props) => {
    const { actions } = useContext(Context);
    return (
        <div className="modal fade" id="additem" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="container mt-5">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                                <span className="navbar-brand">Formulario Nuevo Item</span>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="formGroupExampleInput">Nombre</label>
                                        <input type="text" class="form-control" name="nombreProducto" placeholder="xxxxxxxxxxx"
                                            onChange={e => actions.handleChange(e)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label for="formGroupExampleInput">Precio</label>
                                        <input type="text" class="form-control" name="precioProducto" placeholder="xxxxxxxxxxxxx"
                                            onChange={e => actions.handleChange(e)} />
                                    </div>
                                    <div className="button col-md-3">
                                        <button type="reset" className="btn btn-secondary">Limpiar</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row pt-5">
                                <div className="col-md-5">
                                    <div className="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Categoria</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label for="formGroupExampleInput">Descripcion</label>
                                    <textarea rows="10" cols="50" placeholder="Agregar Descripcion" name="descripcionProducto" onChange={e => actions.handleChange(e)}></textarea>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-1">
                                    <button type="button" className="btn btn-primary">Importar</button>
                                </div>
                                <div className="col-md-8 pt-3" id="info">
                                    <p>Texto Informativo</p>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" onClick={e => actions.agregarProducto(props.history)} className="btn btn-secondary mr-3">Agregar</button>
                                    <Link className="navbar-brand" to="/productos" type="submit" className="btn btn-success">Cancelar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Add_item;