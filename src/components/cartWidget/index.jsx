import React from 'react';
import cartLogo from './logoCarrito.jpg';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext';
import './cartWidget.css'


function CartWidget(){
    const {totalLot} = useCartContext();
    return (
            <Link className='p-3 nav__counter d-flex align-items-center' to='/cart'>
                <img src={cartLogo} alt="CARRITO" />
                <p className='units'>({totalLot()})</p>
            </Link>
    );
}

export default CartWidget;