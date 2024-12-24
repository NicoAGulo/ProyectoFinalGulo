import Productos from "./productos";


function ListaProductos (){
    return(
        <ul>

            {Productos.map(producto=>(
                
                
                <li key={producto.id}>
                <h2>{producto.nombre}</h2>
                <img src={producto.rutaImagen} alt={producto.nombre} />
                <p>${producto.precio}</p>
                </li>

            ))}
        </ul>
    )
}

export default ListaProductos