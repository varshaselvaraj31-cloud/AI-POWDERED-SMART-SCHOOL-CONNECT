import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor: Attach JWT token if present in localStorage
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('school_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Uniform error extraction
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const customError = {
      message:
        error.response?.data?.message ||
        error.message ||
        'Unable to connect to the school server. Please verify your internet or try again later.',
      status: error.response?.status || 500,
      errors: error.response?.data?.errors || [],
    };
    return Promise.reject(customError);
  }
);

export default apiClient;
