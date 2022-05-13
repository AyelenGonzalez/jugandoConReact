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

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;