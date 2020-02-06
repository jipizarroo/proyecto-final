import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../store/appContext';
import Agregar_menu from '../components/modal_menu_categoria';
import $ from 'jquery';


const Menu = () => {
    const { store, actions } = useContext(Context);
    const [categoryDesc, setCategoryDesc] = useState("")
    const [categoryItems, setCategoryItems] = useState([])
    const [total, setTotal] = useState(0)


    async function showModalPedido(item) {

        if (categoryItems.length == 0) {
            await actions.getCategoryItems(item.id);
            setCategoryItems(() => store.category_items);
        }

        setCategoryDesc(() => item.description);

        $('#menu_add').modal('show');
    }

    function updateTotal() {
        let suma = 0;

        categoryItems.forEach(i => {
            if(parseInt(i.cantidad) > 0) {
                suma += parseInt(i.cantidad) * parseInt(i.precio);
            }
        });

        setTotal(() => suma);
    }

    function imprimir() {
        let request = {
            "id_mesa": 1,
            "productos": categoryItems.filter(item => item.cantidad > 0)
        };
        actions.addPedido(request);
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
                                            <img src="http://placehold.it/200x100" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.description}</h5>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="col-md-8">
                    <table className="table table-bordered">
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
                                store.category_items.map((item, i) => {

                                    if (item.cantidad != undefined && item.cantidad != 0) {
                                        return (
                                            <>
                                                <tr key={i}>
                                                    <td scope="row">{item.cantidad}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.precio}</td>
                                                    <td>{item.cantidad * item.precio}</td>
                                                    <td><i className="fa fa-trash-alt" data-toggle="modal" data-target={"#staticBackdrop" + item.id}></i></td>
                                                </tr>
                                            </>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    <div className="total-cuenta">
                        <button type="submit" className="btn btn-primary float-center" onClick={imprimir}>Imprimir</button>
                        <input readOnly className="float-right" placeholder="monto final" value={total}/>
                        <label className="float-right pr-3 pt-1">TOTAL</label>
                    </div>
                </div>
                <div className="col-md-12">
                    <Link className="navbar-brand" to="/admin_home"> <button type="sumbit" className="btn btn-primary">
                        Go Back
                        </button>
                    </Link>
                </div>
                <Agregar_menu description={categoryDesc} items={categoryItems} setCategoryItems={setCategoryItems} updateTotal={updateTotal}/>
            </div>
        </div>
    )
}

export default Menu;