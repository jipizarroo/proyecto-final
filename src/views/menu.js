import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../store/appContext';
import Agregar_menu from '../components/modal_menu_categoria';
import $ from 'jquery';


const Menu = () => {
    const { store, actions } = useContext(Context);

    function showModalPedido() {
        $('#menu_add').modal('show');
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
                                        <div className="card" onClick={showModalPedido}>
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
                            <tr>
                                <td>Unidades</td>
                                <td>Descripcion Producto</td>
                                <td>Precio</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cebolla</td>
                                <td>$60.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cebolla</td>
                                <td>$60.00</td>
                            </tr>
                        </table>
                        <div className="total-cuenta">
                            <button type="submit" className="btn btn-primary float-center">Imprimir</button>
                            <input type="text" className="float-right" placeholder="monto final" />
                            <label for="" className="float-right pr-3 pt-1">TOTAL</label>
                        </div>
                </div>
                <div className="col-md-12">
                    <Link className="navbar-brand" to="/dashboard"> <button type="sumbit" className="btn btn-primary">
                        Go Back
                     </button>
                    </Link>
                </div>

                <Agregar_menu />
            </div>
        </div>
    )
}

export default Menu;