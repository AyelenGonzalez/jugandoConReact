import ItemCount from '../itemCount/Itemcount';
import React from 'react';

function ItemDetail ({item}) {
    return (
            <div className="p-3 d-flex justify-content-around flex-wrap">
                <div>
                    <img src={item.imagen}  alt="IMÁGEN DE PRODUCTO" />
                </div>
                <div className="pt-5 d-flex flex-column gap-3">
                    <h3 className="text-center">{item.nombre}</h3>
                    <p className="text-center">$ {item.precio}</p>
                    <ItemCount stock={item.stock} initial={1} />
                </div>
            </div>
    );
}
export default ItemDetail;