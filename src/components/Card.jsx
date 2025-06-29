import { Link } from 'react-router-dom';

export default ({ title, children, icon, to }) => {

  return to? (
    <Link to={to} className='anchor'>
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h4 className='card-title'>{title}</h4>
      <div className="card-content">{children}</div>
    </div>
    </Link>
  ) : (
    <div className="card card--coming-soon">
      <div className="card-icon">{icon}</div>
      <h4 className='card-title'>{title} </h4>
      <div className="card-content">(Próximamente)</div>
    </div>
  );
}
