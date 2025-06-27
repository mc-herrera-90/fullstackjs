import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { HashRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import StepHeading from './components/StepHeading.jsx';
import {MDXProvider} from '@mdx-js/react'

const mdxComponents = {
  h2: StepHeading
}

createRoot(document.getElementById('root')).render(
  <HashRouter>
  <StrictMode>
   <ThemeProvider>
      <App/>
  </ThemeProvider> 
  </StrictMode>
  </HashRouter>
)
