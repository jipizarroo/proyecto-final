import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import $ from 'jquery';
import Add_categoria from './add_categoria';
import Add_item from './add_item';
import ModalEliminar from '../components/modalEliminar';
import Modificar_item from '../components/modal_modificar_item';
import { Link } from 'react-router-dom';

const Productos = () => {

    const { store } = useContext(Context);

    function showModalPedido() {
        $('#addcategory').modal('show');
    }
    function showModalItem() {
        $('#additem').modal('show');
    }

    function showModalmodItem() {
        $('#moditem').modal('show');
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col md-3">
                        <button type="button" className="btn btn-info" onClick={() => { showModalPedido() }}>Agregar Categoria</button>
                    </div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info ml-4" onClick={() => { showModalItem() }}>Agregar Item</button>
                    </div>
                    <div className="col md-2">
                        <Link to="/admin_home"><button type="button" className="btn btn-primary">Regresar</button></Link>
                    </div>
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
                                                <td className="btn btn-primary" onClick={showModalmodItem}>Modificar</td>
                                                <td><i className="fa fa-trash-alt" data-toggle="modal" data-target={"#staticBackdrop" + items.id}></i>
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
            <Modificar_item />
        </>
    )
}
export default Productos;