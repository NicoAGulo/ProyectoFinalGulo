import { Link } from "react-router-dom"

import React, { useContext } from "react"
import { listadoContext } from "../../cart-widget/CartFeatures/ListaAgregados"

function Item({id, nombre, precio, tipo, rutaImagen}){

    const {addToCart, deleteFromCart} = useContext(listadoContext);


    const handleAddToCart=()=>{
        addToCart({id, nombre, precio, tipo, rutaImagen})
    }
    
    const handleDeleteFromCart=(cartId)=>{
        deleteFromCart(cartId)
    }

    return(
        <article className={`Card ${tipo}`}>
                    <h4 itemProp="name">{nombre}</h4>

                <figure>
                    <Link to={`/productos/${id}`}>
                    <img 
                    className="imagenDron"
                    src={rutaImagen} 
                    itemProp="image" 
                    alt={"Foto de Drone" + nombre}
                    />
                    </Link>
                </figure>

                <div>
                    <label>Clase </label>
                    <span className='Tipo' itemProp="type">{tipo}</span>
                </div>

                <span className='PrecioArticulo' itemProp="price">${precio}</span>

                <div>
                    <button className='BotonAgregarACarrito' onClick={handleAddToCart}>+</button>
                    <button className='BotonSacarDeCarrito' onClick={() => handleDeleteFromCart(id)}>-</button>
                </div>

        </article>
    )
}

export default Item