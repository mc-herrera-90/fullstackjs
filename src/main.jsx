import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { HashRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <HashRouter>
  <StrictMode>
   <ThemeProvider>
    <App />
  </ThemeProvider> 
  </StrictMode>
  </HashRouter>
)
