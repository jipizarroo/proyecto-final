const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            name: '',
            last_name: '',
            email: '',
            password: '',
            currentUser: {},
            nombre: '',
            precio: '',
            descripcion: '',
            all_users: {},
            all_items: {},
            description: '',
            icon: '',
            category_id: 0,
            all_categories: [],
            category_items: [],
        },
        actions: {
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
                }
                fetch(store.path + '/api/users/' + id, {
                    method: 'PUT',
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
                    })
                getActions().getUsers();
            },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                });
            },

            getUsers: () => {
                const store = getStore();
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
                        getActions().getCategories();
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
                        setStore({ all_categories: data })
                    })

            },

            addItem: (history) => {
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
                        'Content-Type': 'application/json'
                    }

                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
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
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
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
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
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
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
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
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
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
                getActions().getUsers();
            },
        }
    };

}

export default getState;