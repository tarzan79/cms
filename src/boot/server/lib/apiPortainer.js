let axios = require('axios');

axios.defaults.baseURL = 'https://docker.monplaisir-informatique.fr/api';

exports.util = {
    setUrl: (url) => {
        axios.defaults.baseURL = url;
    },
    getToken: () => {
        axios.defaults.headers.common['Authorization'];
    }
}

// data: object => Username, Password
exports.auth = (data) => {
    return axios.post('/auth', data)
        .then(function (response) {
            console.log("jeton: " + response.data.jwt);
            axios.defaults.headers.common['Authorization'] = response.data.jwt;
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
};

exports.user = {
    create: (data) => {
        return axios.post('/users', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    },
    list: () => {
        return axios.get('/users')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    },
    info: () => {
        return axios.get('/users')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }
}

exports.status = () => {
    return axios.get('/status')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
};

exports.stacks = () => {
    return axios.get('/stacks')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
};

exports.endpoint = {
    list: () => {
        return axios.get('/endpoints')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    },
    get: (id) => {
        return axios.get('/endpoints/' + id)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }
};


exports.template = {
    list: () => {
        return axios.get('/templates')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    },
    get: (id) => {
        return axios.get('/templates/' + id)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }
};