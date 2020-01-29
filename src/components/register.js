import React from 'react';
import { Context } from '../store/appContext';
import './../css/register.css';


export default class Register extends React.Component {


    render() {
        //const {store, actions} = useContext(Context);
        return (
            <Context.Consumer>
                {
                    ({store, actions}) => {
                        return (
                            <div className="container">
                                <div className="form-row">
                                    <div className="form-group col-4">
                                        <label htmlFor="name">Name</label>
                                        <input type="name" name="name" className="form-control" id="name_form" onChange={e => actions.handleChange(e)} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="last_name">Last name</label>
                                        <input type="last_name" name="last_name" className="form-control" id="last_name_form" onChange={e => actions.handleChange(e)} />
                                    </div>
                                    <div className="form-group col-3">
                                        <button type="submit" className="btn btn-primary float-right">Limpiar</button>
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
                                <div className="form-row">
                                    <div className="form-group col-11">
                                        <button type="submit" className="btn btn-primary float-right" onClick={() => actions.createUser(this.props.history)}>Agregar</button>
                                        <button type="submit" className="btn btn-primary float-right mr-5">Cancelar</button>
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
