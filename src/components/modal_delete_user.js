import React from 'react';
import { Context } from '../store/appContext';

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
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Eliminacion de Usuario:</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                        <h2>¿Esta seguro que desea eliminar el suario: {this.props.name} {this.props.last_name}? </h2>
                                        <h3>Toda la informacion del usuario se vera eliminada si clickea Eliminar.</h3>
                                    <button type="submit" className="btn btn-primary float-right" data-dismiss="modal" onClick={() => actions.deleteUser(this.props.id)}>Eliminar</button>
                                    <button type="submit" className="btn btn-primary float-right mr-5" data-dismiss="modal">Cancelar</button>
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