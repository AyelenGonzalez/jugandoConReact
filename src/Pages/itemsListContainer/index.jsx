import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';

class Producto {
    constructor (id, nombre, category, imagen, precio, stock, cantidad, subtotal){
                 this.id = id;
                 this.nombre = nombre;
                 this.category = category;
                 this.imagen = imagen;
                 this.precio = precio;
                 this.stock = stock;
                 this.cantidad = 1;
                 this.subtotal = precio * cantidad;
    }
}
const productos = [];
productos.push(new Producto(1, 'Lavanda y Olíbano', `Especiales`,`../image/sahume2.jpeg`, 300));
productos.push(new Producto(2, 'Naranja y Citronella', `Especiales`,`../image/sahume.jpg`, 300));
productos.push(new Producto(3, 'Linea Natural X 3 "Rosas"', `Packs`, `../image/sahume6.jpg`, 600));
productos.push(new Producto(4, 'Linea Natural X 4', `Packs`, `../image/sahume5.jpg`, 900));
productos.push(new Producto(5, 'Linea Natural X 5 "Para las tardes"', `Packs`, `../image/sahume4.jpg`, 900));
productos.push(new Producto(6, 'Linea Premium X 4 "Intenso"', `Packs`, `../image/sahume3.jpg`, 900));
productos.push(new Producto(7, 'Linea Premium X 5 "Ruda"', `Packs`, `../image/sahume7.jpg`, 1000));
productos.push(new Producto(8, 'Linea Premium Triple combinado x 5 "Noche"', `Combinados`, `../image/sahume8.jpg`, 1000));
productos.push(new Producto(9, 'Linea Premium Triple combinado X 5 "Dia"', `Combinados`, `../image/sahume9.jpg`, 1000));

function getProducts(category){
    const myPromise = new Promise((res, rej)=>{

    const productsFiltered = category ? productos.filter(p => p.category === category) : productos;

    setTimeout(()=> {
        res(productsFiltered);
    }, 2000);
    });
    return myPromise
}

function ItemBox({greetings}){
    const [products, setProducts] = useState ([]);
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then(res => {
            setProducts(res);
        })
        .catch(error => {
            alert(`${error}`);
     });
    }, [categoryId]);
    

     
    return(
        <>
             <h3 className='text-center'>{greetings}</h3>
             <ItemList products={products} />
        </>
    );
}

export default ItemBox;