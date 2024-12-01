import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavbarComponente from './Navbar/Navbar'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
    <NavbarComponente />
    </header>

    <main>

    </main>

    <footer>

    </footer>
  </StrictMode>,
)
