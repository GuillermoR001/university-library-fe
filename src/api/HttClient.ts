import axios from 'axios';
import { getToken } from '../auth/helpers/getToken';

const apiurl = import.meta.env.VITE_API_URL;

export const HttpClient = axios.create({
    baseURL: apiurl,
    headers : {
        Authorization: getToken(),
    }
});
