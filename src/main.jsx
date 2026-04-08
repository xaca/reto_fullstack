import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login/Login.jsx';
import Registro from './registro/Registro.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registro title="Registro" />
    <Login />
  </StrictMode>,
)
