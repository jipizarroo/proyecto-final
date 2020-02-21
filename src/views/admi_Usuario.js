import React from 'react';
import { Context } from './../store/appContext';
import Register from '../components/users/modal_register';
import Mod_user from '../components/users/modal_mod_users';
import Mod_delete_user from '../components/users/modal_delete_user';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import '../css/admi_Usuario.css';

export default class Admi_Usuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEdit: {}
        }
    }
    showModalregister() {
        $('#modalregister').modal('show');
    }
    showModal_mod_register(item) {
        this.setState({
            userEdit: item
        })
        $('#modal_mod_user').modal('show');
    }
    showModal_delete_register(item) {
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
                        if (store.isAuthenticated === false) {
                            return <Redirect to="/" />
                        } else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                            return <Redirect to="/garzon_home" />
                        return (
                            <>
                                <Register />
                                <Mod_user {...this.state.userEdit} />
                                <Mod_delete_user {...this.state.userEdit} />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 mb-5 mt-5">
                                                    <button className="btn btn-primary" onClick={this.showModalregister.bind()}>Agregar Usuario</button>
                                        </div>
                                    </div>
                                        <div className="row d-flex justify-content-center mb-5">
                                            <div className="col-10 ">
                                                <table className="table table-bordered" id="usuarios">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Nombre</th>
                                                            <th>Apellido</th>
                                                            <th>Email</th>
                                                            <th>Activo</th>
                                                            <th>Admin</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            store.all_users.length > 0 &&
                                                            store.all_users.map((items, i) => {
                                                                return (
                                                                    <tr key={i}>
                                                                        <th scope="row">{items.id}</th>
                                                                        <td>{items.name}</td>
                                                                        <td>{items.last_name}</td>
                                                                        <td>{items.email}</td>
                                                                        <td><input className="ml-4" type="checkbox" disable="disable" checked={items.isActive} /></td>
                                                                        <td><input className="ml-4" type="checkbox" disable="disable" checked={items.isAdmin} /></td>
                                                                        <td><button className="btn btn-dark btn-block" onClick={this.showModal_mod_register.bind(this, items)}>Modificar</button></td>
                                                                        <td><button className="btn btn-danger btn-block" onClick={this.showModal_delete_register.bind(this, items)}><i className="fas fa-trash-alt"></i> </button></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <Link className="btn btn-primary float-right" to="/admin_home">Regresar </Link>
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