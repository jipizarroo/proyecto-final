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
                                                        <th>Tipo de Usurio</th>
                                                        <th>UserName</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            store.all_users.length  > 0 &&
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


