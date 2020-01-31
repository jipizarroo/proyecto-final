const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            name: '',
            last_name: '',
            email: '',
            password: '',
            currentUser: {},
            nombreProducto: '',
            precioProducto: '',
            descripcionProducto: '',
            productos: [],
            all_users: {},
            description: '',
            icon: '',
            all_categories: [],
        },
        actions: {
            createUser: (history) => {
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
                        'Content-Type': 'application/json'
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            name: '',
                            last_name: '',
                            email: '',
                            password: ''
                        });
                        history.push('/admin_home/users')
                    })
            },
            modifyUser: (history) => {
                const store = getStore();
                const data = {
                    name: store.name,
                    last_name: store.last_name,
                    email: store.email,
                    password: store.password,
                }
                fetch(store.path +'api/users', {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type:': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data)
                        setStore({
                            name:'',
                            last_name:'',
                            email:'',
                            password:''
                        });
                        //history.push('/admin_home/users')
                    })
            },
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            listarProductos: () => {
                const store = getStore();
                fetch(store.path + '/api/data_productos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            productos: data
                        })
                    })
            },
            agregarProducto: (history) => {
                const store = getStore();
                const data = {
                    nombreProducto: store.nombreProducto,
                    precioProducto: store.precioProducto,
                    descripcionProducto: store.descripcionProducto
                }

                fetch(store.path + '/api/data_productos', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            nombreProducto: '',
                            precioProducto: '',
                            descripcionProducto: ''
                        });
                        getActions().listarProductos();
                        history.push('/productos')
                    })
            },
            getUsers: () => {
                const store = getStore();
                const data = {
                    all_users: store.all_users
                }
                fetch(store.path + '/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            all_users: data
                        })
                    })
            },

            addCategory: (history) => {
                const store = getStore();
                const data = {
                    description: store.description,
                    icon: store.icon,
                }
                fetch(store.path + '/api/categories', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            name: '',
                            description: '',
                            icon: '',
                        });
                        //history.push('/admin_home/productos')
                    })
            },

            getCategories: () => {
                const store = getStore();
                fetch(store.path + '/api/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({all_categories: data})
                    })
            },

            // addItem: (history) => {
            //     const store = getStore();
            //     const data = {
            //         nombre: store.nombre,
            //         precio: store.precio,
            //         descripcion: store.descripcion
            //     }
            //     fetch(store.path + '/api/categories', {
            //         method: 'POST',
            //         body: JSON.stringify(data),
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }

            //     })
            //         .then(resp => resp.json())
            //         .then(data => {
            //             console.log(data)
            //             setStore({
            //                 nombre: '',
            //                 precio: '',
            //                 descripcion: '',
            //             });
            //             //history.push('/admin_home/productos')
            //         })
            // },
        }
    };

}

export default getState;