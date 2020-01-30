import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home'
import Navbar from './components/navbar'
import injectContext from './store/appContext'
import Footer from './components/footer';
import Modal_ingredientes from './components/modal_ingredientes';
import Home_admin from './views/home_admin';
import Ventas_garzon from './views/ventas_garzon';
import Productos from './views/productos';
import Add_categoria from './views/add_categoria';
import Horario from './views/horario';
import Menu from './views/menu';
import users from './views/users';
import Admi_Usuario from './views/admi_Usuario';
import Register from './components/modal_register'


const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />


                <Route exact path="/admin_home/productos/add_categoria" component={Add_categoria} />
<<<<<<< HEAD
=======
                <Route exact path= "/admin_home/users/register" component={Register}/>
>>>>>>> 8977b635d4a6f809edab3152096d6ce5e121dd0a
                <Route exact path="/admin_home/productos" component={Productos} />
                <Route exact path ="/admin_home/users" component={Admi_Usuario}/>
                <Route exact path ="/admin_home/horario" component={Horario}/>
                <Route exact path="/admin_home" component={Home_admin} />






                <Route exact path="/garzon_home/config/ventas" component={Ventas_garzon} />
                <Route exact path ="/garzon_home/:id/menu" component={Menu}/>
                <Route exact path="/garzon_home" component={Home} />





                <Route exact path= "/admin/users/add_user" component={users}/>
                <Route exact path="/home/modal_ingredientes" component={Modal_ingredientes} />
                {/* <Route render={() => <h1>Not Found</h1>} /> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default injectContext(Layout);