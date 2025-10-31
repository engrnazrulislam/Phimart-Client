import React from 'react';
import api_clients from '../services/api_clients';

const useCart = () => {
    // Create new cart
    const createCart = async()=>{
        try {
            const response = await api_clients.post('/carts/')
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    return {createCart};
};

export default useCart;