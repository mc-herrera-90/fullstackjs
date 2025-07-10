import Card from '@components/Card';

export default function Home() {
  return (
    <div className="home-page">
      <p>
        Hola 👋, soy <strong>Marco Contreras</strong>, y esta página es el resultado del trabajo realizado durante el bootcamp de desarrollo FullStack Java.
      </p>
      <button
        onClick={() =>
          window.location.href =
            'https://chile.generation.org/programs/desarrollador-full-stack-jr-java/?gad_source=1&gad_campaignid=18549365964&gbraid=0AAAAAo9sh2Vp5uGjM64wpfh4I-OGhBZBp&gclid=CjwKCAjw6s7CBhACEiwAuHQcku7xmOOr6q7gH9BwMEsAODq0E0McGZSv6HfzwR7ZAWme51wIaNDTkxoCM_4QAvD_BwE'
        }
        className='btn-primary'
      >
        Empezar ahora
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.8rem',
          marginTop: '3rem',
        }}
      >
        <Card title="Desafíos Java" icon="☕" to="/desafios/m1">
          El módulo de desafíos Java introduce los fundamentos del lenguaje, incluyendo sintaxis, tipos de datos, estructuras de control, funciones, y principios iniciales de la programación orientada a objetos.
        </Card>
        <Card title="Introducción al desarrollo web" icon="🐱‍👤" to="/desafios/m2">
          Creación de páginas con HTML y CSS, abarcando estructura semántica, estilos, diseño responsivo y buenas prácticas, desde cero y con ejemplos prácticos y explicaciones claras.
        </Card>
        <Card title="CSS avanzado" icon="🎨" to="/desafios/m3">
          El módulo de CSS avanzado aborda los aspectos de construcción de layouts bajo una mirada responsiva ocupando Flexbox, CSS Grid, Media queries y Sass.
        </Card>
        <Card title="JavaScript para la web" icon="👨‍💻">
          JavaScript es un lenguaje de programación que nos permite agregar interacción a una página web.
        </Card>
        <Card title="React I" icon="⚛️">
          Crear aplicaciones web en React que muestren información, a través de componentes y hagan uso de la sintaxis JSX.
        </Card>
        <Card title="React II" icon="⚛️">
          Construir aplicaciones web basadas en componentes con React que manejan estados globales con Context API y ofrecen una navegación dinámica con React Router.
        </Card>
        <Card title="SQL" icon="🛢️">
          Implementar una base de datos que permita crear capas de persistencia de datos necesarias para el backend de una aplicación web a partir de especificaciones entregadas.
        </Card>
      </div>
    </div>
  );
}
