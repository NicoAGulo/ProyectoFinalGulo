import './navbar.css'

function NavbarComponente(){

    console.log("Ingresaste a Droneosfera");
    
    return(
        <>
        <div className="bloque-navbar">
            <div className="logo-navbar">
                <img src="../src/assets/img/drone-3.png" alt="logo-drone"/>
                </div>
                
        <h1>Droneosfera</h1>
        <h2>Captura el espacio</h2>
        
        <img src="../src/assets/img/carrito.png" alt="carrito" className='carrito'/>

        <ul>
        <li>Inicio</li>
        <li>Drones</li>
        <li>Accesorios</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        </ul>
        </div>

        </>
    )
}

export default NavbarComponente
