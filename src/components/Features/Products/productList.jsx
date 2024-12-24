import Productos from "./productos";
import Item from "../../ItemContainer/Item";


const ListaProductos = () => {

    return(
        <div className="product-list">
            {Productos.map((producto)=>(
                <Item

                key={producto.id}
                nombre={producto.nombre}
                ubicacion={producto.ubicacion}
                altText={producto.altText}



                // onClick={() => console.log(producto.label)}
                // bgColor={producto.}


                />


            ))}
        </div>
    )
}

export default ListaProductos