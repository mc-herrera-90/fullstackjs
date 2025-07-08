export default function Blockquote({ type = 'info', children }) {
  return (
    <blockquote className={`blockquote ${type}`}>
      {children}
    </blockquote>
  )
}
