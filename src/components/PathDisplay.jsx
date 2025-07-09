import './PathDisplay.css';

export default function PathDisplay({ path }) {
  const segments = path.split('/').filter(Boolean);
  return (
    <div className="path-wrapper" aria-label={`Ruta ${path}`}>
      <i className="fas fa-folder icon" aria-hidden="true"></i>
      {segments.map((segment, index) => (
        <span className="path-segment" key={index}>
          {segment}
          {index < segments.length - 1 && <span className="separator">›</span>}
        </span>
      ))}
    </div>
  );
}
