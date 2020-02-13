import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../store/appContext';
import $ from 'jquery';
import Add_categoria from './add_categoria';
import Add_item from './add_item';
import ModalEliminar from '../components/modalEliminar';
import Modificar_item from '../components/modal_modificar_item';
import { Link } from 'react-router-dom';

const Productos = (props) => {

    const { store } = useContext(Context);

    const [itemActual, setItemActual] = useState(null);

    useEffect(() => {
        if(store.isAuthenticated === false){
            props.history.push("/")
        }
        else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false)){
            props.history.push("/garzon_home")
        }
    })

    function showModalPedido() {
        $('#addcategory').modal('show');
    }

    function showModalItem() {
        $('#additem').modal('show');
    }

    function modifyItem(item) {
        setItemActual(() => item);
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
                                store.all_items.map((item, i) => {

                                    return (
                                        <>
                                            <tr key={i}>
                                                <td scope="row">{items.id}</td>
                                                <td>{items.category_descripcion}</td>
                                                <td>{items.nombre}</td>
                                                <td>{items.descripcion}</td>
                                                <td>{Math.round(items.precio)}</td>
                                                <td>
                                                    <button className="btn btn-primary" data-toggle="modal" onClick={() => modifyItem(item)}>Modificar</button>
                                                </td>
                                                <td><i className="fa fa-trash-alt" data-toggle="modal" data-target={"#staticBackdrop" + item.id}></i>
                                                    <ModalEliminar items={item} />
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <Modificar_item item={itemActual} />
                </div>
            </div>
            <Add_categoria />
            <Add_item />
        </>
    )
}
export default Productos;