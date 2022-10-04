import axios from "axios";

// 59370000/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;