export default function Band({ title, text, action }) {
  return (
    <div className="band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {action}
    </div>
  )
}
