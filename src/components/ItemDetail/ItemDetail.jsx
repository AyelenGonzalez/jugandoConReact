import ItemCount from '../itemCount/Itemcount';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { Spinner } from 'react-bootstrap';

function ItemDetail ({item}) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(item.imagen){
            setIsLoading(false)
        }
    }, [item]);

    const {addItem, unitsLot} = useCartContext();

    const[productsLot, setProductsLot] = useState(0);

    function addHandler(quantityToAdd) {
        if(quantityToAdd + unitsLot(item.id) > item.stock){
            const addOk = item.stock - unitsLot(item.id);
            return alert(`Solamente podés agregar ${addOk} productos.`);
        }
        setProductsLot(quantityToAdd);
        addItem(item, quantityToAdd);
    };

    return (
            <div className="p-3 d-flex justify-content-around align-items-center flex-wrap">
                <div className="d-flex justify-content-center align-items-center">
                    {isLoading ? 
                    <Spinner animation="border"></Spinner> : 
                    <img src={item.imagen}  alt="IMÁGEN DE PRODUCTO" />}
                </div>
                <div className="pt-5 d-flex flex-column gap-3">
                    <h3 className="text-center">{item.nombre}</h3>
                    <p className="text-center">$ {item.precio}</p>
                    <div className='d-flex flex-column justify-content-center'>
                        <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                        {productsLot > 0 ? 
                            (<button className='btn'>
                                <Link className='text-center btn btn-primary' to='/cart'>Ir al carrito ({unitsLot(item.id)}) items</Link>
                            </button>) : 
                            <></>}
                    </div>
                    
                </div>
            </div>
    );
}
export default ItemDetail;