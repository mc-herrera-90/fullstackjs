import {  useEffect } from 'react'
import { useTheme } from './context/ThemeContext'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '@components/Navbar'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import IndexM2 from './pages/desafios/m2/Index';
import IndexM1 from './pages/desafios/m1/Index';
import { desafiosM2 } from './data/desafiosM2'
import { desafiosM1 } from './data/desafiosM1'
import { useLocation } from 'react-router-dom'
import CopyCodeButtonInjector from './components/CopyCodeButtonInjector';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'
import StepHeading from './components/StepHeading.jsx';
import ProjectDetails from '@components/ProjectDetails';
import GitHubRepo from './components/cards/GithubRepo.jsx'
import MathComponent from './components/MathComponent.jsx'
import Blockquote from './components/Blockquote.jsx'
import FileTree from './components/FileTree.jsx'
import FloatingToC from './components/FloatingToc.jsx'
const mdxComponents = {
  h2: StepHeading,
  ProjectDetails,
  GitHubRepo,
  MathComponent,
  Blockquote,
  FileTree,
  FloatingToC
}


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
        ? '/styles/a11y-dark.min.css'
        : '/styles/github.min.css';
  }, [theme])
  
  const location = useLocation();
  const isDesafios = location.pathname.startsWith('/desafios/');

  return (
      <>
        <Navbar />
        <main className={isDesafios ? 'page-container': ''}>
        <CopyCodeButtonInjector />
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/desafios/m1" element={<IndexM1 />} />
          <Route path="/desafios/m2" element={<IndexM2 />} />
          {
            desafiosM1.map(({slug, component: Component}) => (
              <Route 
                key={slug}
                path={`/desafios/m1/${slug}`}
                element={<Component components={mdxComponents}/>} />
            ))
          }
          {
            desafiosM2.map(({slug, component: Component}) => (
              <Route key={slug} path={`/desafios/m2/${slug}`} element={<Component components={mdxComponents}/>} />
            ))
          }
        </Routes>
        </main>
        <Footer/>
      </>
  )
}

export default App
