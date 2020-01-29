import React from 'react';
import './../css/register.css';


export default class Register extends React.Component {

    render() {
        return (
            <div id="modalregister" className="modal fade bd-example-modal-lg"
                tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <form>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content"></div>
                        <div className="container">
                            <div className="card">
                                <div className="card-header">Register</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label for="" >Username</label>
                                        <input type="text" name="username" placeholder="username"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="" >Email</label>
                                        <input type="email" name="password" placeholder="email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="" >Password</label>
                                        <input type="password" name="password" placeholder="contraseña"></input>
                                    </div>
                                </div>
                                <div className="footer">
                                    <button type="submit" className="btn">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
