import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../store/appContext';
import $ from 'jquery';
import Add_categoria from './add_categoria';
import Add_item from './add_item';
import ModalEliminar from '../components/modalEliminar';
import Modificar_item from '../components/modal_modificar_item';
import { Link } from 'react-router-dom';
import '../css/productos.css';

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
                <div className="row mt-5 mb-5">
                    <div className="col-12 d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" onClick={() => { showModalPedido() }}>Agregar Categoria</button>
                        <button type="button" className="btn btn-dark" onClick={() => { showModalItem() }}>Agregar Item</button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                    <table className="table table-striped table-dark" id="productos_table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Categoria</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.all_items.length > 0 &&
                                store.all_items.map((item, i) => {
                                    
                                    return (
                                        
                                            <tr key={i}>
                                                <td scope="row">{item.id}</td>
                                                <td>{item.category_descripcion}</td>
                                                <td>{item.nombre}</td>
                                                <td>{item.descripcion}</td>
                                                <td>{Math.round(item.precio)}</td>
                                                <td>
                                                    <button className="btn btn-dark btn-block border-white" data-toggle="modal" onClick={() => modifyItem(item)}>Modificar</button>
                                                </td>
                                                <td><button className="btn btn-danger btn-block" data-toggle="modal" data-target={"#staticBackdrop" + item.id}><i className="fas fa-trash-alt"></i></button>
                                                <ModalEliminar items={item} /></td>    
                                            </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    <Modificar_item item={itemActual} />
                </div>
                <Link to="/admin_home" className="float-right"><button type="button" className="btn btn-primary">Regresar</button></Link>
            </div>
            <Add_categoria />
            <Add_item />
        </>
    )
}
export default Productos;