import axios from 'axios';

const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: headers
});