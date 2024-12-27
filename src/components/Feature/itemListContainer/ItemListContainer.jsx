function Items({prod}){
    return(
        <div className='GrillaProductos'>
        {prod.map((item)=>(

            <article
            key={item.id}
            itemScope

            className={`Card ${item.tipo}`}
            >
                <h4 itemprop="name">{item.nombre}
                </h4>

                <figure>
                    <img className="imagenDron"
                    src={item.rutaImagen} itemprop="image" alt={"Foto de Drone" + item.nombre}/>
                </figure>

                <div>
                <label>Clase </label>
                <span className='Tipo' itemprop="type">{item.tipo}</span>
                </div>

                <span className='PrecioArticulo' itemprop="price">${item.precio}</span>

                <div>
                <button className='BotonAgregarACarrito'>+</button>
                <button className='BotonSacarDeCarrito'>-</button>
                </div>


            </article>
        ))}
        </div>
    )
}

export default Items
