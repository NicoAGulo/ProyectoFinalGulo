function ItemDetallado({prod}){
    return(
        <div className='divDetalle'>
            <article key={prod.id}>
                <h4 itemprop="name">{prod.nombre}</h4>

                <figure>
                    <img className="imagenDron"
                    src={prod.rutaImagen} itemprop="image" alt={"Foto de Drone" + prod.nombre}/>
                </figure>

                <div>
                <label>Clase </label>
                <span className='Tipo' itemprop="type">{prod.tipo}</span>
                </div>

                <span className='PrecioArticulo' itemprop="price">${prod.precio}</span>

                <details>{prod.detail}</details>

                <div>
                <button className='BotonAgregarACarrito'>+</button>
                <button className='BotonSacarDeCarrito'>-</button>
                </div>


            </article>
        </div>
    )
}

export default ItemDetallado
