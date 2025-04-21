import './index.css'
import { createRoot } from 'react-dom/client'
import Conexion from './components/Conexion.jsx'
import Entrada from './components/entrada.jsx'
import App from './components/criptos/App.jsx'
import Tienda from './components/tienda/Tienda.jsx'
import Pagina404 from './components/paginas/404.jsx'
import Pagina403 from './components/paginas/403.jsx'
import Settings from './components/settings/Settings.jsx'
import CriptoPage from './components/criptos/CriptoPage.jsx'
import Producto from './components/tienda/producto/Producto.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProviderWrapper } from './contexts/user.context.jsx'
import { BlogProviderWrapper } from './contexts/blog.context.jsx'
import Blog from './components/blog/blog.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <UserProviderWrapper>
      <BlogProviderWrapper>
        <Routes>
          <Route path='/' element={<Entrada />}>
            <Route path='/conexion' element={<Conexion />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/app' element={<App />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/producto/:id' element={<Producto />} />
            <Route path='/criptopage/:id' element={<CriptoPage />} />
            <Route path='*' element={<Pagina404 />} />
            <Route path='/sin-permiso' element={<Pagina403 />} />
          </Route>
        </Routes>
      </BlogProviderWrapper>
    </UserProviderWrapper>
  </BrowserRouter>


)
