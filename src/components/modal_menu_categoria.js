import React from 'react';

const Agregar_menu = (props) => {

    async function updateCantidades() {
        await props.setCategoryItems(() => {
            return props.items.map((item, i) => {
                item.cantidad = document.getElementById("item-" + i).value;
                return item;
            });
        });

        props.updateTotal();
    }

    return (
        <div className="container">
            <div className="modal fade" id="menu_add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="container mt-2">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                                    <span className="navbar-brand">{props.description}</span>
                                </nav>
                            </div>
                        </div>
                        <div className="container">
                            {
                               props.items.map((item, i) => {
                                    return (
                                        <div className="row">
                                            <div className="col-md-9">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">{item.nombre}</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-md-3 pt-2">
                                                <input type="number" name="quantity" min="0" max="99" defaultValue="0" id={"item-" + i}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={updateCantidades} >Aplicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Agregar_menu;