import {  useEffect } from 'react'
import './App.css'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/navigation/Navbar'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home.mdx'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import IndexM2 from './pages/desafios/m2/Index';
import { desafiosM2 } from './data/desafiosM2'
import { useLocation } from 'react-router-dom'

function App() {

  const { theme } = useTheme();

  
  useEffect(() => {
  document.body.className = theme;
    const id = 'hljs-theme';
    let linkTag = document.getElementById(id);

    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.id = id;
      document.head.appendChild(linkTag);
    }

    linkTag.href =
      theme === 'dark'
        ? '/node_modules/highlight.js/styles/a11y-dark.min.css'
        : '/node_modules/highlight.js/styles/github.css';
  }, [theme])
  
  const location = useLocation();
  const isDesafios = location.pathname.startsWith('/desafios/');

  return (
      <>
        <Navbar />
        <main className={isDesafios ? 'page-container': ''}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/desafios/m2" element={<IndexM2 />} />
          {
            desafiosM2.map(({slug, component: Component}) => (
              <Route key={slug} path={`/desafios/m2/${slug}`} element={<Component />} />
            ))
          }
        </Routes>
        </main>
      </>
  )
}

export default App
