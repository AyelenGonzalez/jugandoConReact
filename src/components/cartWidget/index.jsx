import React from 'react';
import cartLogo from './logoCarrito.jpg';
function CartWidget(){
    return (
        <>
            <a className='p-3' href='#'><img src={cartLogo} alt="CARRITO" /></a>
        </>
    );
}

export default CartWidget;