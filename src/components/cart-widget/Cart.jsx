import { useState } from 'react';
import './Cart.css'

const carro=[];


function Carrito({count}){

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
        <span className='cart-count'>0</span>

        <section className={'productos-en-carrito-'+carritoVisible}>
            <button onClick={handleCarritoOff}>← Volver →</button>
            <ul className='listado-productos-en-carrito'>
                {/* Map de carro */}
                <li>hola</li>
                <li>hole</li>
                <li>holi</li>
                <li>holo</li>
                <li>holu</li>
            </ul>
        </section>
    
    </div>
)}

export default Carrito