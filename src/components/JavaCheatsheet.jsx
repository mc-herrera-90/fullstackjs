import React, { useState, useEffect, useRef  } from 'react';
import './JavaCheatsheet.css';
import hljs from 'highlight.js';

const sections = [
  {
    label: 'Variables',
    code: `int edad = 25;
double altura = 1.75;
String nombre = "Ana";
boolean activo = true;`
  },
  {
    label: 'Condicionales',
    code: `if (edad > 18) {
  System.out.println("Mayor de edad");
} else {
  System.out.println("Menor de edad");
}`
  },
  {
    label: 'Bucles',
    code: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

while (condicion) {
  // repetir mientras condicion sea verdadera
}`
  },
  {
    label: 'Funciones',
    code: `public static int sumar(int a, int b) {
  return a + b;
}`
  },
  {
    label: 'Clases',
    code: `public class Persona {
  String nombre;
  int edad;

  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public void saludar() {
    System.out.println("Hola, soy " + nombre);
  }
}`
  }
];

export default function JavaCheatsheet() {
  const [active, setActive] = useState('Variables');
  const codeRef = useRef(null);

  const activeSection = sections.find(section => section.label === active);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [active]);

  return (
    <div className="cheatsheet-container">
      <h1 className="cheatsheet-title">🧠 Java Cheatsheet</h1>
      <div className="tabs">
        {sections.map(({ label }) => (
          <button
            key={label}
            className={`tab-button ${label === active ? 'active' : ''}`}
            onClick={() => setActive(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <pre className="code-block">
        <code ref={codeRef} className="hljs language-java">{activeSection.code}</code>
      </pre>
    </div>
  );
}
