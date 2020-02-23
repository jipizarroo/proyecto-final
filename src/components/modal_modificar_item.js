import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import './../css/add_item.css';


const Modificar_item = (props) => {
    const { store, actions } = useContext(Context);


    async function modifyItem() {
        if (props.item != null) {
            await actions.modifyItem(getChanges());
        }

        clearForm();
    }

    function clearForm() {
        document.getElementById("nombre_id").value = "";
        document.getElementById("precio_id").value = "";
        document.getElementById("category_id").value = 0;
        document.getElementById("descripcion_id").value = "";
    }

    function getChanges() {
        let nombre = document.getElementById("nombre_id").value.trim();
        let final_name = (nombre.length > 0) ? nombre : props.item.nombre;

        let precio = document.getElementById("precio_id").value;
        let final_precio = (precio > 0) ? precio : props.item.precio;

        let category = document.getElementById("category_id").value;
        let final_category = (category > 0) ? category : props.item.category_id;

        let descripcion = document.getElementById("descripcion_id").value;
        let final_descripcion = (descripcion.length > 0) ? descripcion : props.item.descripcion;


        return {
            nombre: final_name,
            precio: final_precio,
            descripcion: final_descripcion,
            category_id: final_category,
            id: props.item.id
        }
    }

    return (
        <div className="modal fade" id={"moditem"} tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-light">
                        <h5 className="modal-title">Formulario modificar Item {props.item != null ? props.item.nombre : ""}</h5>
                        <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <button type="reset" value="Reset" className=" float-right btn btn-dark">Limpiar</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label for="formGroupExampleInput">Nombre</label>
                                    <input id="nombre_id" type="text" className="form-control" placeholder={props.item != null ? props.item.nombre : ""} />
                                </div>
                                <div className="col-3">
                                    <label for="formGroupExampleInput">Precio</label>
                                    <input id="precio_id" type="text" className="form-control" placeholder={props.item != null ? props.item.precio : ""} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <select name="category_id" id="category_id">
                                        <option value="0" disabled selected>Seleccione Categoria</option>
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
                                <div className="form-group col-3">
                                    <label for="formGroupExampleInput">Descripcion</label>
                                    <textarea id="descripcion_id" rows="10" cols="30" placeholder={props.item != null ? props.item.descripcion : ""} name="descripcion"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                            <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={clearForm}>Cancelar</button>
                            <button type="submit" className="btn btn-dark" onClick={modifyItem} data-dismiss="modal">Modificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modificar_item;