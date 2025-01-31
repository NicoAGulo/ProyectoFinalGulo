import Carrito from '../cart-widget/Cart'
import './Navbar.css'
import { Link } from 'react-router-dom';

function NavbarComponente(){

    console.log("Ingresaste a Droneosfera");
    
    return(
        <>
        <div className="bloque-navbar">
            
            
        
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>        
        </ul>
        
        <Carrito />

        </div>
        </>
    )
}

export default NavbarComponente