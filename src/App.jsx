// import { useState } from 'react'
import NavbarComponente from './components/Navbar/Navbar'
import './App.css'
import Items from './components/Feature/itemListContainer/ItemListContainer'
import Productos from './Products/drones/Productos'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="logo-navbar">
                <img src="../src/assets/img/drone-3.png" alt="logo-drone"/>
                </div>
                
        <h1>Droneosfera</h1>
        <h2>Captura el espacio</h2>

    <NavbarComponente />

    <Items prod={Productos}/>




    </>
  

)
}

export default App
