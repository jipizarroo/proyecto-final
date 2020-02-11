import React, { useContext } from 'react'
import { Context } from './../store/appContext';


const Resumen = () => {

    const { store } = useContext(Context);
    //console.log(store.info_pedido)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 border">
                    Pedido No.
                    </div>
            </div>
            <div className="row border">

                <div className="col-md-12">
                    Usuario: {store.info_pedido.user}
                </div>

                <div className="col-md-12">
                    Mesa:
                </div>
                <div className="col-md-12">
                    Fecha:
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
                        <tr>
                            <th scope="row">xxxxxxx</th>
                            <td>xxxxxxx</td>
                            <td>xxxxxxx</td>
                            <td>xxxxxxx</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3 border">$$$$$$$$$</div>
            </div>
        </div>
    )
}
export default Resumen;