import React from 'react';
import cartLogo from './logoCarrito.jpg';
import { Link } from 'react-router-dom';
function CartWidget(){
    return (
        <>
            <Link className='p-3' to='/cart'><img src={cartLogo} alt="CARRITO" /></Link>
        </>
    );
}

export default CartWidget;