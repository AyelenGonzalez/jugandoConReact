import React from "react";
import {useCartContext} from '../../Context/CartContext';
import CartItem from "../../components/CartItem/CartItem";

function Cart() {

    const {cartList, clear} = useCartContext();

    return(
        <div className="container-fluid mt-3 pb-3">
            <div className="row d-flex justify-content-center gap-5">
                {cartList.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                {cartList.length > 0 ?(
                    <>
                        <button className="btn btn-danger mt-3" onClick={() => clear()}>Vaciar Carrito</button>
                    </>
                ) : (
                    <h2 className="text-center mt-5">El Carrito está vacío</h2>
                )}
            </div>
        </div>
    );
};

export default Cart;