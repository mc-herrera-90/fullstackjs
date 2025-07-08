import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FloatingToC.css';

const FloatingToC = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [visible, setVisible] = useState(false);
  const tocRef = useRef();
  const toggleBtnRef = useRef();
  const location = useLocation();

  // Detectar todos los h2 del contenido
  useEffect(() => {
    const foundHeadings = Array.from(document.querySelectorAll('h2')).map((el) => {
      const id = el.id || el.textContent.toLowerCase().replace(/\s+/g, '-');
      if (!el.id) el.id = id;
      return { id, text: el.textContent };
    });
    setHeadings(foundHeadings);
  }, [location.pathname]);

  // Actualizar heading activo al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      let currentId = null;
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el && el.offsetTop <= scrollY) {
          currentId = heading.id;
        }
      }
      setActiveId(currentId);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headings]);

  // Cerrar TOC al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        visible &&
        tocRef.current &&
        !tocRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [visible]);

  const toggleMenu = () => setVisible((v) => !v);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setVisible(false);

    // Corrige el hash sin romper HashRouter (forma: #/ruta#id)
    const currentHash = window.location.hash; // "#/desafios/m2/cv"
    const [baseHash] = currentHash.split('#').slice(1); // "/desafios/m2/cv"
    window.location.hash = `#${baseHash}#${id}`;

    // Scroll suave
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div
        ref={toggleBtnRef}
        id="toc-toggle-btn"
        className="toc-toggle-btn"
        onClick={toggleMenu}
        role="button"
        aria-label={visible ? 'Cerrar tabla de contenido' : 'Abrir tabla de contenido'}
        aria-expanded={visible}
        tabIndex={0}
      >
        <i className="fas fa-list"></i>
      </div>

      <aside ref={tocRef} className={`toc-container ${visible ? 'show' : ''}`}>
        <h2 className="toc-title">Contenido</h2>
        <ul className="toc-list">
          {headings.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={`${location.pathname}#${id}`} // necesario para <Link>
                className={`toc-link ${activeId === id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, id)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default FloatingToC;
