import React, { useContext } from 'react'
import { Context } from './../store/appContext';


const Resumen = () => {

    const { store } = useContext(Context);

    return (
        <div className="container mt-5">
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
                <div className="col-md-9"></div>
                        <div className="col-md-3 border">
                            {store.resumen_pedido == null ? 0 : store.resumen_pedido.total}
                        </div>
            </div>
        </div>
    )
}
export default Resumen;