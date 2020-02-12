import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';


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
                 <div className="col-md-4 offset-md-4">
                     <div className="card">
                         <div className="card-header">
                             Login
                         </div>
                         <div className="card-body">
                             <div className="form-group">
                         {store.current_Error===null?"":
                         
                         
                         store.current_Error.msg
                         }
                             </div>
                             <div className="form-group">
                                 <label htmlFor="email" className="form-label">Username:</label>
                                 <input type="text" id="email" name="email" className="form-control"
                                 onChange={ e => actions.handleChange(e)} />
                             </div>
                             <div className="form-group">
                                 <label htmlFor="password" className="form-label">Password:</label>
                                 <input type="password" id="password" name="password" className="form-control"
                                 onChange={ e => actions.handleChange(e)} />
                             </div>
                         </div>
                         <div className="card-footer">
                             <button className="btn btn-primary btn-block"  onClick={ e => actions.getLogin(e, '/login', props.history)}>Login</button>  
                             <a className= "d-flex justify-content-center" href="">¿Olvidaste tu clave?</a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 export default Login;
