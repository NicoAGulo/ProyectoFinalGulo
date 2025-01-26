import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavbarComponente from './components/Navbar/Navbar'
import Store from './components/Store/Store'
import RoutingError from './components/Routing-Error/RoutingError'



function App() {
  
  
  return (
    <BrowserRouter>
    <div className="logo-navbar">
                <img src="../src/assets/img/drone-3.png" alt="logo-drone"/>
                </div>
                
        <h1>Droneosfera</h1>
        <h2>Captura el espacio</h2>
    <NavbarComponente />

    <Routes>
      <Route path="/" element={<Store/>}/>
      <Route path="*" element={<RoutingError/>}/>
    </Routes>

    </BrowserRouter>
  

)
}

export default App
