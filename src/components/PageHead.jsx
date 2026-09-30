import { Link } from 'react-router-dom'

export default function PageHead({ crumb, title, children }) {
  return (
    <section className="phead">
      <div className="wrap">
        <div className="crumb">
          <Link to="/">Home</Link> › {crumb}
        </div>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}
