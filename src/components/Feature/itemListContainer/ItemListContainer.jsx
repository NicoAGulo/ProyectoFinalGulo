import './Items.css'

function Items({prod}){
    return(
        <div>
        {prod.map((item)=>(
            <article
            key={item.id}
            itemScope

            className='Card'
            >
                <h4 itemprop="name">{item.nombre}
                </h4>

                <figure>
                    <img 
                    src={item.rutaImagen} itemprop="image" alt={"Foto de Drone" + item.nombre}/>
                </figure>

                <span className='Tipo' itemprop="type">Clase: {item.tipo}</span>

                <button className='BotonAgregarACarrito'>+</button>
                <button className='BotonSacarDeCarrito'>-</button>

                <span className='PrecioArticulo' itemprop="price">${item.precio}</span>

            </article>
        ))}
        </div>
    )
}

export default Items
