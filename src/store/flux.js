const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            path: 'http://localhost:5000',
            username: '',
            password: '',
            currentUser: {},
            nombreProducto: '',
            precioProducto: '',
            descripcionProducto:'',
            productos: []
        },
        actions: {
            getLogin: (history) => {
                const store = getStore();
                const data = {
                    username: store.username,
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
                    setStore({
                        username: '',
                        password: '',
                        currentUser: data
                    });
                    history.push('/home')
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
                    })
                    
                    history.push('/productos')
                })
            }
        }
    }
}

export default getState;