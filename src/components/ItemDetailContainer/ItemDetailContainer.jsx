import ItemDetail from "../ItemDetail/ItemDetail";
import getItem from "../../Services/getItem";
import { useState, useEffect } from "react";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState({});

    useEffect(() => {
        getItem.then(res => {setItem(res);
        });
        getItem.catch(err => {
            alert(`${err}`);
        });
    }, []);
    
    return (
        <section className="container">
            <ItemDetail image={item.imagen} name={item.nombre} price={item.precio} />
        </section>
    )
}
export default ItemDetailContainer;