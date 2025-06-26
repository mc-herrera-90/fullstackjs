import React from 'react';

export default function StepHeading({ children }) {
  const text = React.Children.toArray(children).join('').trim();
  const match = /^PASO\s+(\d+)\s+(.*)/i.exec(text);

  if (match) {
    const [, numero, titulo] = match;
    return (
      <h2>
        <span style={{color: 'var(--main-secondary)'}}>
            PASO {numero}
        </span> ↙<br />
        {titulo}
      </h2>
    );
  }

  return <h2>{children}</h2>;
}