import React from 'react';



const Add_sub_categoria = () => {
    return (
        <div className="container mt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <span className="navbar-brand">Formulario Nuevo Sub_Producto</span>
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
                        <label for="formGroupExampleInput">Descripcion</label>
                        <input type="text" class="form-control" placeholder="xxxxxxxxxxxxx" />
                    </div>
                    <div className="button col-md-3">
                        <button type="button" className="btn btn-secondary">Limpiar</button>
                    </div>
                </div>
            </form>
            <form>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <label for="formGroupExampleInput">LOGO</label>
                        <input type="text" class="form-control" placeholder="xxxxxxxxxxx" />
                    </div>
                </div>
            </form>

            <div className="row pt-5 d-flex justify-content-between">
                <button type="button" className="btn btn-secondary mr-3">Cancelar</button>
                <button type="button" className="btn btn-success">Agregar</button>
            </div>
        </div>
    )
}
export default Add_sub_categoria;