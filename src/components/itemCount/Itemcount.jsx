import React, { useState } from 'react';

function ItemCount ({stock, initial, onAdd}) {

     const [count, setCount] = useState(initial);

     const addItem = () => {
         if (count < stock){
             setCount(count +1);
         }
     }

     const removeItem = () => {
         if (count > 1){
             setCount(count -1)
         }
     }
    
     return (
         <div className="d-flex flex-column justify-content-center">
             <div className="d-flex justify-content-center">
                 <button onClick={()=> removeItem ()}> - </button>

                 <input className='text-center' readOnly value={count} />
                 
                 <button onClick={()=> addItem ()}> + </button>
             </div>
             <button className='d-flex align-self-center btn btn-primary mt-3' onClick={() => (count <= stock) && onAdd(count) }>Agregar al carrito</button>
         </div>
     )
}

export default ItemCount;
