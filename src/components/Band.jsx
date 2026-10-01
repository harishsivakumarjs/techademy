// children (optional) render under the text, e.g. an extra closing line
export default function Band({ title, text, action, children }) {
  return (
    <div className="band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
      {action}
    </div>
  )
}
