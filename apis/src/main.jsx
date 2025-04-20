import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/criptos/App.jsx'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './components/paginas/404.jsx'
import Pagina403 from './components/paginas/403.jsx'
import './index.css'
import Tienda from './components/tienda/Tienda.jsx'
import Entrada from './components/entrada.jsx'
import Producto from './components/tienda/producto/Producto.jsx'
import Settings from './components/settings/Settings.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entrada />}>
        <Route path='/saludo' element={<Saludo />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/app' element={<App />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/producto/:id' element={<Producto />} />
        <Route path='*' element={<Pagina404 />} />
        <Route path='/sin-permiso' element={<Pagina403 />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
