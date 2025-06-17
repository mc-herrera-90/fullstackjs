import '../assets/post.css';

export function BlogPost({ post }) {
  const { Content, title, date} = post;
  return (
    <article className='post-container'>
      <h1>{title}</h1>
      <time style={{ color: '#666', fontSize: '0.9rem' }}>{date}</time>
      <section style={{ marginTop: '2rem' }}>
          <Content />
      </section>
    </article>
  );
}
