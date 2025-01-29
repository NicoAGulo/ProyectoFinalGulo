import './Cart.css';

import React, { useContext, useState } from 'react';
import { listadoContext } from './CartFeatures/ListaAgregados';

const count=0;


function Carrito(){

    const {cart, deleteFromCart}=useContext(listadoContext);

    const [carritoVisible, setCarritoVisible]= useState(false);

    const handleCarritoOn = () =>{
        setCarritoVisible(true);
        console.log(carritoVisible)
    }
    
    const handleCarritoOff = () =>{
        setCarritoVisible(false);
        console.log(carritoVisible)
    }

    return(
    <div className={'cart-container-'+carritoVisible}>
        <img src="../src/assets/img/carrito.png" alt="carrito" className='carrito-simbolo' onClick={handleCarritoOn}/>
        <span className='cart-count'>{cart.length}</span>

        <section className={'productos-en-carrito-'+carritoVisible}>
            <button onClick={handleCarritoOff}>← Volver →</button>
            <ul className='listado-productos-en-carrito'>
                    {cart.map((item) => {
                        console.log(item.rutaImagen);
                        return (
                            <li key={item.cartId} className='producto-carrito-li'>
                                <div className="div-li">

                                    <div className="div-img">

                                        <img 
                                            className="imagen-en-carrito"
                                            src={"/"+item.rutaImagen}
                                            itemProp="image"
                                            alt={"Foto de Drone " + item.nombre}
                                        />
                                    </div>
                                </div>
                                {item.nombre} - ${item.precio}
                                <button onClick={() => deleteFromCart(item.cartId)}>Eliminar</button>
                            </li>
                        );
                    })}
                </ul>
        </section>
    </div>
)}

export default Carrito