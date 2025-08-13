import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterApp } from './router/RouterApp'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { SearchProvider } from './context/SearchContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <SearchProvider>
          <RouterApp />
        </SearchProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
)
