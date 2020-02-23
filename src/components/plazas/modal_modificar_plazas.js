import React, { useContext } from 'react';
import { Context } from '../../store/appContext';


const Modal_modificar_plaza = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id="mod_mesa" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-light">
                        <h5 className="modal-title" id="exampleModalLabel">Formulario modificacion de plaza.</h5>
                        <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
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
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label htmlFor="name">Modificar nombre a: </label>
                                    <input type="name" name="nombre_plaza" className="form-control" id="name_form" onChange={e => actions.handleChange(e)} />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                        <button type="submit" className="btn btn-dark" data-dismiss="modal">Cancelar</button>
                        <button type="submit" className="btn btn-dark" onClick={() => actions.putPlaza(store.plaza_id)} data-dismiss="modal">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal_modificar_plaza;