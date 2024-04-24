const axios = require('axios');
const qs = require('qs'); // qs is included with axios

const postData = {
    name: 'Sompob',
    age: 30
};

const configEncode = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

axios.post('http://localhost:3000/submit', postData, config)
    .then(response => {
        console.log('Response data:', response.data);
    })
    .catch(error => {
        console.error('Error during the API call:', error.message);
    });
