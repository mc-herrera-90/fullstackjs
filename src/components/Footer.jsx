export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        Hecho con ❤️ por <strong>Marco Contreras</strong> ·{' '}
        <a href="https://mcherrera.dev" target="_blank" rel="noopener noreferrer">
          mcherrera.dev
        </a>
      </p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  fontSize: '0.9rem',
  color: '#888',
  borderTop: '1px solid #eaeaea',
  marginTop: '2rem',
};
