import React from 'react';
import { Context } from '../store/appContext';

class Add_categoria extends React.Component {
   
    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="modal fade" id="addcategory" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="container mt-5">
                                                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                                                    <span className="navbar-brand">Nueva Categoria</span>
                                                </nav>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label for="formGroupExampleInput">Nombre</label>
                                                            <input type="text" name="description" className="form-control" placeholder="xxxxxxxxxxx" onChange={e => actions.handleChange(e)} />
                                                        </div>
                                                    </div>
                                                </form>
                                                <form>
                                                    <div className="row mt-5">
                                                        <div className="col-md-6">
                                                            <label for="formGroupExampleInput">LOGO</label>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="row pt-5 d-flex justify-content-between">
                                                    <button type="button" className="btn btn-secondary mr-3" data-dismiss='modal'>Cancelar</button>
                                                    <button type="button" className="btn btn-success" onClick={() => actions.addCategory(this.props.history)} data-dismiss='modal'>Agregar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}
export default Add_categoria;