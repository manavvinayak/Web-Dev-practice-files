import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <div>
       <Navbar />
    <App />
  </div>
     
)
