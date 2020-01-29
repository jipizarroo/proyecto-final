const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            path: 'http://localhost:5000',
            name: '',
            last_name: '',
            email: '',
            password: '',
            current_user: {},
            all_users:{}
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
                        password: '',
                        current_user: data
                    });
                    history.push('/admin_dashboard')
                })
            },
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            getUsers: (history) => {
                const store = getStore();
                const data = {
                    all_users: store.all_users
                }
                fetch(store.path + '/api/users', {
                    method: 'GET',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setStore({
                        all_users: data
                    });
                    history.push('/admi_Usuario')
                })
            }

        }
    };

}

export default getState;