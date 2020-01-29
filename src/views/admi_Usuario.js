import React from 'react';
import { Context } from './../store/appContext';
import Register from './register';
import { Link } from 'react-router-dom';
import $ from 'jquery';


export default class Admi_Usuario extends React.Component {

    showModalregister() {
        $('#modalregister').modal('show');
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        return (
                            <>
                                <div>{<Register />}</div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-primary" onClick={this.showModalregister.bind()}>Agregar</button>
                                                </div>
                                            </div>
                                        </div>
<<<<<<< HEAD

                                    </div>


                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <table className="table table-bordered">

                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nombre</th>
                                                        <th>Apellido</th>
                                                        <th>Email</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            store.all_users.length  > 0 &&
                                                            store.all_users.map((items, i) => {
                                                                return (
                                                                    <>
                                                                    <th key={i}>{items.id}</th>
                                                                    <th key={i}>{items.name}</th>
                                                                    <th key={i}>{items.last_name}</th>
                                                                    <th key={i}>{items.email}</th>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                </table>
=======
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <table className="table table-bordered">
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Nombre</th>
                                                            <th>Tipo de Usurio</th>
                                                            <th>UserName</th>
                                                        </tr>
                                                        <tr>
                                                            {
                                                                store.all_users.length > 0 &&
                                                                store.all_users.map((item, i) => {
                                                                    return (
                                                                        <>
                                                                            <th key={i}>item.id</th>
                                                                            <th key={i}>item.name</th>
                                                                            <th key={i}>item.last_name</th>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    </table>
                                                </div>
>>>>>>> af1748d233dad9005884621736be7d582b97a1db
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary" >Modificar </button>
                                                    <br />
                                                    <br />
                                                    <button type="submit" className="btn btn-primary" >Modificar </button>
                                                    <br />
                                                    <br />
                                                    <button type="submit" className="btn btn-primary" >Modificar </button>
                                                    <br />
                                                    <br />
                                                    <Link className="btn btn-primary" to="/admin_dashboard">Regresar </Link>
                                                </div>
                                            </div>
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


