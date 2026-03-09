import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './pages/Layout.jsx'
import { StoreProvider } from './hooks/useGlobalReducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <Layout />
    </StoreProvider>
  </React.StrictMode>,
)