import './filtros.css'



function Filtros(){
    return(
        <div className="nav-filtros">
            <label>Ver Todos</label>
            <input type="radio" name="filter_background" id="f-none" />

            <label>Ver Drones Normales</label>
            <input type="radio" name="filter_background" id="f-normal" />
            
            <label>Ver Drones Pocket</label>
            <input type="radio" name="filter_background" id="f-pocket" />

            <label>Ver Drones de Carga</label>
            <input type="radio" name="filter_background" id="f-carga" />

        </div>
    )
}

export default Filtros