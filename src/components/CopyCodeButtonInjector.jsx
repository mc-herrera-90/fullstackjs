// src/components/CopyCodeButtonInjector.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CopyCodeButtonInjector() {
    const location = useLocation(); // Detecta cambios de ruta

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((block) => {
      const pre = block.parentElement;

      if (pre.querySelector('.copy-btn')) return;

      const button = document.createElement('button');
      button.innerText = '📋 Copiar';
      button.className = 'copy-btn';

      Object.assign(button.style, {
        position: 'absolute',
        top: '8px',
        right: '8px',
        padding: '4px 8px',
        fontSize: '0.8rem',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        opacity: '0.6',
        transition: 'opacity 0.2s',
        zIndex: '10',
      });

      button.onmouseenter = () => (button.style.opacity = '1');
      button.onmouseleave = () => (button.style.opacity = '0.6');

      button.onclick = () => {
        navigator.clipboard.writeText(block.innerText).then(() => {
          button.innerText = '✅ Copiado!';
          setTimeout(() => (button.innerText = '📋 Copiar'), 2000);
        });
      };

      pre.style.position = 'relative';
      pre.appendChild(button);
    });
  }, [location]);

  return null;
}
