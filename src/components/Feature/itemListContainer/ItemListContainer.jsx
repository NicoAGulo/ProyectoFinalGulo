import Item from "../itemDetailContainer/ItemDetailContainer";

function Items({prod, filtro}){

    const productosFiltrados = prod.filter((p) =>{
        if(filtro === 'all') return true;
        return p.tipo === filtro;
    })

    return(
        <div className='GrillaProductos'>
        {productosFiltrados.map((item)=>(
            <Item key={item.id} {...item}/>
        ))}
        </div>
    )
}

export default Items
