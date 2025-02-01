import { useEffect, useState } from "react";

import Filtros from "../../Feature/filtros/Filtros";
import Items from "../../Feature/itemListContainer/ItemListContainer";
import Productos from "../../../Products/drones/Productos";
import getProductos from "../../../Products/drones/Productos";

export default function Store(){
    const [opcionSeleccionada, setOpcionSeleccionada]= useState('all');

    const [productos, setProductos]=useState([]);

    useEffect(()=>{
        getProductos().then((resultado)=>{
            setProductos(resultado);
        })
    },[]);
    
    return(
        <>

            <Filtros opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada}/>

            <Items prod={productos} filtro={opcionSeleccionada}/>
        </>
    )
}