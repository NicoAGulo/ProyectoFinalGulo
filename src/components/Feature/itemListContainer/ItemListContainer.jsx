import React from "react";
import Item from "../itemDetailContainer/ItemDetailContainer";

function Items({prod, filtro}){

    const productosFiltrados = prod.filter((p) =>{
        if(filtro === 'all') return true;
        return p.tipo === filtro;
    })
    return(
        <div className='GrillaProductos'>

        {productosFiltrados.map((item, index) => {
                return <Item key={item.id} {...item} index={index} />;
            })}
        </div>
    )
}

export default Items
