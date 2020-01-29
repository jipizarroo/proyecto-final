import React from 'react';
import './../css/register.css';


export default class Register extends React.Component {



    render() {
        return (
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="name">Name</label>
                        <input type="name" className="form-control" id="name_form"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="last_name">Last name</label>
                        <input type="last_name" className="form-control" id="last_name_form"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email_form"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password_form"/>
                    </div>
                </div>
            </div>


        )
    }


}
