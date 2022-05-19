import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import db from '../../services/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';
import { Spinner } from 'react-bootstrap';

function ItemBox({greetings}){
    const [load, setLoad] = useState(true);
    const [products, setProducts] = useState ([]);
    const {categoryId} = useParams();

    const getData = async (category) =>{
        try{
            setLoad(true);
            const document = category ? 
                             query(collection(db, "items"), where('category', '==', category)) :
                             collection(db, "items");
            const col = await getDocs(document);
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()});
            setProducts(result);
            setLoad(false);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(categoryId);
    }, [categoryId]);
    

     
    return(
        <div className='d-flex flex-column justify-content-center align-items-center'>
             <h3 className='text-center'>{greetings}</h3>
             {load ? 
             <Spinner animation="border"></Spinner> :
             <ItemList products={products} />}
        </div>
    );
}

export default ItemBox;