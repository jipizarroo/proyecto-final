import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home'
import Navbar from './components/navbar'
import injectContext from './store/appContext'
import Footer from './components/footer';
import Modal_menu from './components/modal_menu';
import ModalConfiguracion from './components/modalConfiguracion';
import ModalEliminar from './components/modalEliminar';
import Modal_ingredientes from './components/modal_ingredientes';
import Home_admin from './views/home_admin';
import Mensajeria from './components/modal_mensajeria';
import Ventas_garzon from './views/ventas_garzon';
import Add_item from './views/add_item';
import Add_categoria from './views/add_categoria';
import Productos from './views/productos_admin';
import Modificar_item from './views/modificar_item';
import Juntar_mesa from './components/modal_juntar_mesa';
import Horario from './views/horario';
import Menu from './views/menu';
import users from './views/users';
import NuevoUsuario from './views/nuevoUsuario';
import Admi_Usuario from './views/admi_Usuario';
import Modal_add_items from './components/modal_add_items'


const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/admin_dashboard" component={Home_admin} />
                <Route exact path ="/admi_Usuario" component={Admi_Usuario}/>
                <Route exact path= "/admin_dashboard/users/register" component={Register}/>
                <Route exact path="/home/modal_ingredientes" component={Modal_ingredientes} />
                <Route exact path="/home/modal_menu" component={Modal_menu} />
                <Route exact path="/modalConfiguracion" component={ModalConfiguracion}/>
                <Route exact path ="/modalEliminar" component={ModalEliminar}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home/modal_add_items" component={Modal_add_items} />
                <Route exact path="/productos/modificar_item" component={Modificar_item} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/mensajeria" component={Mensajeria} />
                <Route exact path="/ventas_garzon" component={Ventas_garzon} />
                <Route exact path="/add_items" component={Add_item} />
                <Route exact path="/add_categoria" component={Add_categoria} />
                <Route exact path="/productos" component={Productos} />
                <Route exact path="/juntar" component={Juntar_mesa} />
                <Route exact path ="/horario" component={Horario}/>
                <Route exact path ="/menu" component={Menu}/>
                <Route exact path= "/users" component={users}/>
                <Route exact path= "/register" component={Register}/>
                <Route exact path= "/nuevoUsuario" component={NuevoUsuario}/>
                {/* <Route render={() => <h1>Not Found</h1>} /> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default injectContext(Layout);