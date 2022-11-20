import axios from "axios";
import {IRefresh, IResponse, IUser} from "../../types/UserTypes";

export const baseURL = 'http://localhost:5000/api';

const $host = axios.create({
    withCredentials: true,
    baseURL
})

$host.interceptors.request.use((config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

$host.interceptors.response.use((config: any) => {
    return config;
}, (async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<IResponse>(`${baseURL}/user/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return $host.request(originalRequest);
        } catch (e) {
            console.log('Пользователь не авторизован')
        }
    }
    throw error;
}))

export {
    $host,
}