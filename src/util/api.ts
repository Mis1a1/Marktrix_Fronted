import axios, { Axios } from 'axios';

export let api: Axios;

export default function getApiIntsance() {
    let baseURL = process.env.REACT_APP_BASE_API_URL;
    let timeout = parseInt(process.env.REACT_APP_API_TIMEOUT_MS || '5000');

    api = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout,
    });
}