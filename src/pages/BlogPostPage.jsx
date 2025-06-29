import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../posts';
import { BlogPost } from '../components/BlogPost';
import { Card } from '../components/cards/Card';
import StepHeading from '../components/StepHeading';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const components = {
    h2: StepHeading,
  };

  if (!post) return <p>Post no encontrado</p>;

  return (
            <BlogPost post={post} components={components} />
  );
}
