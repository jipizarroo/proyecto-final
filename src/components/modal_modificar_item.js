import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import './../css/add_item.css';


const Modificar_item = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id={"moditem"} tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="container mt-5">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                                <span className="navbar-brand">Modificar Item {props.item != null? props.item.nombre : ""}</span>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="formGroupExampleInput">Nombre</label>
                                        <input type="text" className="form-control" placeholder={props.item != null? props.item.nombre : ""} onChange={e => actions.handleChange(e)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label for="formGroupExampleInput">Precio</label>
                                        <input type="text" className="form-control" placeholder={props.item != null? props.item.precio : ""} onChange={e => actions.handleChange(e)} />
                                    </div>
                                </div>
                            </form>
                            <div className="row pt-5">
                                <div className="col-md-5">
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
                                <div className="col-md-3">
                                    <label for="formGroupExampleInput">Descripcion</label>
                                    <textarea rows="10" cols="30" placeholder={props.item != null? props.item.descripcion : ""} name="descripcion" onChange={e => actions.handleChange(e)}></textarea>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-dark">Limpiar</button>
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn btn-success mr-3" onClick={() => actions.modifyItem(props.item.id)} data-dismiss="modal">Modificar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modificar_item;