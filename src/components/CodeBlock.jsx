import React from 'react';

const openInCodepen = (code) => {
  const data = {
    title: "HTML from MDX",
    html: code,
    editors: "100",
  };

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://codepen.io/pen/define';
  form.target = '_blank';

  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'data';
  input.value = JSON.stringify(data);

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

const CodeBlock = ({ className = '', children }) => {
  const language = className.replace('language-', '');
  const isHtml = language === 'html';

  let codeString = '';

  if (typeof children === 'string') {
    codeString = children;
  } else if (Array.isArray(children)) {
    codeString = children.map(child => (typeof child === 'string' ? child : '')).join('');
  } else {
    codeString = '';
  }

  return (
    <div style={{ position: 'relative' }}>
      {isHtml && (
        <button
          onClick={() => openInCodepen(codeString)}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 20,
            background: '#007acc',
            color: 'white',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
          }}
        >
          CodePen
        </button>
      )}
      <pre className={className}>
        <code className={`hljs ${className}`}>{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
