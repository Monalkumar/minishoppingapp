import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./stores/CartContext";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <CartProvider>
    <App />
    </CartProvider>
  </BrowserRouter>
)
