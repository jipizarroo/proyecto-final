import React, { useContext } from 'react';
import { Context } from '../../store/appContext';


const Modal_add_plaza = () => {
    const { actions } = useContext(Context);

    return (
        <div className="modal fade" id="add_plaza" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Formulario creacion de Plaza.</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <label htmlFor="name">Nombre de la plaza</label>
                                    <input type="name" name="nombre_plaza" className="form-control" id="name_form" onChange={e => actions.handleChange(e)} />
                                    <h5>El nombre de la plaza es importante para el nombre de las mesas</h5>
                                    <h5>Ej: Nombre plaza: AB </h5>
                                    <h5>Las mesas empezaran con el nombre AB: AB1</h5>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary" data-dismiss="modal" >Cancelar</button>
                                <button type="submit" className="btn btn-primary"  data-dismiss="modal"onClick={() => actions.postPlazas() }>Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal_add_plaza;