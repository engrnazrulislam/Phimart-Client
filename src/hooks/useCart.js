import { useState } from 'react';
import api_clients from '../services/api_clients';

const useCart = () => {
    // Create new cart
    const [authToken, setAuthToken] = useState(()=>JSON.parse(localStorage.getItem("authTokens"))?.access);
    const createCart = async()=>{
        console.log(authToken);
        try {
            const response = await api_clients.post(
                '/carts/', 
                {}, 
                {headers:{Authorization: `JWT ${authToken}` },
            }
        );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return {createCart};
};

export default useCart;