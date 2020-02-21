import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import './../css/add_item.css';


const Add_item = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id="additem" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-light">
                        <h5 className="modal-title">Formulario creacion nuevo Item</h5>
                        <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <button type="reset" value="Reset" className="btn btn-dark float-right">Limpiar</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label for="formGroupExampleInput">Nombre</label>
                                    <input type="text" className="form-control" name="nombre" value={store.nombre}
                                        onChange={e => actions.handleChange(e)} />
                                </div>
                                <div className="col-1"></div>
                                <div className="col-3">
                                    <label for="formGroupExampleInput">Precio</label>
                                    <input type="text" className="form-control" name="precio" value={store.precio}
                                        onChange={e => actions.handleChange(e)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-7">
                                    <select name="category_id" onChange={e => actions.handleChange(e)}>
                                        <option>Seleccione Categoria</option>
                                        {store.all_categories.length > 0 &&
                                            store.all_categories.map((item, i) => {
                                                return (
                                                    <option key={i} value={item.id}>
                                                        {item.description}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>
                                <div className=" col-5">
                                <label for="formGroupExampleInput">Descripcion</label>
                                    <textarea rows="10" cols="20" value={store.descripcion} name="descripcion" onChange={e => actions.handleChange(e)}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                        <button data-dismiss='modal' to="/productos" type="submit" className="btn btn-dark">Cancelar</button>
                        <button type="submit" onClick={() => actions.addItem()} data-dismiss='modal' className="btn btn-dark">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Add_item;