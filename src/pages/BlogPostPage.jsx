import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../posts';
import { BlogPost } from '../components/BlogPost';
import { Card } from '../components/cards/Card';
import StepHeading from '../components/StepHeading';
import FloatingToC from '../components/FloatingToc';
import PathDisplay from '../components/PathDisplay';
import Blockquote from '../components/Blockquote';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const components = {
    h2: StepHeading,
    FloatingToC,
    PathDisplay,
    Blockquote
  };

  if (!post) return <p>Post no encontrado</p>;

  return (
            <BlogPost post={post} components={components} />
  );
}
