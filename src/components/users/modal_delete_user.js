import React from 'react';
import { Context } from '../../store/appContext';

export default class Mod_delete_user extends React.Component {


    render() {
        return(
            <Context.Consumer>
                {
                    ({store, actions}) =>{
                        return(
                            <div className="modal fade" id="modal_delete_user" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header bg-secondary text-light">
                                    <h5 className="modal-title" id="exampleModalLabel">Eliminacion de Usuario:</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="alert alert-danger" role="alert">
                                            ¿Esta seguro que desea eliminar al usuario: {this.props.name} {this.props.last_name}?
                                            Toda la informacion del usuario se vera eliminada si clickea Eliminar.
                                        </div>
                                    </div>
                                    <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                                    <button type="submit" className="btn btn-dark" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-dark" data-dismiss="modal" onClick={() => actions.deleteUser(this.props.id)}>Eliminar</button>

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