import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Card({ title, children, icon, to }) {

  const navigate = useNavigate();

  return to? (
    <Link to={to} className='anchor'>
    <article className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </article>
    </Link>
  ) : (
    <article className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </article>
  );
}
