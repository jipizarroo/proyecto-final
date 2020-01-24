import React from 'react';
import './../css/login.css'


export default class Login extends React.Component {

    render() {
        return (

            <div className="container">
                <div className="card">
            <div className="card-header">Login</div>
            
            <div className="card-body">
                <div className="form-group">
                    <label for="" >Username</label>
                    <input type="text" name="username" placeholder="username"></input>
                </div>

                <div className="form-group">
                    <label for="" >Password</label>
                    <input type="password" name="password" placeholder="contraseña"></input>
                </div>
            </div>
            <div className="footer">
            <button type="button" class="btn btn-primary btn-lg btn-block">Sign Up!</button>
            </div>
            </div>
            </div>

                )
            }
        
        
        }
        
