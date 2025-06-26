
export function BlogPost({ post, components = {} }) {
  const { Content, date} = post;
  return (
    <article className='page-container' style={{ margin: "0 auto"}}>
      <time style={{ color: '#666', fontSize: '0.9rem' }}>{date}</time>
      <section style={{ marginTop: '2rem' }}>
          <Content components={components} />
      </section>
    </article>
  );
}
