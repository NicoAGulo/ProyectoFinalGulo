import { useState } from 'react'
import NavbarComponente from './components/Navbar/Navbar'
import './App.css'
import Items from './components/Feature/itemListContainer/ItemListContainer'
import Productos from './Products/drones/Productos'
import Filtros from './components/Feature/filtros/Filtros'




function App() {
  const [opcionSeleccionada, setOpcionSeleccionada]= useState('all');
  
  return (
    <>
    <div className="logo-navbar">
                <img src="../src/assets/img/drone-3.png" alt="logo-drone"/>
                </div>
                
        <h1>Droneosfera</h1>
        <h2>Captura el espacio</h2>

    <NavbarComponente />

    <Filtros opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada}/>

    <Items prod={Productos} filtro={opcionSeleccionada}/>

    </>
  

)
}

export default App
