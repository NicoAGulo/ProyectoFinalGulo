import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider, listadoContext } from './components/cart-widget/CartFeatures/ListaAgregados'

import NavbarComponente from './components/Navbar/Navbar'
import Inicio from './components/Pages/Inicio/Inicio'
import Store from './components/Pages/Store/Store'
import Nosotros from './components/Pages/Nosotros/Nosotros'
import RoutingError from './components/Pages/Routing-Error/RoutingError'
import Contacto from './components/Pages/Contacto/Contacto'
import DetalleProducto from './components/Pages/DetalleProducto/DetalleProducto'



function App() {
  
  
  return (
    <CartProvider>
      <BrowserRouter className="browser-router">
        <div className="logo-navbar">
          <img src="../src/assets/img/drone-3.png" alt="logo-drone"/>
        </div>

        <h1>Droneosfera</h1>
        <h2>Captura el espacio</h2>

        <NavbarComponente />

        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/productos" element={<Store/>}/>
          <Route path="/productos/:id" element={<DetalleProducto/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>

          <Route path="*" element={<RoutingError/>}/>
        </Routes>

      </BrowserRouter>
    </CartProvider>
  

)
}

export default App
