import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Navbar from './components/navbar'
import injectContext from './store/appContext'
import Footer from './components/footer';
import Home_admin from './views/home_admin';
import Productos from './views/productos';
import Add_categoria from './views/add_categoria';
import Horario from './views/horario';
import Menu from './views/menu';
import Admi_Usuario from './views/admi_Usuario';
import Admin_mesas from './views/admin_mesas';
import Settings_mesas from './views/settings_mesas';
import Home_garzon from './views/home_garzon';

const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />


                <Route exact path="/admin_home/productos/add_categoria" component={Add_categoria} />
                <Route exact path="/admin_home/productos" component={Productos} />
                <Route exact path ="/admin_home/users" component={Admi_Usuario}/>
                <Route exact path ="/admin_home/horario" component={Horario}/>
                <Route exact path ="/admin_home/mesas/settings" component={Settings_mesas}/>
                <Route exact path ="/admin_home/mesas" component={Admin_mesas}/>
                <Route exact path="/admin_home" component={Home_admin} />






                <Route exact path="/garzon_home" component={Home_garzon} />
                <Route exact path ="/garzon_home/:id/menu" component={Menu}/>





                {/* <Route render={() => <h1>Not Found</h1>} /> */}
            </Switch>
            {/*<Footer />*/}
        </BrowserRouter>
    )
}
export default injectContext(Layout);