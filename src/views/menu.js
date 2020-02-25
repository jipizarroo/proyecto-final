import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../store/appContext';
import Agregar_menu from '../components/modal_menu_categoria';
import $ from 'jquery';
import './../css/menu.css';


const Menu = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if(store.isAuthenticated === false){
            props.history.push("/")
        }
    })
    const [categoryDesc, setCategoryDesc] = useState("")
    const [categoryItems, setCategoryItems] = useState([])
    const [pedidos, setPedidos] = useState([])
    const [total, setTotal] = useState(0)



    function showModalPedido(item) {
        setCategoryItems(() => store.all_items.filter(i => i.category_id == item.id));
        setCategoryDesc(() => item.description);

        $('#menu_add').modal('show');
    }

    function updateTotal() {

        if (pedidos.length > 0) {
            for (let i = 0; i < categoryItems.length; i++) {
                let tmp = categoryItems[i];
                let j;
                for (j = 0; j < pedidos.length; j++) {
                    let final = pedidos[j];
                    if (final.id == tmp.id) {
                        final.cantidad = tmp.cantidad;
                        break;
                    }
                }
                if (j == pedidos.length && tmp.cantidad > 0)
                    pedidos.push(tmp);
            }
        }
        else
            setPedidos(() => categoryItems.filter(i => i.cantidad > 0));

        let suma = 0;

        pedidos.forEach(i => {
            if (parseInt(i.cantidad) > 0) {
                suma += parseInt(i.cantidad) * parseInt(i.precio);
            }
        });

        setTotal(() => suma);
    }

    let productos = [];
    pedidos.forEach(p => {
        if (p.cantidad > 0) {
            let producto = {
                "id_producto": p.id,
                "nombre": p.nombre,
                "cantidad": p.cantidad
            }
            productos.push(producto);
        }
    });

    async function imprimir() {
        let request = {
            "id_mesa": 1,
            "productos": productos
        };
        await actions.addPedido(request);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        {store.all_categories.length > 0 &&
                            store.all_categories.map((item, i) => {
                                return (
                                    <div className="col-md-6" key={i}>
                                        <div className="card" onClick={() => showModalPedido(item)}>
                                            <div className="card-body">
                                                <h5 className="text-center">{item.description}</h5>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="col-md-8" id="paper">
                    <table className="table table-dark table-striped table-bordered" >
                        <thead>
                            <tr>
                                <td>Cantidad</td>
                                <td>Descripcion Producto</td>
                                <td>Precio</td>
                                <td>SubTotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidos.map((item, i) => {
                                    if (item.cantidad != undefined && item.cantidad != 0) {
                                        return (
                                            <tr key={i}>
                                                <td scope="row">{item.cantidad}</td>
                                                <td>{item.nombre}</td>
                                                <td>{item.precio}</td>
                                                <td>{Math.round(item.cantidad * item.precio)}</td>
                                                <td><i className="fa fa-trash-alt" data-toggle="modal" data-target={"#staticBackdrop" + item.id}></i></td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    <div className="total-cuenta">
                        <Link to="/resumen" type="submit" className="btn btn-primary float-center" onClick={imprimir}>Imprimir</Link>
                        <input readOnly className="float-right" placeholder="monto final" value={total} />
                        <label className="float-right pr-3 pt-1">TOTAL</label>
                    </div>
                </div>
                <div className="col-md-12">
                    <Link className="navbar-brand" to="/garzon_home"> <button type="sumbit" className="btn btn-primary">
                        Regresar
                        </button>
                    </Link>
                </div>
                <Agregar_menu description={categoryDesc} items={categoryItems} setCategoryItems={setCategoryItems} updateTotalParent={updateTotal} />
            </div>
        </div>
    )
}

export default Menu;