import React, { useContext } from 'react';
import { Context } from '../../store/appContext';


const Modal_add_plaza = () => {
    const { actions } = useContext(Context);

    return (
        <div className="modal fade" id="add_plaza" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-light">
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
                                    <div className="alert alert-secondary mt-5" role="alert">
                                        <p>El nombre de la plaza es importante para el nombre de las mesas 
                                            <br/>Ej: Nombre plaza: AB <br/>Las mesas empezaran con el nombre AB: AB1
                                        </p>                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                                <button type="submit" className="btn btn-dark" data-dismiss="modal" >Cancelar</button>
                                <button type="submit" className="btn btn-dark" data-dismiss="modal" onClick={() => actions.postPlazas()}>Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal_add_plaza;