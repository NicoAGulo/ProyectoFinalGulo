import { useState } from "react";

import Filtros from "../../Feature/filtros/Filtros";
import Items from "../../Feature/itemListContainer/ItemListContainer";
import Productos from "../../../Products/drones/Productos";
import ItemDetallado from "../../Feature/itemDetailContainer/ItemDetailContainer";

export default function Store(){
    const [opcionSeleccionada, setOpcionSeleccionada]= useState('all');
    
    return(
        <>

            <Filtros opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada}/>

            <Items prod={Productos} filtro={opcionSeleccionada}/>
        </>
    )
}