import './filtros.css';


const Filtros = ({opcionSeleccionada, setOpcionSeleccionada}) =>{

    const handleOptionChange = (e) =>{
        setOpcionSeleccionada(e.target.value);
    }


    return(
        <div className="nav-filtros">
            
            <label>Ver Todos</label>
            <input id='filtroPredeterminado' type="radio" name="filter_background" onChange={handleOptionChange} value="all"/>

            <label>Ver Drones Normales</label>
            <input type="radio" name="filter_background" onChange={handleOptionChange} value="normal"/>
            
            <label>Ver Drones Pocket</label>
            <input type="radio" name="filter_background" onChange={handleOptionChange} value="pocket"/>

            <label>Ver Drones de Carga</label>
            <input type="radio" name="filter_background" onChange={handleOptionChange} value="carga"/>

        </div>
    )
}

export default Filtros