import React, { useContext } from 'react';
import { Context } from '../../store/appContext';


const Modal_mod_mesa = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id={"mod_mesa" + props.items.id} tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Formulario registro de usuario.</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-8">
                                    <label htmlFor="name">Nombre Plaza: {props.items.nombre_mesa}</label>
                                    <input type="name" name="nombre_mesa" className="form-control" id="name_form" onChange={e => actions.handleChange(e)} />
                                </div>
                                <div className="col-4">
                                    <button type="reset" value="Reset" className="float-right btn btn-primary">Limpiar</button>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary" onClick={() => actions.putMesa(props.items.id)} data-dismiss="modal">Modificar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal_mod_mesa;