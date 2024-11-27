import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavbarComponente from './Navbar/Navbar'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponente />
  </StrictMode>,
)
