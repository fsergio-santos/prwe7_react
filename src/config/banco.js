
import axios from 'axios';
import { SERVIDOR_LARAVEL } from './Config';

const http = axios.create({
    baseURL: SERVIDOR_LARAVEL,
    headers: {
        "Content-type":"application/json"
    }
    
}) 


export default http;