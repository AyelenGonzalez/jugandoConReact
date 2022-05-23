import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import db from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Checkout = () => {

    const {cartList, totalPrice, clear} = useCartContext();

    const [isLoading, setIsLoading] = useState(false);

    const [orderId, setOrderId] = useState();

    const[buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    });

    const {Nombre, Email, Telefono} = buyer;

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const newOrder = async (data) => {
        setIsLoading(true);
        try{
            const col = collection(db, "Orders");
            const order = await addDoc(col, data);
            setOrderId(order.id);
            clear();
            setIsLoading(false);
        } catch(error){
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const items = cartList.map(e => {
            return{
                id: e.id,
                title: e.nombre,
                price: e.precio,
                quantity: e.quantity
            }
        })
        const total = totalPrice();
        const data = {buyer, items, date, total}
        newOrder(data);
    }

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
        <h4 className='text-center mb-5'>Finalizando Compra</h4>
        {isLoading ? <Spinner animation='border'></Spinner> :
        (!orderId && 
        <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
            <h6>Completar Datos:</h6>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
                <input type="text" name="Nombre" placeholder="Ingrese su nombre" value={Nombre} onChange={handleInputChange} required />
                <input type="email" name="Email" placeholder="Ingrese su e-mail" value={Email} onChange={handleInputChange} required />
                <input type="number" name='Telefono' placeholder="Ingrese su número de teléfono" value={Telefono} onChange={handleInputChange} required />
                <input type="submit" value="Confirmar Compra" className='btn btn-success' />
            </form>
        </div>)}
        <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
            {orderId &&
            (<div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                <h4 className='text-center text-success'>Compra finalizada con éxito</h4>
                <hr width={100} />
                <h5 className='text-center'>Su Código de compra es: <span className='text-info'>{orderId}</span></h5>
                <Link to="/"><button className='btn btn-primary'>Regresar a la tienda</button></Link>
            </div>)}
        </div>
    </div>
  )
}

export default Checkout;