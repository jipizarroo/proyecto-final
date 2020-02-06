import React from 'react';
import { Context } from '../store/appContext';
import { Link } from  'react-router-dom';
import $ from 'jquery';
import Modal_add_mesa from '../components/modal_agregar_mesas';
import Modal_mod_mesa from '../components/modal_modificar_mesa';


export default class Settings_mesas extends React.Component {

    constructor(){
        super();
        this.state = {
            userEdit: {}
        }

    }
    showModalAddMesa(){
        $('#add_mesa').modal('show');
    }

    showModalModMesa(item){
        this.setState({
            userEdit: item
        })
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
                                <Modal_mod_mesa {...this.state.userEdit}/>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-primary" onClick={this.showModalAddMesa.bind()} >Agregar Plaza</button>
                                                    <select name="plaza_id" onChange={e => actions.handleChange(e)} >
                                                        <option>Seleccionar Plaza</option>
                                                        {store.all_plazas.length > 0 &&
                                                        store.all_plazas.map((item, i ) => {
                                                            return(
                                                                <option key={i} value={item.id}>
                                                                    {item.nombre_plaza}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                                                                return(
                                                                    <tr key={i}>
                                                                        <td scope="row">{items.id}</td>
                                                                        <td>{items.plaza.nombre_plaza}</td>
                                                                        <td>{items.nombre_mesa}</td>
                                                                        <td className="btn btn-primary" onClick={this.showModalModMesa.bind(this, items)}>Modificar</td>
                                                                        <td><i className="fas fa-trash-alt"></i></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                
                                                    </tbody>
                                                </table>
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