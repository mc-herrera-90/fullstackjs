import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../posts';
import { BlogPost } from '../components/BlogPost';
import { MDXProvider } from '@mdx-js/react';
import { Card } from '../components/cards/Card';


export function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post no encontrado</p>;

  return (
        <MDXProvider components={{Card}}>
            <BlogPost post={post} />
        </MDXProvider>

  );
}
