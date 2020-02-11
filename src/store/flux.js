const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            name: '',
            last_name: '',
            email: '',
            password: '',
            currentUser: '',
            nombre: '',
            precio: '',
            descripcion: '',
            all_users: [],
            all_items: [],
            description: '',
            icon: '',
            category_id: 0,
            all_categories: [],
            category_items: [],
            all_mesas: [],
            nombre_mesa: '',
            cantidad_mesa: '',
            plaza_id: '',
            all_plazas: [],
            nombre_plaza: '',
            current_Error: null,
            isAuthenticated: false,
            isAdmin: false,
            isActive: true,
            info_pedido: {},
        },

        actions: {
            getLogin: (e, url, history) => {
                e.preventDefault();
                const store = getStore();
                const data = {
                    email: store.email,
                    password: store.password,
                }
                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                if (data.msg){
                    setStore({
                        current_Error: data
                    })
                }
                else{                    
                    setStore({
                        email: '',
                        password: '',
                        currentUser: data,
                        current_Error: null,
                        isAuthenticated: true
                    });

                    sessionStorage.setItem('currentUser', JSON.stringify(data))
                    sessionStorage.setItem('isAuthenticated', true)
                    history.push('/admin_home')
                    getActions().getUsers();
                    getActions().getCategories();
                    getActions().getItem();
                    getActions().getMesas();
                    getActions().getPlazas();
                    
                }
                })
            },
            isAuthenticated: () => {
                if(sessionStorage.getItem('currentUser') && sessionStorage.getItem('isAuthenticated')){
                    setStore({
                        isAuthenticated: sessionStorage.getItem('isAuthenticated'),
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            },
            createUser: () => {
                const store = getStore();
                const data = {
                    name: store.name,
                    last_name: store.last_name,
                    email: store.email,
                    password: store.password,
                }
                fetch(store.path + '/api/users', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            name: '',
                            last_name: '',
                            email: '',
                            password: ''
                        });
                        getActions().getUsers();
                    })
            },
            modifyUser: (id) => {
                const store = getStore();
                const data = {
                    name: store.name,
                    last_name: store.last_name,
                    email: store.email,
                    password: store.password,
                    isAdmin: store.isAdmin,
                    isActive: store.isActive
                }
                fetch(store.path + '/api/users/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            name: '',
                            last_name: '',
                            email: '',
                            password: '',
                        });
                    })
                getActions().getUsers();
            },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                });
            },
            handleCheckBox: e =>{
                setStore({
                    [e.target.name]: e.target.checked
                })
            },

            getUsers: () => {
                const store = getStore();
                fetch(store.path + '/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            all_users: data
                        })
                    })
            },

            addCategory: () => {
                const store = getStore();
                const data = {
                    description: store.description,
                    icon: store.icon,
                }
                fetch(store.path + '/api/categories', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            name: '',
                            description: '',
                            icon: '',
                        });
                        getActions().getCategories();
                    })
            },

            addPedido: (request) => {
                const store = getStore();
                const data = request
                fetch(store.path + '/api/pedidos', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }

                })
            },

            getCategories: () => {
                const store = getStore();
                fetch(store.path + '/api/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({ all_categories: data })
                    })

            },

            addItem: () => {
                const store = getStore();
                const data = {
                    nombre: store.nombre,
                    precio: store.precio,
                    descripcion: store.descripcion,
                    category_id: store.category_id
                }
                fetch(store.path + '/api/items', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            nombre: '',
                            precio: '',
                            descripcion: '',
                            category_id: '',
                        });
                        getActions().getItem();
                    })
            },

            getItem: () => {
                const store = getStore();
                fetch(store.path + '/api/items', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            all_items: data
                        })
                    })
            },

            getCategoryItems: (id) => {
                const store = getStore();
                return fetch(store.path + '/api/categories/' + id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            category_items: data
                        })
                    })
            },

            modifyItem: (id) => {
                const store = getStore();
                const data = {
                    nombre: store.nombre,
                    precio: store.precio,
                    descripcion: store.descripcion,
                    category_id: store.category_id
                }
                fetch(store.path + '/api/items/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            nombre: '',
                            precio: '',
                            descripcion: '',
                            category_id: ''
                        });
                        getActions().getItem();
                    })
            },

            delItem: (id) => {
                const store = getStore();
                fetch(store.path + '/api/items/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            all_items: data
                        })
                        getActions().getItem();
                    })
            },

            deleteUser: (id) => {
                const store = getStore();
                // const data = {
                //     all_users: store.all_users
                // }
                fetch(store.path + '/api/users/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            all_users: data
                        })
                    })
                getActions().getUsers();
            },

            getMesas: () => {
                const store = getStore();
                fetch(store.path + '/api/mesas', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token

                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            all_mesas: data
                        })
                    })
            },

            createMesa: () => {
                const store = getStore();
                const data = {
                    cantidad_mesa: store.cantidad_mesa,
                    plaza_id: store.plaza_id,
                }
                fetch(store.path + '/api/mesas', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            cantidad_mesa: '',
                            plaza_id: '',
                        })
                    })
                getActions().getMesas();
            },

            putMesa: (id) => {
                const store = getStore();
                const data = {
                    nombre_mesa: store.nombre_mesa,

                }
                fetch(store.path + '/api/mesas/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            nombre_mesa: '',
                        });
                    })
                getActions().getMesas();
            },

            delMesa: (id) => {
                const store = getStore();
                fetch(store.path + '/api/mesas/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            all_mesas: data
                        })
                    })
                getActions().getMesas();
            },

            getPlazas: () => {
                const store = getStore();
                fetch(store.path + '/api/plazas', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            all_plazas: data
                        })
                    })
            },

            postPlazas: () => {
              const store = getStore();
              const data = {
                  nombre_plaza: store.nombre_plaza
              }
              fetch(store.path + '/api/plazas', {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + store.currentUser.access_token
                  }
              })
              .then(resp => resp.json())
              .then(data => {
                  //console.log(data)
                  setStore({
                      nombre_plaza: '',
                  })
              })
              getActions().getPlazas();
            },

            putPlaza: (id) => {
                const store = getStore();
                const data = {
                    nombre_plaza: store.nombre_plaza,

                }
                fetch(store.path + '/api/plazas/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            nombre_plaza: '',
                        });
                    })
                getActions().getPlazas();
            },           
            filtrarMesas: (id) =>{
                if (!id > 0){
                    getActions().getMesas();
                }
                else{
                    const store = getStore();
                    fetch(store.path + '/api/filtros/'+ id,{
                        method:'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + store.currentUser.access_token
                        }
                    })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            all_mesas: data
                        });
                    })
                }
            },      
            getInfo: () => {
                            const store = getStore();
                            fetch(store.path + '/api/info-pedidos/2', {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(resp => resp.json())
                                .then(data => {
                                        console.log(data)
                                    setStore({
                                        info_pedido: data
                                    })
                                })
                        }
            },

    };

}

export default getState;