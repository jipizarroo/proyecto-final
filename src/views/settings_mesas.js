import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Modal_add_mesa from '../components/mesas/modal_agregar_mesas';
import Modal_mod_mesa from '../components/mesas/modal_modificar_mesa';
import Modal_eliminar_mesa from '../components/mesas/modal_eliminar_mesas';
import Modal_add_plaza from '../components/plazas/modal_agregar_plazas';
import Modal_modificar_plaza from '../components/plazas/modal_modificar_plazas';

export default class Settings_mesas extends React.Component {

    constructor() {
        super();
        this.state = {
            userEdit: {},
            items: {}
        }

    }
    showModalAddMesa() {
        $('#add_mesa').modal('show');
    }

    showModalAddPlaza() {
        $('#add_plaza').modal('show');
    }

    showModalModPlaza() {
        $('#mod_mesa').modal('show');
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        return (
                            <>
                                <Modal_add_mesa />
                                <Modal_add_plaza />
                                <Modal_modificar_plaza />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row ">
                                                <div className="col-md-12 d-flex justify-content-between">
                                                    <button className="btn btn-primary" onClick={this.showModalAddMesa.bind()} >Agregar Mesas</button>
                                                    <button className="btn btn-primary" onClick={this.showModalAddPlaza.bind()}>Agregar plaza</button>
                                                    <button className="btn btn-primary" onClick={this.showModalModPlaza.bind()}>Modificar plaza</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-2">
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
                                            <div className="row">
                                            <div className="col-10">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>ID Mesa</th>
                                                            <th>Plaza</th>
                                                            <th>Nombre de Mesa</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            store.all_mesas.length > 0 &&
                                                            store.all_mesas.map((items, i) => {
                                                                return (
                                                                    <tr key={i} id="myTable">
                                                                        <td scope="row">{items.id}</td>
                                                                        <td>{items.plaza.nombre_plaza}</td>
                                                                        <td>{items.nombre_mesa}</td>
                                                                        <td><button className="btn btn-primary" data-toggle="modal" data-target={"#mod_mesa" + items.id} >Modificar </button>
                                                                            <Modal_mod_mesa items={items} /></td>
                                                                        <td><button className="fas fa-trash-alt" data-toggle="modal" data-target={"#delete_mesa" + items.id}></button>
                                                                            <Modal_eliminar_mesa items={items} /></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <Link className="btn btn-primary float-right" to="/admin_dashboard">Regresar </Link>
                                        </div>
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