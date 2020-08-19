import React, { useContext } from 'react';
import { Context } from './../store/appContext';

const ModalEliminar = props => {
    const { actions } = useContext(Context);
    return (
            <div className="modal fade" id={"staticBackdrop"+props.items.id} tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-light">
                            <h5 className="modal-title" id="staticBackdropLabel">Formulario eliminacion producto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label></label>
                            <div className="alert alert-danger" role="alert">
                                ¿Esta seguro que desea eliminar el producto: {props.items.nombre}?
                                Toda la informacion del producto se vera eliminada si clickea Eliminar.
                                
                            </div>
                        </div>
                        <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                            <button type="button" data-dismiss="modal" className="btn btn-dark">Cancelar</button>
                            <button type="button" data-dismiss="modal" className="btn btn-dark" onClick={() => actions.delItem(props.items.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ModalEliminar;