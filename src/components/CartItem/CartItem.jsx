import React from "react";
import { useCartContext } from "../../Context/CartContext";

const CartItem = ({item}) =>{
    const {removeItem, removeUnit} = useCartContext();

    return (
        <div className='col-md-4 d-flex flex-column justify-content-center'>
            <h2 className="text-center">{item.nombre}</h2>
            <p>Unidades: {item.quantity}</p>
            <p>Precio Unitario: $ {item.precio}</p>
            <button className="btn btn-danger mt-3" onClick={() => removeUnit(item.id)}>Eliminar Unidad</button>
            <button className="btn btn-danger mt-3" onClick={() => removeItem(item.id)}>Eliminar Productos</button>
        </div>
    );
};

export default CartItem;