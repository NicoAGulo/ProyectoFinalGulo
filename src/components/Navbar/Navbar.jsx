import Carrito from '../cart-widget/Cart'
import './navbar.css'
import Filtros from '../Feature/filtros/Filtros'

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
        <Filtros/>
        </>
    )
}

export default NavbarComponente
