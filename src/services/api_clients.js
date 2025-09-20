import axios from "axios";
export default axios.create(
    {
        baseURL: "https://phi-mart2.vercel.app/api/v1",
    }
);