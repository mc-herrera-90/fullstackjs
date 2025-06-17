import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../posts';

export function Blog() {
  return (
    <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <h1>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} style={{ marginBottom: '1.5rem' }}>
            <Link to={`/blog/${slug}`} style={{ textDecoration: 'none', color: '#0d3b66' }}>
              <h2>{title}</h2>
            </Link>
            <time style={{ color: '#666', fontSize: '0.9rem' }}>{date}</time>
          </li>
        ))}
      </ul>
    </main>
  );
}
