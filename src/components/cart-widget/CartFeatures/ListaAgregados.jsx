import {useState, createContext} from 'react'


export const listadoContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] =useState(0);

    const addToCart = (producto)=>{
        const cartId= `${producto.id}-${cart.length}`;
        const productoConId= {...producto, cartId};
        setCart((prevCart)=> [...prevCart, productoConId]);

        setTotal((prevTotal)=> prevTotal+ producto.precio);
    }

    const deleteFromCart = (cartId) => {
        const producto = cart.find((producto) => producto.cartId === cartId);
        setCart((prevCart) => prevCart.filter((producto) => producto.cartId !== cartId));
        setTotal((prevTotal) => prevTotal - producto.precio);
    };

    // const deleteFromCart = (producto.id O producto.key)=>{
    //     setCart
    // }

    return(
        <listadoContext.Provider value={{cart, addToCart, deleteFromCart, total}}>
            {children}
        </listadoContext.Provider>
    );
};
