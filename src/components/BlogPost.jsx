
export function BlogPost({ post }) {
  const { Content, title, date} = post;
  return (
    <article>
      <time style={{ color: '#666', fontSize: '0.9rem' }}>{date}</time>
      <section style={{ marginTop: '2rem' }}>
          <Content />
      </section>
    </article>
  );
}
