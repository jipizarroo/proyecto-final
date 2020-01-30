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
                        history.push('/admi_Usuario')
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
                    name: store.name,
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
                        history.push('/admin_home/productos')
                    })
            },
        }
    };

}

export default getState;