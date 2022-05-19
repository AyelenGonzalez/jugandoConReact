import React from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
import {doc, getDoc} from 'firebase/firestore';

function ItemDetailContainer(){


    const [item, setItem] = useState({});
    const { id } = useParams();

    const getItem = async(id) =>{
        try{
            const document = doc(db, "items", id);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};
            setItem(result);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getItem(id)
    }, [id]);
    
    return (
        <section className="container">
            <ItemDetail item={item} />
        </section>
    )
}
export default ItemDetailContainer;