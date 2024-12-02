import { useState } from 'react'
import NavbarComponente from './components/Navbar/Navbar'
import Item from './components/ItemListContainer/Item'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponente />

    <Item bgColor="grey" label="Drone 1001X" onClick={()=>alert("Agregaste el producto Drone 1001X al carrito")} ubicacion={'../src/assets/img/drone-blanco.png'}/>

    <Item bgColor="grey" label="Drone 1004X" onClick={()=>alert("Agregaste el producto 1004X al carrito")} ubicacion={'../src/assets/img/drone-rojo.png'}/>
    
    <Item bgColor="lightyellow" label="Drone 200Z" onClick={()=>alert("Agregaste el producto 200Z al carrito")} ubicacion={'../src/assets/img/drone-pequeño.png'}/>
    
    <Item bgColor="lightblue" label="Drone 35W" onClick={()=>alert("Agregaste el producto 35W al carrito")} ubicacion={'../src/assets/img/drone-carga.png'}/>

    </>
  

)
}

export default App
