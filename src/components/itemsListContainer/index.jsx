import React from 'react';
import './itemsListContainer.css'
import ItemCount from '../itemCount/Itemcount';
function ItemBox({greetings}){
    function addToCart () {
         console.log('producto agregado');
    }

    return (
        <div className='box'>
            <h3>{greetings}</h3>
            <ItemCount initial={0} stock={9} onAdd={addToCart} />
        </div>
    );
}

export default ItemBox;