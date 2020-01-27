import React from 'react';
import Modal_mensajeria from '../components/modal_mensajeria'
import $ from 'jquery';


class Footer extends React.Component {

    showModalMensajeria(e) {
        console.log("entro")
        $('#modalMensajeria').modal('show');
    }



    render() {
        return (
            <>
                <div>{<Modal_mensajeria />}</div>
                <div className="container">
                    <div className="card text-center fixed-bottom">
                        <div className="card-footer d-flex justify-content-end">
                            <i className="fa fa-comments fa-4x" aria-hidden="true" onClick={this.showModalMensajeria.bind(this)}></i>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;