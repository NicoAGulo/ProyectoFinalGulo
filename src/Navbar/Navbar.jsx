import './navbar.css'

function NavbarComponente(){

    console.log("Ingresaste a Droneosfera");
    
    return(
        <>
        <div className="bloque-navbar">
            <div className="logo-navbar">
                <img src="../src/assets/img/drone-2.png" alt="logo-drone"/>
                </div>
                
        <h1>Droneosfera</h1>
        <h2>Captura el espacio</h2>
        </div>
        </>
    )
}

export default NavbarComponente
