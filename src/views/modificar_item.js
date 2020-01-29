import React from 'react';
import './../css/add_item.css';


const Modificar_item = () => {
    return (
        <div className="container mt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <span className="navbar-brand">Modificar Item</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>

            <form>
                <div className="row">
                    <div className="col-md-6">
                        <label for="formGroupExampleInput">Nombre</label>
                        <input type="text" class="form-control" placeholder="xxxxxxxxxxx" />
                    </div>
                    <div className="col-md-3">
                        <label for="formGroupExampleInput">Precio</label>
                        <input type="text" class="form-control" placeholder="xxxxxxxxxxxxx" />
                    </div>
                    <div className="button col-md-3">
                        <button type="button" className="btn btn-secondary">Limpiar</button>
                    </div>
                </div>
            </form>
            <div className="row pt-5">
                <div className="col-md-5">
                    <div className="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sub Categoria
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="formGroupExampleInput">Descripcion</label>
                    <textarea rows="10" cols="50">
                        xxxxxxxxxxx
                </textarea>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-1">
                    
                </div>
                <div className="col-md-8 pt-3">
                   
                </div>
                <div className="col-md-3">
                <button type="button" className="btn btn-secondary mr-3">Primary</button>
                <button type="button" className="btn btn-success">Primary</button>
                </div>
            </div>
        </div>
    )
}
export default Modificar_item;