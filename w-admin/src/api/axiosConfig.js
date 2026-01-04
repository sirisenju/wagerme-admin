import axios from 'axios';

const api = axios.create({
    baseURL: 'https://markis.onrender.com/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to add the auth token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            // console.log("Attaching token:", token); // Debugging
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.warn("No auth token found in localStorage");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized! Redirecting to login...");
            localStorage.removeItem('authToken');
            // Optional: Redirect to login page
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;
