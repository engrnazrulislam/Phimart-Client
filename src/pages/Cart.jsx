import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
    const {createCart} = useCartContext();
    useEffect(()=>{
        createCart()
    },[])
    return (
        <div>
            <p>This is cart page</p>
        </div>
    );
};

export default Cart;