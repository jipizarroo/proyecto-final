import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const Modal_add_mesa = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id="add_mesa" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                    <label htmlFor="name">Nombre Plaza</label>
                                    <input type="name" name="name" className="form-control" id="name_form" onChange={e => actions.handleChange(e)} />
                                </div>
                                <div className="col-4">
                                    <button type="reset" value="Reset" className="float-right btn btn-primary">Limpiar</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-8">
                                    <select name="plaza_id" onChange={e => actions.handleChange(e)} >
                                        <option>Seleccionar Plaza</option>
                                        {store.all_plazas.length > 0 &&
                                            store.all_plazas.map((item, i) => {
                                                return (
                                                    <option key={i} value={item.id}>
                                                        {item.nombre_plaza}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary" onClick={() => actions.createUser(this.props.history)} data-dismiss="modal">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal_add_mesa;