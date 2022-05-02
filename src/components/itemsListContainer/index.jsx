import React, { useEffect, useState } from 'react';
import ItemCount from '../itemCount/Itemcount';
import ItemList from '../ItemList/ItemList';
import getData from '../../Services/getData';

function ItemBox({greetings}){
    const [products, setProducts] = useState ([]);

    useEffect(() => {
        getData.then((res) => setProducts(res));
        getData.catch((error) => alert(`${error}`));
     }, []);
     
    return (
        <>
             <h3 className='text-center'>{greetings}</h3>
             <ItemCount initial={0} stock={9}/>
             <ItemList products={products} />
        </>
    );
}

export default ItemBox;