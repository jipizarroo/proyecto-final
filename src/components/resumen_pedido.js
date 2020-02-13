import React, { useContext, useEffect } from 'react'
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';


const Resumen = (props) => {

    const { store } = useContext(Context);

    useEffect(() => {
        if(store.isAuthenticated === false){
            props.history.push("/")
        }
    })       


    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-end">
                <Link to="/garzon_home" type="button" className="btn btn-info">Regresar</Link></div>
            <div className="row">
                <div className="col-md-12 border">
                    Pedido No. {store.resumen_pedido == null ? "" : store.resumen_pedido.info_pedido.id}
                </div>
            </div>
            <div className="row border">
                <div className="col-md-12">
                    Usuario: {store.resumen_pedido == null ? "" : store.resumen_pedido.info_pedido.user.name}
                </div>

                <div className="col-md-12">
                    Mesa: {store.resumen_pedido == null ? "" : store.resumen_pedido.info_pedido.id_mesa}
                </div>
                <div className="col-md-12">
                    Fecha: 17/05/2020
                    </div>
            </div>
            <div className="row border">
                <table className="table">
                    <thead>
                        <th scope="row">Items</th>
                        <td>Cantidad</td>
                        <td>Precio</td>
                        <td>Total</td>
                    </thead>
                    <tbody>
                        {
                            store.resumen_pedido != null &&
                            store.resumen_pedido.pedidos.length > 0 &&
                            store.resumen_pedido.pedidos.map((item, i) => {
                                return (
                                    <tr>
                                        <th scope="row">{item.item.nombre}</th>
                                        <td>{item.cantidad}</td>
                                        <td>{item.item.precio}</td>
                                        <td>{item.item.precio * item.cantidad}</td>
                                    </tr>
                                );
                            })}

                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-2 d-flex justify-content-end">A pagar:</div>
                <div className="col-md-3 border">
                    {store.resumen_pedido == null ? 0 : store.resumen_pedido.total}
                </div>
            </div>
        </div>
    )
}
export default Resumen;