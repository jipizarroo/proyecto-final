import React from 'react';
import { Context } from '../store/appContext';
import { Redirect } from 'react-router-dom';

class Add_categoria extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        if (store.isAuthenticated === false) {
                            return <Redirect to="/" />
                        } else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                            return <Redirect to="/garzon_home" />
                        return (
                            <div className="modal fade" id="addcategory" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header bg-secondary text-light">
                                            <h5 className="modal-title">Nueva Categoria</h5>
                                            <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label for="formGroupExampleInput">Nombre</label>
                                                        <input type="text" name="description" className="form-control" value={store.description} onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                                            <button type="button" className="btn btn-dark" data-dismiss='modal'>Cancelar</button>
                                            <button type="button" className="btn btn-dark" onClick={() => actions.addCategory(this.props.history)} data-dismiss='modal'>Agregar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
        )
    }
}
            </Context.Consumer >
        )
    }
}
export default Add_categoria;