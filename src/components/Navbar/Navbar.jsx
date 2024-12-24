import Carrito from '../CartWidget/cart';
import './navbar.css'

function NavbarComponente(){

    console.log("Ingresaste a Droneosfera");
    
    return(
        <>
        <div className="bloque-navbar">
            
            
        
        <ul>
        <li>Accesorios</li>
        <li>Drones</li>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        </ul>
        
        <Carrito />
        </div>

        </>
    )
}

export default NavbarComponente
