import { Link } from "react-router-dom"

import React, { useContext } from "react"
import { listadoContext } from "../../cart-widget/CartFeatures/ListaAgregados"

function Item({id, nombre, precio, tipo, rutaImagen}){
    const {addToCart} = useContext(listadoContext);


    const handleAddToCart = async () => {
        return new Promise((resolve) => {
            addToCart({ id, nombre, precio, tipo, rutaImagen });
            resolve();
        });
    };


    
    // const handleDeleteFromCart=(cartId)=>{
    //     deleteFromCart(cartId)
    // }

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
                    <button className='BotonAgregarACarrito' onClick={handleAddToCart}>Agregar al carrito</button>
                </div>

        </article>
    )
}

export default Item