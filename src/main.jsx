import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterApp } from './router/RouterApp'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <RouterApp />
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
)
