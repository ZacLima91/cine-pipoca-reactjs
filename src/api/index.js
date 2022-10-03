import axios from "axios";

const api = axios.create({baseURL:"https://api-catalog-nestjs.herokuapp.com/"});

export default api;