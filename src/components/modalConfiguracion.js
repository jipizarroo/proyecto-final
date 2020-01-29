import React from 'react';

const ModalConfiguracion = props => {
    return (
        <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Item Descuento
            </button>


            <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <button type="button" class="btn btn-success float-right">Aplicar Descuento</button>
                            <input type="text" class="float-right" placeholder="xxx"></input>
                     </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default ModalConfiguracion;