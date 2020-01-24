import React from 'react';
import './../css/home.css';

const Home = props => {
    return (
        <>
            <div className="container">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Seleccione Plaza
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>00:23</span></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3 ">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>10:06</span></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>05:43</span></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                        </div>
                        <div className="col-md-2 mt-5 card ml-3 mr-3 bg-danger">
                            <div className="table1 fa fa-cutlery fa-2x"></div>
                            <div className="border border-dark text-center"> <span>00:48</span></div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Home;