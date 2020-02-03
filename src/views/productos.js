import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import $ from 'jquery';
import Add_categoria from './add_categoria'
import Add_item from './add_item'
import ModalEliminar from '../components/modalEliminar';

const Productos = () => {

    const { store, actions } = useContext(Context);

    function showModalPedido() {
        $('#addcategory').modal('show');
    }
    function showModalItem() {
        $('#additem').modal('show');
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col md-3"></div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info" onClick={() => { showModalPedido() }}>Agregar Categoria</button>
                    </div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info ml-4" onClick={() => { showModalItem() }}>Agregar Item</button>
                    </div>

                    <div className="col-md-3"></div>
                </div>
                <div className="row mt-2">
                    <table className="table table-bordered" id="table">
                        <thead>
                            <tr>
                                <th className="columna1" scope="col">ID</th>
                                <th className="columna2" scope="col">Categoria</th>
                                <th className="columna3" scope="col">Nombre</th>
                                <th className="columna4" scope="col">Descripcion</th>
                                <th className="columna5" scope="col">Precio</th>
                                <th className="columna6" scope="col" colSpan="2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.all_items.length > 0 &&
                                store.all_items.map((items, i) => {
                                    return (
                                        <>
                                            <tr key={i}>
                                                <td scope="row">{items.id}</td>
                                                <td>{items.category.description}</td>
                                                <td>{items.nombre}</td>
                                                <td>{items.descripcion}</td>
                                                <td>{items.precio}</td>
                                                <td className="btn btn-primary" onClick={showModalItem}>Modificar</td>
                                                <td><i className="fa fa-trash-alt" data-toggle="modal" data-target={"#staticBackdrop"+items.id}></i>
                                                <ModalEliminar items={items} />
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Add_categoria />
            <Add_item />
        </>
    )
}
export default Productos;