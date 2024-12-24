import './Cart.css'



function Carrito({count}){
    return(
    <div className='cart-container'>
        <img src="../src/assets/img/carrito.png" alt="carrito" className='carrito'/>
        <span className='cart-count'>0</span>
    
    </div>
    )}

export default Carrito