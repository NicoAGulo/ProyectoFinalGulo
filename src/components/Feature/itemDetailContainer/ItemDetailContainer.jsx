function Item({nombre, precio, tipo, rutaImagen}){
    return(
        <article className={`Card ${tipo}`}>

                <h4 itemprop="name">{nombre}</h4>

                <figure>
                    <img 
                    className="imagenDron"
                    src={rutaImagen} 
                    itemprop="image" 
                    alt={"Foto de Drone" + nombre}
                    />
                </figure>

                <div>
                    <label>Clase </label>
                    <span className='Tipo' itemprop="type">{tipo}</span>
                </div>

                <span className='PrecioArticulo' itemprop="price">${precio}</span>

                <div>
                    <button className='BotonAgregarACarrito'>+</button>
                    <button className='BotonSacarDeCarrito'>-</button>
                </div>

        </article>
    )
}

export default Item