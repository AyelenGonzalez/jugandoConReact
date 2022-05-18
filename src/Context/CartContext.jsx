import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children})=>{

    const[cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some((item)=>item.id === id);
    };

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            return setCartList(
                cartList.map((product) => 
                    product.id === item.id ?
                    {...product, quantity: product.quantity + quantity} :
                    product
                    )
            );
        }
        setCartList([...cartList, {...item, quantity}]);
    };

    const clear = () => {
        setCartList([]);
    };

    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    };

    const unitsLot = (id) => {
        const foundInCart = cartList.find((item) => item.id === id);
        return foundInCart ? foundInCart.quantity : 0;
    };

    const removeUnit = (id) => {
        if(unitsLot(id) === 1){
            return removeItem(id);
        }
        setCartList(
            cartList.map((product) =>
            product.id === id ?
            {...product, quantity: product.quantity - 1} :
            product)
        );
    };

    const totalLot = () => {
        return cartList.reduce((total, item) => total + item.quantity, 0);
    };

    const totalPrice = () => {
        return cartList.reduce((total, item) => total + item.quantity * item.precio, 0);
    };

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, unitsLot, removeUnit, totalLot, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;