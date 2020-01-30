import React from 'react';

const ModalEliminar = props => {
    return (

        <div className="container">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Eliminar Item
            </button>


            <div className="modal fade" id="staticBackdrop" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Desea Eliminar Producto?</h5>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mimodal">
                            <label>Item</label>
                            <input type="text" className="" placeholder="xxx"></input>

                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-primary">Cancelar</button>
                            <button type="button" className="btn btn-primary">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )

}
export default ModalEliminar;