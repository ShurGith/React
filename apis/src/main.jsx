import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/criptos/App.jsx'
import Saludo from './components/Saludo.jsx'
import Pagina40404 from './components/404.jsx'
import './index.css'
import Tienda from './components/tienda/Tienda.jsx'
import Entrada from './components/entrada.jsx'
import Producto from './components/tienda/producto/Producto.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entrada />}>
        <Route path='/saludo' element={<Saludo />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/app' element={<App />} />
        <Route path='/producto/:id' element={<Producto />} />
        <Route path='*' element={<Pagina40404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
