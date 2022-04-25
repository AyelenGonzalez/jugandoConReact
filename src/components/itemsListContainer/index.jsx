import React from 'react';
import './itemsListContainer.css'

function ItemBox({greetings}){
    return (
        <div className='box'>
            <h3>{greetings}</h3>
        </div>
    );
}

export default ItemBox;