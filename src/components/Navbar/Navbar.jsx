import Carrito from '../cart-widget/Cart'
import './navbar.css'

function NavbarComponente(){

    console.log("Ingresaste a Droneosfera");
    
    return(
        <>
        <div className="bloque-navbar">
            
            
        
        <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li></li>
        
        </ul>
        
        <Carrito />

        </div>
        </>
    )
}

export default NavbarComponente
