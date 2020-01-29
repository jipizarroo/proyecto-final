import React from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';



export default class Admi_Usuario extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        return (
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-12">

                                                <Link className="navbar-brand" to="/admin_dashboard/users/register">
                                                    <button type="submit" value="agregar" class="btn btn-primary">Agregar
                                            </button>
                                                </Link>

                                            </div>
                                        </div>

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
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button type="submit" class="btn btn-primary" >
                                                    Modificar </button>
                                                <br />
                                                <br />
                                                <button type="submit" class="btn btn-primary" >
                                                    Modificar </button>
                                                <br />
                                                <br />
                                                <button type="submit" class="btn btn-primary" >
                                                    Modificar </button>
                                                <br />
                                                <br />
                                                <button type="submit" class="btn btn-primary" >
                                                    Modificar </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )
                    }
                }
            </Context.Consumer>
        )
    }
}


