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
                                    <div className="row d-flex justify-content-center mt-2 mb-2">
                                        <div className="col-4">
                                            {store.createUser_Error === null ? "" :

                                                (<div className="alert alert-danger d-flex justify-content-center" role="alert">
                                                    <p>Error al crear nuevo usuario. <br/>
                                                    Razón: {store.createUser_Error.msg}. <br/>
                                                    Intente nuevamente por favor.
                                                    </p>
                                                </div>)

                                            }
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center mb-5">
                                        <div className="col-10 ">
                                            <table className="table table-striped table-dark" id="usuarios">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">ID</th>
                                                        <th className="text-center">Nombre</th>
                                                        <th className="text-center">Apellido</th>
                                                        <th className="text-center">Email</th>
                                                        <th className="text-center">Activo</th>
                                                        <th className="text-center">Admin</th>
                                                        <th colSpan="2" className="text-center border-0">Acciones</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        store.all_users.length > 0 &&
                                                        store.all_users.map((items, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <th scope="row" className="text-center">{items.id}</th>
                                                                    <td className="text-center">{items.name}</td>
                                                                    <td className="text-center">{items.last_name}</td>
                                                                    <td className="text-center">{items.email}</td>
                                                                    <td><input className="ml-4" type="checkbox" disable="disable" checked={items.isActive} /></td>
                                                                    <td><input className="ml-4" type="checkbox" disable="disable" checked={items.isAdmin} /></td>
                                                                    <td className="border-0"><button className="btn btn-dark btn-block border-white" onClick={this.showModal_mod_register.bind(this, items)}>Modificar</button></td>
                                                                    <td className="border-0"><button className="btn btn-danger btn-block" onClick={this.showModal_delete_register.bind(this, items)}><i className="fas fa-trash-alt"></i> </button></td>
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