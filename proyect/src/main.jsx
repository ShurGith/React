import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { NotesProviderWrapper } from './context/NotesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProviderWrapper>
        <App />
      </NotesProviderWrapper>
    </BrowserRouter>
  </StrictMode>

)
