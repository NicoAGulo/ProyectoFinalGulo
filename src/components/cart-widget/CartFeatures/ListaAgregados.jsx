import {useState, createContext} from 'react'


export const listadoContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (producto)=>{
        const cartId= `${producto.id}-${cart.length}`;
        const productoConId= {...producto, cartId};
        setCart((prevCart)=> [...prevCart, productoConId])
    }

    const deleteFromCart= (cartId) =>{
        setCart((prevCart)=> prevCart.filter((producto)=>producto.cartId !==cartId));
    }

    // const deleteFromCart = (producto.id O producto.key)=>{
    //     setCart
    // }

    return(
        <listadoContext.Provider value={{cart, addToCart, deleteFromCart}}>
            {children}
        </listadoContext.Provider>
    );
};
