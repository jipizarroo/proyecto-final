import React from 'react';
import './../css/users.css'
import Register from './../components/register';
import $ from 'jquery';





export default class Users extends React.Component {

    showModalregister() {
        $('#modalregister').modal('show');
    }

    render() {
        return (
            <>
                <div>{<Register />}</div>
                <div className="container">
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.showModalregister.bind()}>Limpiar</button>
                    </div>

                </div>
            </>
        )
    }
}