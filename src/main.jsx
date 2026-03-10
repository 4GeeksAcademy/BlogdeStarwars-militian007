import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./routes.jsx"; // Importamos tu Layout (que ya tiene el router dentro)
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)