import axios from '../config/axios';

export const createData = input => axios.post(`/datas/`, input);
