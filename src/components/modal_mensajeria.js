import React from 'react';

const Mensajeria = props => {
    return (
        <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
            <form>
                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <nav className="navbar navbar-light bg-light mt-3">
                                    <span className="navbar-text">
                                        Enviar mensaje a:
                                    </span>
                                </nav>
                                <nav className="navbar navbar-light bg-light mt-3">
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </nav>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="media-body">
                                                <textarea rows="4" cols="95">
                                                    At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                                            </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="media-body">
                                                <textarea rows="1" cols="95">
                                                    At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                                            </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="container">
                                    <div className="row float-right">
                                        <div className="btn-group float-right pb-3" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary">Cancelar</button>
                                            <button type="button" className="btn btn-secondary">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Mensajeria;