import React from 'react';

class Mensajeria extends React.Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div id= "modalMensajeria" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
}

export default Mensajeria;