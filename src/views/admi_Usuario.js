import React from 'react';
import { Context } from './../store/appContext';
import Register from '../components/modal_register';
import Mod_user from '../components/modal_mod_users';
import Mod_delete_user from '../components/modal_delete_user';
import { Link } from 'react-router-dom';
import $ from 'jquery';


export default class Admi_Usuario extends React.Component {

    constructor(){
        super();
        this.state = {
            userEdit: {}
        }
    }
    showModalregister() {
        $('#modalregister').modal('show');
    }
    showModal_mod_register(item){
        this.setState({
            userEdit: item
        })
        $('#modal_mod_user').modal('show');
    }
    showModal_delete_register(item){
        this.setState({
            userEdit: item
        })
        $('#modal_delete_user').modal('show');
    }


    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        return (
                            <>
                                <Register />
                                <Mod_user {...this.state.userEdit}/>
                                <Mod_delete_user {...this.state.userEdit}/>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-primary" onClick={this.showModalregister.bind()}>Agregar</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Nombre</th>
                                                            <th>Apellido</th>
                                                            <th>Email</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            store.all_users.length > 0 &&
                                                            store.all_users.map((items, i) => {
                                                                return (
                                                                        <tr key={i}>
                                                                            <td scope="row">{items.id}</td>
                                                                            <td>{items.name}</td>
                                                                            <td>{items.last_name}</td>
                                                                            <td>{items.email}</td>
                                                                            <td className="btn btn-primary" onClick={this.showModal_mod_register.bind(this, items)}>Modificar</td>
                                                                            <td onClick={this.showModal_delete_register.bind(this, items)}><i className="fas fa-trash-alt"></i></td>
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