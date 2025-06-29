import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CopyCodeButtonInjector() {
  const location = useLocation();

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((block) => {
      const pre = block.parentElement;

      if (pre.querySelector('.copy-btn') || pre.querySelector('.code-filename')) return;

      const lines = block.innerText.split('\n');
      const filenameLine = lines[0].match(/filename:\s*(.+)/);

      if (filenameLine) {
        const filename = filenameLine[1].trim();

        // Detectar lenguaje por clase
        const classAttr = block.className; // ej: "hljs language-java"
        const langMatch = classAttr.match(/language-([\w]+)/);
        const lang = langMatch ? langMatch[1].toLowerCase() : null;

        // Iconos por lenguaje
        const icons = {
          java: 'fab fa-java',
          python: 'fab fa-python',
          javascript: 'fab fa-js',
          js: 'fab fa-js',
          html: 'fab fa-html5',
          css: 'fab fa-css3-alt',
          cpp: 'fas fa-code',
          c: 'fas fa-code',
          json: 'fas fa-brackets-curly',
          shell: 'fas fa-terminal',
          bash: 'fas fa-terminal',
          typescript: 'fab fa-js',
        };

        const iconClass = icons[lang] || 'fas fa-file-code';

        const label = document.createElement('div');
        label.className = 'code-filename';
        label.innerHTML = `<i class="${iconClass} fa-fw fa-lg" style="margin-right: 3px;"></i>${filename}`;

        Object.assign(label.style, {
          position: 'absolute',
          top: '0',
          left: '0',
          padding: '4px 8px',
          backgroundColor: '#f0f0f0',
          userSelect: 'none',
          color: '#333',
          fontSize: '0.75rem',
          borderBottomRightRadius: '6px',
          borderTopLeftRadius: '4px',
          fontFamily: 'monospace',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        });

        pre.appendChild(label);

        // Ocultar visualmente la línea del comentario
        const childNodes = Array.from(block.childNodes);
        for (const node of childNodes) {
          if (node.nodeType === Node.TEXT_NODE || node.nodeName === 'SPAN') {
            if (node.textContent.includes('filename:')) {
              const span = document.createElement('span');
              span.className = 'code-line-hidden';
              span.textContent = node.textContent + '\n';
              block.replaceChild(span, node);
              break;
            }
          }
        }
      }

      // Botón de copiar
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
