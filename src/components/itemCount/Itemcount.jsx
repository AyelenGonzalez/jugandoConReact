import React, { useState } from 'react';


function ItemCount ({stock, initial}) {

     const [count, setCount] = useState(initial);

     const addItem = () => {
         if (count < stock){
             setCount(count +1);
         }
     }

     const removeItem = () => {
         if (count > 0){
             setCount(count -1)
         }
     }

     const onAdd = () => {
        alert('producto agregado');
   }

     return (
         <div className="d-flex flex-column justify-content-center">
             <div className="d-flex justify-content-center">
                 <button onClick={()=> removeItem ()}> - </button>

                 <input readOnly value={count} />
                 
                 <button onClick={()=> addItem ()}> + </button>
             </div>
             <button className='d-flex align-self-center' onClick={() => (count <= stock) && onAdd() }>Agregar al carrito</button>
         </div>
     )
}

export default ItemCount;
