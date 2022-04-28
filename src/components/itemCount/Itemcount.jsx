import React, { useState } from 'react';


function ItemCount ({stock, initial, onAdd}) {
     const [count, setCount] = useState(initial);

     function addItem (){
         if (count < stock){
             setCount(count +1);
         }
     }

     function removeItem(){
         if (count > 0){
             setCount(count -1)
         }
     }

     return (
         <div className="item__count">
             <div>
                 <button onClick={()=> removeItem ()}> - </button>

                 <input readOnly value={count} />
                 
                 <button onClick={()=> addItem ()}> + </button>
             </div>
             <button onClick={() => (count <= stock) && onAdd() }>Agregar al carrito</button>
         </div>
     )
}

export default ItemCount;
