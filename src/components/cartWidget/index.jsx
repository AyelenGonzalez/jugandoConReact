import React from 'react';
import cartLogo from './logoCarrito.jpg';
function CartWidget(){
    return (
        <>
            <a className='p-3'><img src={cartLogo} alt="CARRITO" /></a>
        </>
    );
}

export default CartWidget;