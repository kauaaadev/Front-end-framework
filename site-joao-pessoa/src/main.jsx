import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carros from './Carros.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carros />
  </StrictMode>,
)
