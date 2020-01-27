import React from 'react';

const ModalEliminar = props => {
    return (

        <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Eliminar Item
            </button>


            <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Desea Eliminar Producto?</h5>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mimodal">
                            <label>Item</label>
                            <input type="text" class="" placeholder="xxx"></input>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Cancelar</button>
                            <button type="button" class="btn btn-primary">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )

}
export default ModalEliminar;