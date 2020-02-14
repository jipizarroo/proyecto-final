import React from 'react';
import { Context } from '../../store/appContext';
import '../../css/register.css';


export default class Mod_user extends React.Component {
    
    render() {

        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="modal fade" id="modal_mod_user" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
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
                                            <div className="form">
                                                <div className="form-row">
                                                    <div className="form-group col-2">
                                                        <label className="d-block text-muted">Administrador</label>
                                                        <input type="checkbox" id="isAdmin" name="isAdmin" defaultChecked={this.props.isAdmin}  onClick={e => actions.handleCheckBox(e)} />
                                                    </div>
                                                    <div className="form-group col-2">
                                                        <label className="d-block text-muted">Usuario Activo</label>
                                                        <input type="checkbox" id="isActive" name="isActive" defaultChecked={this.props.isActive} onClick={e => actions.handleCheckBox(e)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer ">
                                            <div className="form-row">
                                                <div className="form-group col-11 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                                                    <button type="submit" className="btn btn-primary ml-3" onClick={() => actions.modifyUser(this.props.id)} data-dismiss="modal">Agregar</button>
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
