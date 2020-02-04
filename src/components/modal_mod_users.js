import React from 'react';
import { Context } from '../store/appContext';
import './../css/register.css';


export default class Mod_user extends React.Component {


    render() {
        
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="modal fade" id="modal_mod_user" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Formulario modificacion de usuario.</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        </button>
                                        </div>
                                        <div className="modal-body">
                                                        <div className="form-row">
                                                            <div className="form-group col-4">
                                                                <label htmlFor="name">Name</label>
                                                                <input type="text" name="name" className="form-control" id="name_form" placeholder={this.props.name} onChange={e => actions.handleChange(e)} />
                                                            </div>
                                                            <div className="col-4">
                                                                <label htmlFor="last_name">Last name</label>
                                                                <input type="text" name="last_name" className="form-control" id="last_name_form" placeholder={this.props.last_name} onChange={e => actions.handleChange(e)} />
            
                                                            </div>
                                                            <div className="col-4">
                                                            <button type="reset" className="float-right btn btn-primary">Limpiar</button>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-6">
                                                                <label htmlFor="email">Email</label>
                                                                <input type="email" name="email" className="form-control" id="email_form" placeholder={this.props.email} onChange={e => actions.handleChange(e)} />
                                                            </div>
                                                            <div className="col-6">
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-6">
                                                                <label htmlFor="password">Password</label>
                                                                <input type="password" name="password" className="form-control" id="password_form" placeholder="Set new password" onChange={e => actions.handleChange(e)} />
                                                            </div>
                                                        </div>
                                                    <div className="container">
                                                        <div className="form-row">
                                                            <div className="form-group col-11">
                                                                <button type="submit" className="btn btn-primary float-right" onClick={() => actions.modifyUser(this.props.id)} data-dismiss="modal">Agregar</button>
                                                                <button type="submit" className="btn btn-primary float-right mr-5" data-dismiss="modal">Cancelar</button>
                                                            </div>
                                                        </div>
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
