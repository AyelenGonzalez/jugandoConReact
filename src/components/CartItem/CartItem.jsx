import React from "react";
import { useCartContext } from "../../Context/CartContext";

const CartItem = ({item}) =>{
    const {removeItem, removeUnit, unitsLot} = useCartContext();

    return (
        <div className='border border-success row'>
            <img className="col-md-4" src={item.imagen} width="200px" alt="Imágen" />
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <h4 className="text-center">{item.nombre}</h4>
                <p className="text-center">Unidades: {item.quantity}</p>
                <p className="text-center">Precio Unitario: $ {item.precio}</p>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-center">Subtotal: $ {item.precio * unitsLot(item.id)}</h5>
                <button className="btn btn-danger mt-3" onClick={() => removeUnit(item.id)}>Eliminar Unidad</button>
                <button className="btn btn-danger mt-3 mb-3" onClick={() => removeItem(item.id)}>Eliminar Productos</button>
            </div>
        </div>
    );
};

export default CartItem;