import React, { useContext } from 'react'
import { Context } from './../store/appContext';


const Resumen = (props) => {

    const { store } = useContext(Context);
 
    //console.log(store.all_users)
    //console.log(store.all_mesas)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 border">
                    Pedido No.
                    </div>
            </div>
            <div className="row border">
                {
                    store.all_users.map((i) => {
                        console.log(i)
                        return (
                            <div className="col-md-12" key={i}>
                                Usuario: {i.name}  {i.last_name}
                            </div>
                        )
                    })
                }
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