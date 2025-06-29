import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Card({ title, children, icon, to }) {

  const navigate = useNavigate();

  return to? (
    <Link to={to} className='anchor'>
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h4 className='card-title'>{title}</h4>
      <div className="card-content">{children}</div>
    </div>
    </Link>
  ) : (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h4>{title}</h4>
      <div className="card-content">{children}</div>
    </div>
  );
}
