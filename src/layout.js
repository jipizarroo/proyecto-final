import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home'
import Navbar from './components/navbar'
import injectContext from './store/appContext'
import Footer from './components/footer';
import Modal_menu from './components/modal_menu';
import Modal_ingredientes from './components/modal_ingredientes';
import Home_admin from './views/home_admin';
import Mensajeria from './components/modal_mensajeria';
import Ventas_garzon from './views/ventas_garzon';
import Add_item from './views/add_item';
import Add_sub_categoria from './views/add_sub_categoria';
import Productos from './views/productos_admin';
import Modificar_item from './views/modificar_item';
import Juntar_mesa from './components/modal_juntar_mesa';

const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/home/modal_ingredientes" component={Modal_ingredientes} />
                <Route exact path="/home/modal_menu" component={Modal_menu} />
                <Route exact path="/productos/modificar_item" component={Modificar_item} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/dashboard" component={Home_admin} />
                <Route exact path="/mensajeria" component={Mensajeria} />
                <Route exact path="/ventas_garzon" component={Ventas_garzon} />
                <Route exact path="/add_items" component={Add_item} />
                <Route exact path="/add_sub_categoria" component={Add_sub_categoria} />
                <Route exact path="/productos" component={Productos} />
                <Route exact path="/juntar" component={Juntar_mesa} />
                {/* <Route render={() => <h1>Not Found</h1>} /> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);