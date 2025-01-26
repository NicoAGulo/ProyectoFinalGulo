import { Link } from "react-router-dom";
import './Routing-Error.css'

export default function RoutingError(){
    return(
        <>
            <h1 className="h1-error">Error 404 - Espacio Vacio</h1>
            <h2 className="h2-error">Navegá hacia un lugar seguro</h2>
            <Link to="/" className="link-seguro">INICIO</Link>
        </>
    )
}