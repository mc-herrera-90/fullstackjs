import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../posts';

export function Blog() {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} style={{ marginBottom: '1.5rem' }}>
            <Link to={`/blog/${slug}`} style={{ textDecoration: 'none', color: 'var(--anchor-link)' }}>
              <h2>{title}</h2>
            </Link>
            <time style={{ color: '#666', fontSize: '0.9rem' }}>{date}</time>
          </li>
        ))}
      </ul>
    </div>
  );
}
