import React, { useContext } from 'react';
import {Context} from './../store/appContext';

const ModalEliminar = props => {
    const {actions} = useContext(Context);
    return (

        <div className="container">
            <div className="modal fade" id={"staticBackdrop"+props.items.id} tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Desea Eliminar Producto?</h5>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mimodal">
                            <label>{props.items.nombre}</label>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-dismiss="modal" className="btn btn-primary">Cancelar</button>
                            <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={() => actions.delItem(props.items.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )

}
export default ModalEliminar;