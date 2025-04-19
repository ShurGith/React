import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App.jsx'
import Saludo from './components/Saludo.jsx'
import Pagina40404 from './components/404.jsx'
import './index.css'
import Menu from './components/menu/menu.jsx'
import Entrada from './components/entrada.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entrada />}>
        <Route path='/saludo' element={<Saludo />} />
        <Route path='/criptos' element={<App />} />
        <Route path='*' element={<Pagina40404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
