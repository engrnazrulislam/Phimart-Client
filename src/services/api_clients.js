import axios from "axios";
const api_clients = axios.create(
    {
        baseURL: "https://phi-mart2.vercel.app/api/v1",
    }
);
export default api_clients;