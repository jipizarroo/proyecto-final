import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import './../css/login.css';


 const Login = props => {
     const {store, actions} = useContext(Context);

     useEffect(() => {
        if(store.isAuthenticated === true){
            if(store.currentUser.user.isAdmin === true)
            {props.history.push("/admin_home")}
            else{
                {props.history.push("/garzon_home")}
            }     
        }
    });

     return (
         <div className="container">
             <div className="row">
                 <div className="col-md-4 offset-md-4" id="login">
                     <div className="card mt-5">
                         <div className="card-header bg-dark text-light d-flex justify-content-center">
                             Login
                         </div>
                         <div className="card-body">
                             <div className="form-group">
                         {store.current_Error===null?"":
                         
                         
                         ( <div className="alert alert-danger d-flex justify-content-center" role="alert">
                             {store.current_Error.msg}
                         </div> )
                         
                         }
                             </div>
                             <div className="form-group">
                                 <label htmlFor="email" className="form-label">E-mail:</label>
                                 <input type="text" id="email" name="email" className="form-control rounded-pill"
                                 onChange={ e => actions.handleChange(e)} />
                             </div>
                             <div className="form-group">
                                 <label htmlFor="password" className="form-label">Password:</label>
                                 <input type="password" id="password" name="password" className="form-control rounded-pill"
                                 onChange={ e => actions.handleChange(e)} />
                             </div>
                         </div>
                         <div className="card-footer">
                             <button className="btn btn-dark btn-block"  onClick={ e => actions.getLogin(e, '/login', props.history)}>Ingresar</button> 
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 export default Login;
