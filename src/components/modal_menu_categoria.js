import React, { useContext } from 'react';
import { Context } from './../store/appContext';



const Agregar_menu = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div class="modal fade" id="menu_add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div className="container mt-2">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                                    <span className="navbar-brand">Categoria</span>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <thead>
                                        <tr>
                                            <th scope="col" onChange={e => actions.handleChange(e)}>
                                                {store.all_categories.length > 0 &&
                                                    store.all_categories.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item.id}>
                                                                {item.description}
                                                            </option>
                                                        );
                                                    })}
                                            </th>
                                        </tr>
                                    </thead>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">xxxxxxxxx</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-3 pt-2">
                                    <input type="number" name="quantity" min="1" max="99" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Aplicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Agregar_menu;