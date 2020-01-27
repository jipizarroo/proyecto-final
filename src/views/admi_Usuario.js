import React from 'react';
import { Link } from 'react-router-dom';



export default class Admi_Usuario extends React.Component {

    render() {
        return (

            <div className="container admi-usuario">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                
                         <Link  className="navbar-brand" to="/nuevoUsuario">
                             <button type="submit" value="agregar" class="btn btn-primary">Agregar
                                </button>
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered">

                                    <tr>
                                        <td>ID</td>
                                        <td>Nombre</td>
                                        <td>Tipo de Usurio</td>
                                        <td>UserName</td>


                                    </tr>
                                    <tr>

                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>


                                    </tr>

                                    <tr>

                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                    </tr>    
                            </table>
                        </div>
                    </div>
                </div>

                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" class="btn btn-primary" >                  
                               Modificar </button>
                               <br/>
                               <br/>
                               <button type="submit" class="btn btn-primary" >                  
                               Modificar </button>
                               <br/>
                               <br/>
                               <button type="submit" class="btn btn-primary" >                  
                               Modificar </button>
                               <br/>
                               <br/>
                               <button type="submit" class="btn btn-primary" >                  
                               Modificar </button>

                            </div>
                        </div>
                    </div>

            </div>
            </div>

        )
    }
}





