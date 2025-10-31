import useAuthContext from "../hooks/useAuthContext";

const Cart = () => {
    const {createCart} = useAuthContext();
    return (
        <div>
            <p>This is cart page</p>
        </div>
    );
};

export default Cart;