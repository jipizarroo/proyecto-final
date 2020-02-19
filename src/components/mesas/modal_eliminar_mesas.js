import React, { useContext } from 'react';
import { Context } from '../../store/appContext';


const Modal_eliminar_mesa = props => {
    const { actions } = useContext(Context);

    return (
        <div className="modal fade" id={"delete_mesa" + props.items.id} tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Eliminacion de Mesa:</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <h3>¿Esta seguro que desea eliminar la mesa: {props.items.nombre_mesa}? </h3>
                        <h4>Toda la informacion de la mesa se vera eliminada si clickea Eliminar.</h4>
                        <button type="submit" className="btn btn-primary float-right mr-5" onClick={() => actions.delMesa(props.items.id)} data-dismiss="modal">Eliminar</button>
                        <button type="submit" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Modal_eliminar_mesa;