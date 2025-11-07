import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

export const getDashboard = () => api.get('/dashboard');
export const resetDashboard = () => api.post('/dashboard/reset');
export const getAlimentos = () => api.get('/alimentos');
export const addAlimento = (data) => api.post('/alimentos', data);
export const registrarConsumo = (data) => api.post('/consumo', data);

export default api;