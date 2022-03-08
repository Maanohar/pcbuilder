const axios = require('axios');

export const loadPCData = async() => {
    let response = await axios.get('http://localhost:7000/data');
    return response.data;
}