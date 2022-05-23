import React from "react";
import {useCartContext} from '../../Context/CartContext';
import CartItem from "../../components/CartItem/CartItem";
import {Link} from 'react-router-dom';

function Cart() {

    const {cartList, clear, totalPrice} = useCartContext();

    return(
        <div className="container-fluid mt-3 pb-3">
            <div className="d-flex flex-column gap-5">
                <div className="container-fluid">
                    {cartList.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="row align-items-center">
                    {cartList.length > 0 ?(
                        <div className="d-flex gap-2 justify-content-between align-items-center flex-wrap">
                            <h2 className="text-center">Precio Total: ${parseInt(totalPrice())}</h2>
                            <button className="btn btn-danger" onClick={() => clear()}>Vaciar Carrito</button>
                            <Link to='/checkout'><button className="btn btn-success">Finalizar Compra</button></Link>
                            <Link to='/'><button className="btn btn-primary">Ir a la tienda</button></Link>
                        </div>
                    ) : (
                        <div className="d-flex gap-2 justify-content-between align-items-center flex-wrap">
                            <h2 className="text-center">El Carrito está vacío</h2>
                            <Link to='/'><button className="btn btn-primary">Ir a la tienda</button></Link>
                        </div>
                    )}
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Cart;