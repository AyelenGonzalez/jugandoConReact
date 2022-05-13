import ItemCount from '../itemCount/Itemcount';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

function ItemDetail ({item}) {

    const {addItem} = useCartContext();

    const[productsLot, setProductsLot] = useState(null);

    function addHandler(quantityToAdd) {
        setProductsLot(quantityToAdd);
        addItem(item, quantityToAdd);
    };

    return (
            <div className="p-3 d-flex justify-content-around flex-wrap">
                <div>
                    <img src={item.imagen}  alt="IMÁGEN DE PRODUCTO" />
                </div>
                <div className="pt-5 d-flex flex-column gap-3">
                    <h3 className="text-center">{item.nombre}</h3>
                    <p className="text-center">$ {item.precio}</p>
                    <div className='d-flex flex-column justify-content-center'>
                        {productsLot ?
                            <button className='btn'>
                                <Link className='text-center btn btn-primary' to='/cart'>Ir al carrito ({productsLot} items)</Link>
                            </button> :
                            <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                        }
                    </div>
                    
                </div>
            </div>
    );
}
export default ItemDetail;