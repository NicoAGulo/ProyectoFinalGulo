import Carrito from '../cart-widget/Cart'
import './navbar.css'

function NavbarComponente(){

    console.log("Ingresaste a Droneosfera");
    
    return(
        <>
        <div className="bloque-navbar">
            
            
        
        <ul>
        <li>Drones</li>
        <li>Accesorios</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        </ul>
        
        <Carrito />

        </div>
        </>
    )
}

export default NavbarComponente
