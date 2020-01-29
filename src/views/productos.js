import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import {Link} from 'react-router-dom';

const Productos = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col md-3"></div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info">Agregar Sub_Categ</button>
                    </div>
                    <div className="col md-2">
                        <button type="button" className="btn btn-info  ml-4">Agregar Item</button>
                    </div>

                    <div className="col-md-3"></div>
                </div>
                <div className="row mt-2">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th className="columna1" scope="col">ID</th>
                                <th className="columna2" scope="col">Nombre</th>
                                <th className="columna3" scope="col">Descripcion</th>
                                <th className="columna4" scope="col">Precio</th>
                                <th className="columna4" scope="col" colSpan="2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.productos.length > 0 &&
                                store.productos.map((producto, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{producto.id}</th>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.descripcion}</td>
                                            <td>{producto.precio}</td>
                                            <td><Link to={"/productos/"+producto.id+"/edit"} className="btn btn-info">Editar</Link></td>
                                            <td><Link to={"/productos/"+producto.id+"/delete"}  className="btn btn-danger">Eliminar</Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Productos;