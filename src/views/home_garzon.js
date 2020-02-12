import React from 'react';
import '../css/home.css';
import $ from 'jquery';
import { Context } from '../store/appContext';
import { Link, Redirect } from 'react-router-dom';

export default class Home_garzon extends React.Component {

    showModalPedido() {
        $('#modalReserva').modal('show');
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        if(store.isAuthenticated === false){
                            return <Redirect to="/" />
                        }else if((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                            return <Redirect to="/garzon_home" />
                        return (
                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <select name="plaza_id" onChange={e => actions.filtrarMesas(e.target.value)} >
                                                <option value="">Todas Las Plazas</option>
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
                                                    <Link className="col-2 border border-dark mt-5 ml-5" key={i} to={"/garzon_home/"+ items.id +"/menu"}>
                                                        <div className="table1"><i id="icono_utensils" className="fas fa-utensils fa-3x"></i></div>
                                                        <p>{items.nombre_mesa}</p>
                                                    </Link>
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
