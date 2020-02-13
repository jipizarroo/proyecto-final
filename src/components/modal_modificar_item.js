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
                    <div className="modal-header">
                        <div className="container mt-5">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                                <span className="navbar-brand">Modificar Item {props.item != null ? props.item.nombre : ""}</span>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="formGroupExampleInput">Nombre</label>
                                        <input id="nombre_id" type="text" className="form-control" placeholder={props.item != null ? props.item.nombre : ""} />
                                    </div>
                                    <div className="col-md-3">
                                        <label for="formGroupExampleInput">Precio</label>
                                        <input id="precio_id" type="text" className="form-control" placeholder={props.item != null ? props.item.precio : ""} />
                                    </div>
                                </div>
                            </form>
                            <div className="row pt-5">
                                <div className="col-md-5">
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
                                <div className="col-md-3">
                                    <label for="formGroupExampleInput">Descripcion</label>
                                    <textarea id="descripcion_id" rows="10" cols="30" placeholder={props.item != null ? props.item.descripcion : ""} name="descripcion"></textarea>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-dark">Limpiar</button>
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearForm}>Cancelar</button>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn btn-success mr-3" onClick={modifyItem} data-dismiss="modal">Modificar</button>
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