import Productos from "../../../Products/drones/Productos";
import { useParams } from "react-router-dom";

export default function DetalleProducto(){
    const {id}=useParams();
    const producto = Productos.find(prod=>prod.id ===parseInt(id))

    if (!producto){
        return <h2>El producto no existe</h2>
    }
    return(
        <>
            <h3>Detalle del producto</h3>
            <h3>Nombre: {producto.nombre}</h3>
            <img 
                    className="imagenDron"
                    src={producto.rutaImagen} 
                    itemprop="image" 
                    alt={"Foto de Drone" + producto.nombre}
            />
            <p>Detalles: {producto.detail}</p>
            <p>Clase: {producto.tipo}</p>
            <h2>Precio: ${producto.precio}</h2>
        </>
    )
}