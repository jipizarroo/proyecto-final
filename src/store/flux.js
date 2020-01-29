const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            path: 'http://localhost:5000',
            name: '',
            last_name: '',
            email: '',
            password: '',
            currentUser: {}
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
                        currentUser: data
                    });
                    history.push('/admin_dashboard')
                })
            },
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            }
        }
    }
}

export default getState;