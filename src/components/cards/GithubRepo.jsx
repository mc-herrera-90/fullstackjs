import React, { useEffect, useState } from 'react';
import './GithubRepo.css';

const GitHubRepoCard = ({ owner, repo }) => {
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el repositorio');
        return res.json();
      })
      .then(setRepoData)
      .catch(setError);
  }, [owner, repo]);

  if (error) return <div className="github-card">Error: {error.message}</div>;
  if (!repoData) return <div className="github-card">Cargando repositorio...</div>;

  return (
    <div className="github-card">
      <a href={repoData.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
        <div className="github-header">
          <i className="fab fa-github github-icon" aria-hidden="true"></i>
          <h4>{repoData.name}</h4>
        </div>
        <p className="github-description">{repoData.description}</p>
        {repoData.language && (
          <div className="github-language">
            <i className="fas fa-code" aria-hidden="true"></i>
            <span>{repoData.language}</span>
          </div>
        )}
      </a>
    </div>
  );
};

export default GitHubRepoCard;
