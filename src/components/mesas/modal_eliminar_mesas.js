import React, { useContext } from 'react';
import { Context } from '../../store/appContext';


const Modal_eliminar_mesa = props => {
    const { actions } = useContext(Context);

    return (
        <div className="modal fade" id={"delete_mesa" + props.items.id} tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-light">
                        <h5 className="modal-title" id="exampleModalLabel">Eliminacion de Mesa:</h5>
                        <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="alert alert-danger" role="alert">
                        ¿Esta seguro que desea eliminar la mesa: {props.items.nombre_mesa}?
                        Toda la informacion de la mesa se vera eliminada si clickea Eliminar.
                        </div>
                    </div>
                    <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                        <button type="submit" className="btn btn-dark" onClick={() => actions.delMesa(props.items.id)} data-dismiss="modal">Eliminar</button>
                        <button type="submit" className="btn btn-dark" data-dismiss="modal">Cancelar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Modal_eliminar_mesa;