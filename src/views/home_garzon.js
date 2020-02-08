import React from 'react';
import '../css/home.css';
import $ from 'jquery';
import { Context } from '../store/appContext';

export default class Home_garzon extends React.Component {

    showModalPedido() {
        $('#modalReserva').modal('show');
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {

                        return (
                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <select name="plaza_id" onChange={e => actions.filtrarMesas(e.target.value)} >
                                                <option value="">Seleccionar Plaza</option>
                                                {store.all_plazas.length > 0 &&
                                                    store.all_plazas.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item.id}>
                                                                {item.nombre_plaza}
                                                            </option>
                                                        )
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                <div className="row">
                                {
                                    store.all_mesas.length > 0 &&
                                    store.all_mesas.map((items, i) => {
                                        return (
                                                    <div className="col-2 border border-dark mt-5 ml-1" key={i} >
                                                        <div className="table1"><i id="icono_utensils" className="fas fa-utensils fa-3x"></i></div>
                                                        <p>{items.nombre_mesa}</p>
                                                    </div>
                                        )
                                    })
                                }
                                </div>
                                </div>
                            </>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}
