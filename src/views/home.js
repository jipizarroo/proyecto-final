import React from 'react';
import '../css/home.css';
import Modal_menu from '../components/modal_menu'
import $ from 'jquery';

class Home extends React.Component {

    showModalPedido() {
        $('#modalReserva').modal('show');
    }

    render() {
        return (
            <>
                <div>{<Modal_menu />}</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>00:23</span></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>10:06</span></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x" ></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>05:43</span></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger" onClick={this.showModalPedido.bind()}>
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>00:48</span></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;