import React from 'react';
import { Context } from '../../store/appContext';
import '../../css/register.css';


export default class Register extends React.Component {


    render() {
        //const {store, actions} = useContext(Context);
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="modal fade" id="modalregister" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Formulario registro de usuario.</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-4">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="name" name="name" className="form-control" id="name_form" onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                    <div className="col-4">
                                                        <label htmlFor="last_name">Last name</label>
                                                        <input type="last_name" name="last_name" className="d-inline form-control" id="last_name_form" onChange={e => actions.handleChange(e)} />

                                                    </div>
                                                    <div className="col-4">
                                                        <button type="reset" value="Reset" className="float-right btn btn-primary">Limpiar</button>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-6">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" name="email" className="form-control" id="email_form" onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                    <div className="col-6">
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-6">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" name="password" className="form-control" id="password_form" onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                        <div className="col-4">
                                                            <button type="submit" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                                                        </div>
                                                        <div className="col-4">
                                                            <button type="submit" className="btn btn-primary" onClick={() => actions.createUser(this.props.history)} data-dismiss="modal">Agregar</button>
                                                        </div>
                                                </div>
                                            </form>
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